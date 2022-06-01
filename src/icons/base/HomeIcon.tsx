import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};
export const HomeIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = DEFAULT_ICON.FILL,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M9.99863 19.3274V14.3274H13.9986V19.3274C13.9986 19.8774 14.4486 20.3274 14.9986 20.3274H17.9986C18.5486 20.3274 18.9986 19.8774 18.9986 19.3274V12.3274H20.6986C21.1586 12.3274 21.3786 11.7574 21.0286 11.4574L12.6686 3.92736C12.2886 3.58736 11.7086 3.58736 11.3286 3.92736L2.96863 11.4574C2.62863 11.7574 2.83863 12.3274 3.29863 12.3274H4.99863V19.3274C4.99863 19.8774 5.44863 20.3274 5.99863 20.3274H8.99863C9.54863 20.3274 9.99863 19.8774 9.99863 19.3274Z"
        {...{ fill }}
      />
    </svg>
  );
};
