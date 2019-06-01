import styled, { css } from "styled-components";
//import { prismcssDark } from "./prismcss"

const palette = {
  blueGrey50: "#eceff1",
  blueGrey500: "#78909c",
  blueGrey800: "#37474f",
  grey200: "#eeeeee",
  blue300: "#64b5f6",
  blue400: "#42a5f5",
  green500: "#4caf50",
  deepOrange400: "#ff7043",
  black: "#000",
  white: "#fff",
  text: "#333"
};

export const light = {
  themeName: "light",
  primary: {
    main: `${palette.Blue300}`,
    hover: `${palette.Blue400}`
  },
  secondary: {
    main: "#AEEA00",
    hover: "#E4FF54"
  },
  success: `${palette.green500}`,
  error: `${palette.deepOrange400}`,
  neutral: `${palette.blueGrey500}`,
  background: `${palette.grey200}`,
  black: `${palette.black}`,
  white: `${palette.white}`,
  text: `${palette.text}`,
  link: `${palette.blueGrey800}`
};
