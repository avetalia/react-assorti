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
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      viewBox="0 0 1024 1024"
    >
      <path id="#icon" d={props.iconName} />

      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
        <use href="#icon" />
      </svg>
    </StyledSVG>
  );
};
//preserveAspectRatio does not make difference here

const StyledSVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: 2rem;
  height: 2rem;
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

//https://stackoverflow.com/questions/10028345/calculating-viewbox-parameters-based-on-path-elements-in-svg
//dynamic viewBox size
