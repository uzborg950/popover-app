import React, { useLayoutEffect, useRef } from "react";
import { Container } from "./styled";
import {
  PopoverElement,
  PopoverElementDataType,
} from "./components/popoverElement";
import {
  autoUpdate,
  ExtendedRefs,
  ReferenceType,
  useFloating,
} from "@floating-ui/react";
import { useOnClickOutside } from "./hooks";

export type Coords = {
  x: number;
  y: number;
};
export type PopoverProps = {
  data: PopoverElementDataType[];
  anchor?: HTMLElement | null;
  visible: boolean;
  anchorPosition?: Coords;
} & InteractionProps &
  InternalProps;
export type InteractionProps = {
  setVisible: (flag: boolean) => void;
};
type InternalProps = {
  isNested?: boolean; //for use internally by a nested popover - the onClickOutside callback should only run for the top most popover
};
const setAnchorPosition = (
  refs: ExtendedRefs<ReferenceType>,
  anchorPosition?: Coords
) => {
  if (!anchorPosition) return;
  refs.setPositionReference({
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: anchorPosition!.x,
        y: anchorPosition!.y,
        top: anchorPosition!.y,
        right: anchorPosition!.x,
        bottom: anchorPosition!.y,
        left: anchorPosition!.x,
      };
    },
  });
};
export const Popover: React.FC<PopoverProps> = (props) => {
  const { refs, floatingStyles } = useFloating({
    elements: {
      reference: props.anchor,
    },
    placement: "right-start",
    whileElementsMounted: autoUpdate,
  });
  const containerRef = useRef(null);
  useOnClickOutside({
    containerRef,
    onClickOutside: () => !props.isNested && props.setVisible(false), //set to run at only the top most popover to avoid closing popover when expandable element is clicked on
  });

  useLayoutEffect(() => {
    setAnchorPosition(refs, props.anchorPosition);
  }, [props.anchorPosition, refs]);

  if (!props.visible) return null;
  return (
    <div ref={refs.setFloating} style={floatingStyles}>
      <Container ref={containerRef}>
        {props.data.map((dataElement) => (
          <PopoverElement
            {...dataElement}
            key={dataElement.title}
            setVisible={props.setVisible}
          />
        ))}
      </Container>
    </div>
  );
};
