import React from "react";
import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={check} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    display: none;
  }
  :hover {
    img {
      display: block;
    }
  }
`;
