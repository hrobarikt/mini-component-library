import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect>{children}</NativeSelect>
      <CustomSelect>
        {displayedValue}
        <IconWrapper id="chevron-down" strokeWidth="2" size="24"></IconWrapper>
      </CustomSelect>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

export default Select;
