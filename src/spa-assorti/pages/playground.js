import React from "react";
import { ICONS } from "@ui/ICONS";
import { Icon, Box, Button } from "@ui/elements";
import PressedIcon from "../components/pressed-icon";
import { ModalButton } from "../components/modal-group/modal-button";
import { WinterSummer } from "@features/winter-summer/winter-summer";
import { Palindrome } from "@features/algorythms/palindrome";
import { DoubleCounter } from "@features/examples/double-counter";
import { SmallFilter } from "@features/examples/small-filter";
import { ZeroButton } from "../../ui/elements";

export const Playground = () => {
  const data = {
    title: "some random2 title",
    text: "Description of the modal window"
  };
  return (
    <div>
      Playground <TestIcons />
      <Box>
        <WinterSummer />
      </Box>
      <hr />
      <SmallFilter />
      <hr />
      <Palindrome text="deleveled" />
      <Palindrome text="leveled" />
      <Palindrome text="level" />
      <Button>sss</Button>
      <br /> Double counter:
      <DoubleCounter />
      <br />
      modal button
      <ModalButton data={data} tag="update">
        <Icon iconName={ICONS.TRASH} color="red" />
      </ModalButton>
    </div>
  );
};

export const TestIcons = () => {
  const like = () => {
    console.log("hey! you like me, sweet");
  };
  return (
    <>
      <PressedIcon like={like} />
      <PressedIcon like={like} />
      <Icon iconName={ICONS.FACEBOOK} color="red" />
      <Icon iconName={ICONS.TWITTER} />
      <ZeroButton>
        <Icon iconName={ICONS.TWITTER} />
      </ZeroButton>
    </>
  );
};
