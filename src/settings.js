import { css } from "styled-components";

export const FONT_BASE = 10;
export const ROOT_FONT_SIZE = "62.5%";

export const pixelToRem = (px, base = FONT_BASE) => `${(1 / base) * px}rem`;

export const DEFAULT_PADDING = "15px";

export const GREY_LIGHTER_COLOR = "#BBBBBB";
export const GREY_DARKER_COLOR = "#333333";
export const BLACK_COLOR = "#000";

export const GREEN_COLOR = "#72BF44";
export const YELLOW_COLOR = "#fae800";
export const RED_COLOR = "#ED1C24";
export const mediaSizes = {
  small: "screen and (max-width: 39.9375rem)",
  medium: "screen and (min-width: 40rem)",
  mediumOnly: "screen and (min-width: 40rem) and (max-width: 63.9375rem)",
  large: "screen and (min-width: 64rem)",
  largeOnly: "screen and (min-width: 64rem) and (max-width: 74.9375rem)",
};

export const mediaQueries = Object.keys(mediaSizes).reduce((acc, size) => {
  acc[size] = (strings, ...interpolations) => css`
    @media ${mediaSizes[size]} {
      ${css(strings, ...interpolations)};
    }
  `;
  return acc;
}, {});

export const palette = {
  initialColor: GREY_LIGHTER_COLOR,
  primaryColor: GREEN_COLOR,
  primaryTextColor: BLACK_COLOR,
  redTextColor: RED_COLOR,
  redColor: RED_COLOR,
  yellowTextColor: YELLOW_COLOR,
  yellowColor: YELLOW_COLOR,
};
