import { createTheme } from "@vanilla-extract/css";
import { defaultColors } from "./base/base-theme.css";
import { darkColors } from "./dark-theme/dark-theme.css";
import { boxShadows, textShadows, typography, spacing } from "../tokens";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

// default theme (light colors)
export const lightThemeRawValues = {
  spacing,
  text: typography,
  boxShadows,
  textShadows,
  colors: defaultColors,
};
export const [themeClass, theme] = createTheme(lightThemeRawValues);

// dark theme copies all default theme values
// and overrides colors
export const darkThemeRawValues = {
  ...lightThemeRawValues,
  colors: darkColors,
};

export const darkThemeClass = createTheme(theme, darkThemeRawValues);

// exporting enums created in the tokens such that users do not need to reach into src/tokens
export { FontWeight, FontStyle, Breakpoint } from "../tokens";
