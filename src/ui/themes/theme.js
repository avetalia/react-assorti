import React, { createContext, useContext,  useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { light } from "@ui/themes/light";
import { dark } from "@ui/themes/dark";

const ThemeContext = createContext({
  darkActive: false,
  theme: light,
  toggle: () => {},
  setTheme: () => {}
});

//Do not forget propTypes for children

export const ToggleThemeProvider = React.memo(({ children }) => {
  const getCurrentTheme = () =>
    String(localStorage.getItem("dark-theme")) === "true";

  const [darkActive, toggle] = useState(getCurrentTheme());
  const [theme, setTheme] = useState(light);

  return (
    <ThemeContext.Provider value={{ setTheme, theme, darkActive, toggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
});

export const ToggleThemeButton = () => {
  const { darkActive, theme, setTheme, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        localStorage.setItem("dark-theme", String(!darkActive));
        setTheme(theme => (theme === light ? dark : light)); //Can I === here?
        toggle(darkActive => darkActive === false);
      }}
    >
      {darkActive ? "D🌔" : "L☀️"}
      {theme.themeName}
    </button>
  );
};
