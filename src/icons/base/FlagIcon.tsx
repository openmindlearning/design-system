import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const FlagIcon = ({
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
        d="M12.78 4.05L13.5 5.5H18.5C19.05 5.5 19.5 5.95 19.5 6.5V14.5C19.5 15.05 19.05 15.5 18.5 15.5H13.11C12.74 15.5 12.39 15.29 12.22 14.95L11.5 13.5H6.5V19.5C6.5 20.05 6.05 20.5 5.5 20.5C4.95 20.5 4.5 20.05 4.5 19.5V4.5C4.5 3.95 4.95 3.5 5.5 3.5H11.88C12.26 3.5 12.61 3.71 12.78 4.05ZM13.5 13.5H17.5V7.5H12.5L11.5 5.5H6.5V11.5H12.5L13.5 13.5Z"
      />
    </svg>
  );
};
