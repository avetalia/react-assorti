import React from "react";
import styled from "styled-components";

import { Link } from "../../ui/elements";

export const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/playground">Playground</NavLink>

        <NavLink to="/unsplash-search">Unsplash Search</NavLink>

        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export const NavLink = styled(Link)`
  text-decoration: none;
  color: green;
  padding: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;
