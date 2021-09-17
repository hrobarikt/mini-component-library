/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: { "--progressHeight": "8px", "--barHeight": "8px" },
  medium: { "--progressHeight": "12px", "--barHeight": "12px" },
  large: {
    "--progressHeight": "16px",
    "--barHeight": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      value={value}
      style={sizes[size]}
    >
      <Progress value={value}>
        <VisuallyHidden>{value}% complete</VisuallyHidden>
      </Progress>
    </Wrapper>
  );
};
const Progress = styled.div`
  border-radius: 4px;
  height: var(--progressHeight);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    border-radius: 4px 0 0 4px;
    background: ${COLORS.primary};
    width: ${(props) => props.value}%;
  }
`;

const Wrapper = styled.div`
  height: var(--barHeight);
  border-radius: var(--radius, 4px);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

export default ProgressBar;
