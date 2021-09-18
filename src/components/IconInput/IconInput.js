import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-thickness": "1px",
    "--font-size": 14 / 16 + "rem",
    "--icon-size": 16,
    "--height": 24 / 16 + "rem",
  },
  large: {
    "--border-thickness": "2px",
    "--font-size": 18 / 16 + "rem",
    "--icon-size": 24,
    "--height": 36 / 16 + "rem",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];
  if (typeof styles === "undefined") {
    throw new Error(`The size ${size} is not supported`);
  }
  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={styles["--icon-size"]}></IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{ "--width": width + "px" }}
      ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const TextInput = styled.input`
  border: 0;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  color: currentColor;
  font-weight: 700;
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
