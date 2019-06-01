import React from "react";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <div>
      <GradientBg>Home the main page</GradientBg>
    </div>
  );
};

const GradientBg = styled.div`
  width: 100%;
  height: 100rem;
  margin-top: -2rem;
  padding: 2rem;
  background: linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
  }
`;
