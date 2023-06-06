import { ColoredContainer, Heading } from "../../styled";
import React, { useState } from "react";
import { Coords, Popover } from "../../../../ui/popover";
import { blueData } from "../LeftContainer/data";

export const RightContainer: React.FC = () => {
  const [anchorPosition, setAnchorPosition] = useState<Coords | undefined>();
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  return (
    <ColoredContainer
      $backgroundColor={"aliceblue"}
      onContextMenu={(event) => {
        event.preventDefault();
        setAnchorPosition({ x: event.clientX, y: event.clientY });
        setPopoverVisible(true);
      }}
    >
      <Heading>Right click anywhere</Heading>
      <Popover
        data={blueData}
        anchorPosition={anchorPosition}
        visible={popoverVisible}
        setVisible={setPopoverVisible}
      />
    </ColoredContainer>
  );
};
