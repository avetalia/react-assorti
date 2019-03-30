import React, { useState } from "react";
import { ICONS } from "@ui/ICONS";
import { Icon } from "@ui/elements";

export const Playground = () => {
  return (
    <div>
      Playground <MyIconTest />
    </div>
  );
};

export const MyIconTest = () => {
  const [isPressed, setPressed] = useState(false);
  const primary = "teal"; //theme.primary
  const secondary = "red"; ////theme.secondary

  const toggle = () => {
    setPressed(is => !is);
  };

  return (
    <>
      <Icon iconName={ICONS.FACEBOOK} color="red" />
      <Icon iconName={ICONS.TWITTER} />
      <Icon
        iconName={ICONS.TWITTER}
        size={80}
        color={primary}
        onClick={toggle}
      />
      <a href="#/" onClick={toggle}>
        <Icon
          iconName={ICONS.TWITTER}
          size={80}
          color={isPressed ? primary : secondary}
        />
      </a>
    </>
  );
};
