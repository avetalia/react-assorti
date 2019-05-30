import React, { useState } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

import { ICONS } from "@ui/ICONS";
import { Icon, ZeroButton } from "@ui/elements";

const PressedIcon = ({ theme, like }) => {
  const [isPressed, setPressed] = useState(false);

  const toggle = () => {
    setPressed(is => !is);
    like();
  };

  return (
    <ZeroButton onClick={toggle}>
      <Icon
        iconName={ICONS.TWITTER}
        size={80}
        color={isPressed ? theme.primary.main : theme.secondary.main}
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

export default withTheme(PressedIcon);
