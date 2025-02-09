import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const ShareIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  className,
  fill = theme.colors.grey[500],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path d="M17.1667 16.1021C16.4489 16.1021 15.8067 16.4008 15.3156 16.8687L8.58167 12.7368C8.62889 12.5078 8.66667 12.2788 8.66667 12.0398C8.66667 11.8009 8.62889 11.5719 8.58167 11.3429L15.24 7.25076C15.75 7.74859 16.4206 8.05724 17.1667 8.05724C18.7344 8.05724 20 6.72307 20 5.07029C20 3.41751 18.7344 2.08334 17.1667 2.08334C15.5989 2.08334 14.3333 3.41751 14.3333 5.07029C14.3333 5.30925 14.3711 5.53825 14.4183 5.76725L7.76 9.85936C7.25 9.36154 6.57944 9.05289 5.83333 9.05289C4.26556 9.05289 3 10.3871 3 12.0398C3 13.6926 4.26556 15.0268 5.83333 15.0268C6.57944 15.0268 7.25 14.7181 7.76 14.2203L14.4844 18.3622C14.4372 18.5713 14.4089 18.7903 14.4089 19.0094C14.4089 20.6124 15.6461 21.9167 17.1667 21.9167C18.6872 21.9167 19.9244 20.6124 19.9244 19.0094C19.9244 17.4064 18.6872 16.1021 17.1667 16.1021Z" />
    </svg>
  );
};
