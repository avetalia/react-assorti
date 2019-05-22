import styled, { css } from "styled-components";
//import { prismcssDark } from "./prismcss"

const palette = {
  blueGrey900: "#263238",
  blueGrey800: "#37474f",
  grey200: "#eeeeee",
  blue300: "#64b5f6",
  blue400: "#42a5f5",
  green500: "#4caf50",
  deepOrange400: "#ff7043",
  black: "#000",
  white: "#fff"
};

export const dark = {
  themeName: "dark",
  primary: {
    main: `${palette.blue400}`,
    hover: `${palette.blue300}`
  },
  secondary: {
    main: "#AEEA00",
    hover: "#E4FF54"
  },
  success: `${palette.green500}`,
  error: `${palette.deepOrange400}`,
  neutral: `${palette.blueGrey800}`,
  background: `${palette.blueGrey900}`,
  black: `${palette.black}`, //black can be not so black
  white: `${palette.white}`,
  text: `${palette.grey200}`,
  link: `${palette.blue300}`
};
