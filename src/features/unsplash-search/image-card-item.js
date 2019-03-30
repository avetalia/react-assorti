import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

export const ImageCard = ({ image }) => {
  const { description, urls } = image;
  const ref = useRef(null);

  const [spans, setSpans] = useState(0);

  const change = () => {
    console.log("Click rabotaet");
    const height = ref.current.clientHeight;
    const pictureSpans = Math.ceil(height / 10);
    console.log(pictureSpans);
    setSpans(pictureSpans);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("load", change);
  });

  return (
    <ImageStyled ref={ref} src={urls.regular} alt={description} span={spans} />
  );
};

export const ImageStyled = styled.img`
  width: 100%;
  grid-row-end: span ${props => props.span};
  border-radius: 4px;
  &:hover {
    background: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
    background-blend-mode: multiply;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  }
`;
