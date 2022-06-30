import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { IconProps, DEFAULT_ICON } from "./constants";

export const RightChevronIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <rect
        x="15.5559"
        y="7.07129"
        width="2"
        height="12"
        rx="1"
        transform="rotate(45 15.5559 7.07129)"
        fill={fill}
      />
      <rect
        x="7.07153"
        y="1.41406"
        width="2"
        height="12"
        rx="1"
        transform="rotate(-45 7.07153 1.41406)"
        fill={fill}
      />
    </svg>
  );
};
