import React from "react";
import { ICONS } from "@ui/ICONS";
import { Icon, Box, Button } from "@ui/elements";
import { PressedIcon } from "../components/pressed-icon";
import { ModalButton } from "../components/modal-button";
import { WinterSummer } from "@features/winter-summer/winter-summer";
import { Palindrome } from "@features/algorythms/palindrome";
import { DoubleCounter } from "@features/examples/double-counter";

export const Playground = () => {
  return (
    <div>
      Playground <TestIcons />
      <Box>
        <WinterSummer />
      </Box>
      <Palindrome text="deleveled" />
      <Palindrome text="leveled" />
      <Palindrome text="level" />
      <Button>sss</Button>
      <br /> Double counter:
      <DoubleCounter />
      <br />
      modal button <ModalButton />
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
