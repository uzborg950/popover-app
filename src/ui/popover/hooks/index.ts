import { MutableRefObject, useEffect, useLayoutEffect } from "react";
const handleClickOutside =
  (
    onClickOutside: () => void,
    containerRef: MutableRefObject<HTMLElement | null>
  ) =>
  (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as HTMLElement)
    ) {
      onClickOutside();
    }
  };
export const useOnClickOutside = ({
  containerRef,
  onClickOutside,
}: {
  containerRef: MutableRefObject<HTMLElement | null>;
  onClickOutside: () => void;
}) => {
  useLayoutEffect(() => {
    /**
     * register event listener to document and handle clicking outside the container
     */
    document.addEventListener(
      "mousedown",
      handleClickOutside(onClickOutside, containerRef)
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside(onClickOutside, containerRef)
      );
  }, [containerRef]);
};
