import styled, { css } from "styled-components";

export const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  background: #3a7bd5;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: white;
  transition: box-shadow 120ms;
  user-select: none;

  &:hover {
    background: darkblue;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 0.5rem;
      font-size: 1rem;
    `}
`;
