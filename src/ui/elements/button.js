import styled, { css } from "styled-components";

export const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.primary.main};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: black;
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
