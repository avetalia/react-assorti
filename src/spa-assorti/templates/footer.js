import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <StyledFooter> Footer</StyledFooter>;
};

const StyledFooter = styled.footer`
  grid-area: footer;
  margin-top: 4rem;
  display: block;
  justify-content: center;
  align-items: center;
  background: rgba(36, 37, 38, 0.08);
  height: 2rem;
`;
