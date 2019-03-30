import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Icon = props => {
  const [color, setColor] = useState("orange");

  useEffect(() => {
    props.color && setColor(props.color);
  }, [props]);

  return (
    <StyledSVG
      color={color}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path d={props.iconName} />
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
  fill: ${props => props.color};
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: fill 0.2s;
  }
`;

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number
};

Icon.defaultProps = {
  size: 16
};
