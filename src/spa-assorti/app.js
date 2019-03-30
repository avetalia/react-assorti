import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import { HomePage, About, Playground, UnsplashSearch } from "./pages";
import { Header, Footer } from "./templates";

const App = () => {
  return (
    <Router>
      <Header />
      <LayoutGrid>
        <Route path="/About/" component={About} />
        <Route path="/playground/" component={Playground} />
        <Route path="/unsplash-search/" component={UnsplashSearch} />
        <Route path="/" exact component={HomePage} />
      </LayoutGrid>

      <Footer />
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
