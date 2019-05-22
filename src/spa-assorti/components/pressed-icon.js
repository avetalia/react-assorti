import React, { useState } from "react";
import PropTypes from "prop-types";

import { ICONS } from "@ui/ICONS";
import { Icon, ZeroButton } from "@ui/elements";

export const PressedIcon = ({ like }) => {
  const [isPressed, setPressed] = useState(false);
  //const primary = ; //theme.primary
  //const secondary = "red"; ////theme.secondary

  const toggle = () => {
    setPressed(is => !is);
    like();
  };

  return (
    <ZeroButton onClick={toggle}>
      <Icon
        iconName={ICONS.TWITTER}
        size={80}
        color={isPressed ? ({ theme }) => theme.primary.main : "green"}
      />
    </ZeroButton>
  );
};

PressedIcon.propTypes = {
  like: PropTypes.func
};

PressedIcon.defaultProps = {
  like: () => {}
};
