import styled from "styled-components";
import { useState } from "react";
import { InteractionProps, Popover } from "../index";

const Wrapper = styled.div`
  :hover {
    color: lime;
    background-color: #333;
  }
  background-color: white;
  padding: 8px 16px 8px 16px;
`;

export type PopoverElementDataType = {
  children?: PopoverElementDataType[];
  title: string;
};
export type PopoverElementType = PopoverElementDataType & InteractionProps;
export const PopoverElement: React.FC<PopoverElementType> = (props) => {
  const [expand, shouldExpand] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <Wrapper
      ref={setAnchor}
      onMouseOver={() => shouldExpand(true)}
      onMouseOut={() => shouldExpand(false)}
      onClick={() => !props.children?.length && props.setVisible(false)}
    >
      <span>{props.title}</span>
      {props.children && expand && (
        <Popover
          data={props.children}
          anchor={anchor}
          visible
          setVisible={props.setVisible}
          isNested={true}
        />
      )}
    </Wrapper>
  );
};
