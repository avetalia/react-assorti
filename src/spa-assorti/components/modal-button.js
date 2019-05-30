import React, { useState } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { Icon, Box, Button, Text, Modal } from "@ui/elements";
import { ICONS } from "@ui/ICONS";
//Dynamic Component Names with JSX for Content in Modals

export const ModalButton = ({ data }) => {
  const [opened, setOpened] = useState(false);
  const close = () => setOpened(() => false);
  const toggle = () => setOpened(isOpen => !isOpen);

  return (
    <div>
      <ZeroButton onClick={toggle}>
        <Icon iconName={ICONS.TRASH} color="red" size={44} />
      </ZeroButton>

      {opened && (
        <Modal onClose={close}>
          <ContentSwitcherModal data={data} onClose={close} tag="standart" />
        </Modal>
      )}
    </div>
  );
};

ModalButton.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const ModalContent = ({ data, onClose, onDeleteClick }) => {
  return (
    <Box popup>
      <GridPopUp>
        <Cell gridArea="popupHeading">
          <h3>{data.title}</h3>
        </Cell>

        <Cell gridArea="popupClose">
          <RightS>
            <Button small onClick={onClose}>
              <Icon iconName={ICONS.X} color="grey" />
            </Button>
          </RightS>
        </Cell>
        <Cell gridArea="popupContent">
          <Text>{data.text}</Text>
        </Cell>
        <Cell gridArea="popupButtonYes">
          <Button onClick={onDeleteClick}>Yes, delete</Button>
        </Cell>

        <Cell gridArea="popupButtonNo">
          <Button onClick={onClose}>No, please cancel</Button>
        </Cell>
      </GridPopUp>
    </Box>
  );
};

ModalContent.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func
};

ModalContent.defaultProps = {
  title: "undefined",
  onDeleteClick: () => {}
};

const RightS = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1 rem;
`;

const GridPopUp = styled.div`
  display: grid;
  grid-template-areas:
    "popupHeading popupClose"
    "popupContent popupContent"
    "popupButtonYes popupButtonNo";
  grid-template-rows: 5rem 1fr 3rem;
  grid-template-columns: 50% 50%;
  grid-gap: 8px;
`;
const Cell = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`;

//---------

export const ContentSwitcherModal = ({ data, tag, close }) => {
  const contentComponents = {
    trash: ModalContentTrash,
    update: ModalContentUpdate,
    standart: ModalContent
  };

  const TagName = contentComponents[tag || "standart"];

  return (
    <div>
      <TagName data={data} onClose={close} />
      )}
    </div>
  );
};

export const ModalContentUpdate = ({ data, onClose }) => {
  return (
    <Box popup>
      <h2>{data.title}</h2>
      lets update something here!
      <RightS>
        <Button small onClick={onClose}>
          <Icon iconName={ICONS.X} color="grey" />
        </Button>
      </RightS>
      <Button onClick={onClose}>No, please cancel</Button>
    </Box>
  );
};

export const ModalContentTrash = ({ data, onClose }) => {
  return (
    <Box popup>
      <GridPopUp>
        <Cell gridArea="popupHeading">
          <h2>{data.title}</h2>
        </Cell>

        <Cell gridArea="popupClose">
          <RightS>
            <Button small onClick={onClose}>
              <Icon iconName={ICONS.X} color="grey" />
            </Button>
          </RightS>
        </Cell>
        <Cell gridArea="popupContent">
          <Text>{data.text}</Text>
          Call me to delete something, I am trash popup
        </Cell>
        <Cell gridArea="popupButtonYes">
          <Button>Yes, delete</Button>
        </Cell>

        <Cell gridArea="popupButtonNo">
          <Button onClick={onClose}>No, please cancel</Button>
        </Cell>
      </GridPopUp>
    </Box>
  );
};
