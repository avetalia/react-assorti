import React, { useState } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { Icon, Box, Button, Text, Modal } from "@ui/elements";
import { ICONS } from "@ui/ICONS";
//Dynamic Component Names with JSX for Content in Modals

export const ModalContent = ({ children, title, onClose, onDeleteClick }) => {
  return (
    <Box popup>
      <GridPopUp>
        {title && (
          <CellPopUpHeading>
            <h3>{title}</h3>
          </CellPopUpHeading>
        )}

        <CellPopUpClose>
          <RightC
            basis="25%"
            justify="flex-end"
            align-items="center"
            gap="1.4em"
            align="center"
          >
            <Button small onClick={onClose}>
              <Icon iconName={ICONS.X} color="grey" />
            </Button>
          </RightC>
        </CellPopUpClose>

        <CellPopUpContent>
          <Text>{children}</Text>
        </CellPopUpContent>
        <CellPopUpButtonYes>
          <Button onClick={onDeleteClick}>Yes, delete</Button>
        </CellPopUpButtonYes>

        <CellPopUpButtonNo>
          <Button onClick={onClose}>No, please cancel</Button>
        </CellPopUpButtonNo>
      </GridPopUp>
    </Box>
  );
};

ModalContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func
};

ModalContent.defaultProps = {
  title: "undefined",
  onDeleteClick: () => {}
};

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
const CellPopUpHeading = styled.div`
  grid-area: popupHeading;
`;
const CellPopUpClose = styled.div`
  grid-area: popupClose;
`;
const CellPopUpContent = styled.div`
  grid-area: popupContent;
`;
const CellPopUpButtonYes = styled.div`
  grid-area: popupButtonYes;
`;
const CellPopUpButtonNo = styled.div`
  grid-area: popupButtonNo;
`;

export const ModalButton = () => {
  const [opened, setOpened] = useState(false);
  const close = () => setOpened(() => false);
  const toggle = () => setOpened(isOpen => !isOpen);

  return (
    <div>
      <ZeroButton onClick={toggle}>
        <Icon iconName={ICONS.TRASH} color="red" size="20px" />
      </ZeroButton>

      {opened && (
        <Modal onClose={close}>
          <ModalContent title="Title some" onClose={close} />
        </Modal>
      )}
    </div>
  );
};

const ZeroButton = styled.button`
  background-color: transparent;
  border: none;
`;

const RightC = styled.div`
  display: flex;
  align: center;
  align-items: center;
  justify: flex-end;
  padding: 1.2 rem;
`;

//background: ${({ props }) => props.gridArea};
