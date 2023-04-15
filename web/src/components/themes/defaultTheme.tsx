import React from "react";
import { ThemeProvider } from "styled-components";

export interface props {
  children: React.ReactNode;
}
export type ThemeType = typeof theme;

const fontSizes = {
  xxsmall: "0.75rem",
  xsmall: "0.875rem",
  small: "1rem",
  normal: "1.5rem",
  big: "2rem",
};
export const theme = {
  breakPoints: {
    xsmall: "576px",
    small: "768px",
    medium: "992px",
    large: "1200px",
    xlarge: "1400px",
  },
  colors: {
    text: "#808080",
    red: "#CC1331",
    redDark: "#691D27",
    black: "#000",
    white: "#FFF",
    background: "#fafafa",
    greyDark: "#B6B6B6",
    grey: "#DDD",
    greyLight: "#EEE",
    green: "#8ca098",
    orange: "#eb684b",
  },
  radius: {
    none: "0",
    small: "0.25rem",
    big: "0.5rem",
    round: "100rem",
  },
  fonts: {
    default: ["Montserrat", "sans-serif"].join(","),
  },
  fontSizes: {
    ...fontSizes,
    h1: fontSizes.big,
    h2: fontSizes.normal,
    h3: fontSizes.small,
    h4: fontSizes.xsmall,
  },
  lineHeight: {
    small: 0.5,
    reset: 1,
    normal: 1.25,
    large: 1.5,
  },
  spacing: {
    xxsmall: "0.25rem",
    xsmall: "0.5rem",
    small: "1rem",
    normal: "1.5rem",
    large: "2rem",
    xlarge: "4rem",
  },
};

const Theme = ({ children }: props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
