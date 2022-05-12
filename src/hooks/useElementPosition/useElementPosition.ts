import { useCallback, useState, RefObject } from "react";
import { useEventListener } from "../useEventListener";

export const useElementPosition = (element: RefObject<HTMLElement>): { x: number; y: number } => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const { x, y } = element.current?.getBoundingClientRect() || {};
  const updateRefPosition = useCallback(() => {
    if (x && y) {
      setPosition({ x, y });
    }
  }, [x, y]);
  if (!loaded && element.current) {
    updateRefPosition();
    setLoaded(true);
  }
  useEventListener({ type: "resize", handler: updateRefPosition });
  useEventListener({ type: "scroll", handler: updateRefPosition, useCapture: true });
  return position;
};
