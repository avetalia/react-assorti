import styled, { css } from "styled-components";

export const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #446669;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: box-shadow 120ms;
  user-select: none;

  &:hover {
    background: #3a7bd5;
    color: white;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 0.5rem;
      font-size: 1rem;
    `}
`;
