import React, { useState } from "react";
import { ColoredContainer, Heading } from "../../styled";
import { Popover } from "../../../../ui/popover";
import { redData } from "./data";

export const LeftContainer: React.FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  return (
    <ColoredContainer $backgroundColor={"#de9999"}>
      <Heading>Click on button</Heading>
      <button ref={setAnchor} onClick={() => setPopoverVisible(true)}>
        Popover
      </button>
      <Popover
        data={redData}
        anchor={anchor}
        visible={popoverVisible}
        setVisible={setPopoverVisible}
      />
    </ColoredContainer>
  );
};
