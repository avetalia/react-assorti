import React from "react";
import styled from "styled-components";

import { Nav } from "../components";

export const Header = () => {
  return (
    <HeaderBox>
      <Nav />
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(36, 37, 38, 0.08);
`;
