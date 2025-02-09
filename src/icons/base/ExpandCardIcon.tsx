import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const ExpandCardIcon = ({
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
        d="M17.0292 10.9437L17.0292 6.90871L12.986 6.90051C12.3463 6.90051 11.8296 6.38383 11.8296 5.74413C11.8296 5.10443 12.3463 4.58776 12.986 4.58776L18.1938 4.57956C18.5006 4.57921 18.7949 4.70093 19.0119 4.91787C19.2288 5.13481 19.3505 5.42913 19.3502 5.73593L19.342 10.9437C19.342 11.5834 18.8253 12.1001 18.1856 12.1001C17.5459 12.1001 17.0292 11.5834 17.0292 10.9437ZM6.90887 12.9941L6.90887 17.0291L10.9439 17.0455C11.2507 17.0452 11.545 17.1669 11.7619 17.3838C11.9789 17.6008 12.1006 17.8951 12.1003 18.2019C12.1003 18.8416 11.5836 19.3583 10.9439 19.3583H5.7443C5.1046 19.3583 4.58792 18.8416 4.58792 18.2019L4.59612 12.9941C4.59612 12.3544 5.1128 11.8377 5.7525 11.8377C6.05929 11.8374 6.35362 11.9591 6.57056 12.176C6.7875 12.393 6.90922 12.6873 6.90887 12.9941Z"
      />
    </svg>
  );
};
