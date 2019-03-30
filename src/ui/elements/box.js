import styled, { css } from "styled-components";

export const Box = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 2rem;
  box-sizing: border-box;

  &: hover {
    display: flex;
    flex-flow: column;
    flex-shrink: 0;
    border-radius: 4px;
    padding: 2rem;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    //transform: scale(1.001);
  }
`;
