import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const FullscreenExitIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8H8V6C8 5.45 8.45 5 9 5C9.55 5 10 5.45 10 6V9C10 9.55 9.55 10 9 10H6C5.45 10 5 9.55 5 9C5 8.45 5.45 8 6 8ZM8 16H6C5.45 16 5 15.55 5 15C5 14.45 5.45 14 6 14H9C9.55 14 10 14.45 10 15V18C10 18.55 9.55 19 9 19C8.45 19 8 18.55 8 18V16ZM15 19C15.55 19 16 18.55 16 18V16H18C18.55 16 19 15.55 19 15C19 14.45 18.55 14 18 14H15C14.45 14 14 14.45 14 15V18C14 18.55 14.45 19 15 19ZM16 6V8H18C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10H15C14.45 10 14 9.55 14 9V6C14 5.45 14.45 5 15 5C15.55 5 16 5.45 16 6Z"
      />
    </svg>
  );
};
