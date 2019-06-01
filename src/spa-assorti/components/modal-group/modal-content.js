import React from "react";
import styled, { css } from "styled-components";

import PropTypes from "prop-types";
import { Icon, Box, Button, Text } from "@ui/elements";
import { ICONS } from "@ui/ICONS";

export const ContentSwitcherModal = ({ data, tag, close }) => {
  const contentComponents = {
    trash: ModalContentTrash,
    update: ModalContentUpdate,
    standart: ModalContent
  };

  //Dynamic Component Names
  const TagName = contentComponents[tag || "standart"];

  return (
    <div>
      <TagName data={data} onClose={close} />
      )}
    </div>
  );
};

const ModalContent = ({ data, onClose, onDeleteClick }) => {
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

  ${({ gridArea }) =>
    gridArea === "popupHeading" &&
    css`
      color: red;
    `}
`;

//---------

const ModalContentUpdate = ({ data, onClose }) => {
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

const ModalContentTrash = ({ data, onClose }) => {
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
