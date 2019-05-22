import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import { styler, tween, merge, action, easing } from "popmotion";

import { Planet } from "./planet-face-svg";

export const AnimatedPlanet = () => {
  const ref = useRef(null);

  useEffect(() => {
    const eyeLeft = styler(
      ref.current.querySelector("#kawaii-face__eyes__arc path:first-child")
    );
    const eyeRight = styler(
      ref.current.querySelector("#kawaii-face__eyes__arc path:last-child")
    );
    const mouth = styler(ref.current.querySelector("#Combined-Shape"));
    const tongue = styler(ref.current.querySelector("#kawaii-face__tongue"));

    const showEye = tween({
      from: { scaleY: 0.3 },
      to: { scaleY: 1 },
      duration: 400
    });

    const blinkEye = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0.3 },
      duration: 100,
      flip: 1
    });

    const closeMouth = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0.3 },
      duration: 300,
      flip: 1
    });
    const eyeLeftAction = action(({ complete }) => {
      showEye.start({
        update: eyeLeft.set,
        complete: () => {
          complete();
          setInterval(() => blinkEye.start({ update: eyeLeft.set }), 2000);
        }
      });
    });

    const eyeRightAction = action(({ complete }) => {
      showEye.start({
        update: eyeRight.set,
        complete: () => {
          complete();
          setInterval(() => blinkEye.start({ update: eyeRight.set }), 2000);
        }
      });
    });

    const show = tween({
      from: { scaleY: 0.8 },
      to: { scaleY: 1 },
      duration: 200
    });

    const mouthAction = action(({ complete }) => {
      show.start({
        update: mouth.set,
        complete: () => {
          complete();
          setInterval(() => closeMouth.start({ update: mouth.set }), 3500);
        }
      });
    });
    const tongueDisappear = tween({
      from: { scaleY: 1 },
      to: { scaleY: 0 },
      duration: 300,
      flip: 1
    });

    const tongueAction = action(({ complete }) => {
      show.start({
        update: tongue.set,
        complete: () => {
          complete();
          setInterval(
            () => tongueDisappear.start({ update: tongue.set }),
            3500
          );
        }
      });
    });

    merge(eyeLeftAction, eyeRightAction, mouthAction, tongueAction).start();
  }, []);
  return (
    <Container ref={ref}>
      <Planet color="pink" size="20rem" />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 80%;
  bottom: 50px;
  transform: translateX(-50%);
`;
