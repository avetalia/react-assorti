import React, { useRef } from "react";

import useOnClickOutside from "use-onclickoutside";
import PropTypes from "prop-types";

export const Modal = ({ children, onClose }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  return <div ref={ref}>{children}</div>;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};
