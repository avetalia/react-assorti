import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Tooltip = props => {
  const [color, setColor] = useState("orange");
