import React from "react";
import { ICONS } from "@ui/ICONS";
import { Icon, Box } from "@ui/elements";
import { PressedIcon } from "../components/pressed-icon";
import { WinterSummer } from "@features/winter-summer/winter-summer";

export const Playground = () => {
  return (
    <div>
      Playground <TestIcons />
      <Box>
        <WinterSummer />
      </Box>
    </div>
  );
};

export const TestIcons = () => (
  <>
    <PressedIcon />
    <PressedIcon />
    <Icon iconName={ICONS.FACEBOOK} color="red" />
    <Icon iconName={ICONS.TWITTER} />
  </>
);
