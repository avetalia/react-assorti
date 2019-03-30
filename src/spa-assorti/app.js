import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { HomePage, About, Playground, UnsplashSearch } from "./pages";
import { Header, Footer } from "./templates";

const App = () => {
  return (
    <Router>
      <Header />
      <div>app.js page</div>
      <Route path="/about/" component={About} />
      <Route path="/playground/" component={Playground} />
      <Route path="/unsplash-search/" component={UnsplashSearch} />
      <Route path="/" exact component={HomePage} />
      <Footer />
    </Router>
  );
};

export default App;
