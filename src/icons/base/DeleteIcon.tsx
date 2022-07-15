import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const DeleteIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className,
  fill = theme.colors.grey[500],
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      data-testid={testId}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.86004 2.19333L10.3334 2.66667H12C12.3667 2.66667 12.6667 2.96667 12.6667 3.33333C12.6667 3.7 12.3667 4 12 4H4.00004C3.63337 4 3.33337 3.7 3.33337 3.33333C3.33337 2.96667 3.63337 2.66667 4.00004 2.66667H5.66671L6.14004 2.19333C6.26004 2.07333 6.43337 2 6.60671 2H9.39337C9.56671 2 9.74004 2.07333 9.86004 2.19333ZM4.00004 12.6667C4.00004 13.4 4.60004 14 5.33337 14H10.6667C11.4 14 12 13.4 12 12.6667V6C12 5.26667 11.4 4.66667 10.6667 4.66667H5.33337C4.60004 4.66667 4.00004 5.26667 4.00004 6V12.6667ZM6.00004 6H10C10.3667 6 10.6667 6.3 10.6667 6.66667V12C10.6667 12.3667 10.3667 12.6667 10 12.6667H6.00004C5.63337 12.6667 5.33337 12.3667 5.33337 12V6.66667C5.33337 6.3 5.63337 6 6.00004 6Z"
        fill={fill}
      />
    </svg>
  );
};
