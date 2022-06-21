import { ScreenSize } from "tokens";
import { useWindowSize } from "usehooks-ts";

export const useBreakpoint = (screenSize: ScreenSize) => {
  const { width } = useWindowSize();
  return width <= screenSize;
};

export const useCustomBreakpoint = (customSize: number) => {
  const { width } = useWindowSize();
  return width <= customSize;
};
