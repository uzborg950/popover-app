import { PopoverProps } from "../../../../ui/popover";
import { PopoverElementDataType } from "../../../../ui/popover/components/popoverElement";

export const redData = [
  { title: "Hello" },
  { title: "Close" },
  {
    title: "Hover",
    children: [
      { title: "Hello" },
      { title: "Spacemaker" },
      { title: "World" },
      { title: "Close" },
      {
        title: "Hover",
        children: [
          {
            title: "Hover",
            children: [{ title: "Hover", children: [{ title: "Hover" }] }],
          },
        ],
      },
    ],
  },
] as PopoverElementDataType[];
export const blueData = [
  { title: "Hover", children: [{ title: "Empty" }, { title: "Close" }] },
  { title: "I do nothing" },
];
