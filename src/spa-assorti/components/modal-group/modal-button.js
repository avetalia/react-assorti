import React, { useState } from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { Modal } from "@ui/elements";
import { ContentSwitcherModal } from "./modal-content";

export const ModalButton = ({ data, tag, children }) => {
  const [opened, setOpened] = useState(false);
  const close = () => setOpened(() => false);
  const toggle = () => {
    console.log("smthdd");
    setOpened(isOpen => !isOpen);
  };
  console.log(opened);

  return (
    <div>
      <ZeroButton onClick={toggle}>{children}</ZeroButton>

      {opened && (
        <Modal onClose={close}>
          <ContentSwitcherModal data={data} onClose={close} tag={tag} />
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
