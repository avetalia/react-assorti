import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import { ToggleThemeProvider } from "@ui/themes/theme";
import { GlobalStyles } from "@ui/themes/global-styles";

import {
  HomePage,
  About,
  Playground,
  UnsplashSearch,
  CommentsPage,
  MrForms
} from "./pages";
import { Header, Footer } from "./templates";

const App = () => {
  return (
    <Router>
      <ToggleThemeProvider>
        <>
          <GlobalStyles />
          <Header />
          <LayoutGrid>
            <Route path="/About/" component={About} />
            <Route path="/playground/" component={Playground} />
            <Route path="/unsplash-search/" component={UnsplashSearch} />
            <Route path="/comments/" component={CommentsPage} />
            <Route path="/forms/" component={MrForms} />
            <Route path="/" exact component={HomePage} />
          </LayoutGrid>

          <Footer />
        </>
      </ToggleThemeProvider>
    </Router>
  );
};

export default App;

const LayoutGrid = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  padding: 2rem 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "main"
    "footer";
`;
