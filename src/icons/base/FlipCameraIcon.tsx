import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const FlipCameraIcon = ({
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
        d="M11.7212 4.375C7.95138 4.375 4.8877 7.56938 4.8877 11.5H6.92636C7.43887 11.5 7.68943 12.1413 7.33637 12.5094L4.15879 15.8225C3.93101 16.06 3.57794 16.06 3.35016 15.8225L0.172585 12.5094C-0.191868 12.1413 0.0586934 11.5 0.571206 11.5H2.60987C2.60987 6.25125 6.68719 2 11.7212 2C12.9057 2 14.0446 2.2375 15.081 2.67687C15.8441 2.9975 16.0491 4.01875 15.4682 4.62438C15.1607 4.945 14.6938 5.07563 14.2838 4.8975C13.4979 4.55313 12.6209 4.375 11.7212 4.375ZM16.1172 10.4788L19.2948 7.16564C19.5112 6.94002 19.8757 6.94002 20.092 7.17752L23.2696 10.4906C23.6341 10.8588 23.3835 11.5 22.871 11.5H20.8323C20.8323 16.7488 16.755 21 11.721 21C10.5365 21 9.39762 20.7625 8.36121 20.3231C7.59813 20.0025 7.39313 18.9813 7.97398 18.3756C8.28148 18.055 8.74844 17.9244 9.15845 18.1025C9.9443 18.4469 10.8213 18.625 11.721 18.625C15.4908 18.625 18.5545 15.4306 18.5545 11.5H16.5158C16.0033 11.5 15.7528 10.8588 16.1172 10.4788Z"
      />
    </svg>
  );
};
