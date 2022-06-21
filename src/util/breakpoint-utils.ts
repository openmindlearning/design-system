import { StyleRule } from "@vanilla-extract/css";
import {
  FeatureQueries,
  StyleWithSelectors,
} from "@vanilla-extract/css/dist/declarations/src/types";
import { Breakpoint, ScreenSize } from "../tokens";

/**
 * Returns a custom breakpoint function that can be reused to create styles at that breakpoint.
 * @example
 * ```typescript
 * const atMaxWidth = makeCustomBreakpoint("550px");
 * export const componentStyles = style({
 *   "@media": {
 *     ...atMaxWidth({ padding: "20px" }),
 *   },
 * });
 * ```
 */
export const makeCustomBreakpoint =
  (breakpoint: string | number) =>
  (styles: StyleRule): FeatureQueries<StyleWithSelectors> => ({
    [`(max-width: ${breakpoint})`]: { ...styles },
  });

export const atLargeBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Large)(styles);

export const atDesktopBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Desktop)(styles);

export const atTabletBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Tablet)(styles);

export const atSmallBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Small)(styles);

export const atMobileBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Mobile)(styles);

export const atScreenSizeSm = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(ScreenSize.sm)(styles);
export const atScreenSizeMd = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(ScreenSize.md)(styles);
export const atScreenSizeLg = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(ScreenSize.lg)(styles);
export const atScreenSizeXl = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(ScreenSize.xl)(styles);
export const atScreenSizeXXL = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(ScreenSize.xxl)(styles);
