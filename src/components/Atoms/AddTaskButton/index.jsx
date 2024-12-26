import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/color";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={plus} />
      <StyledButtonText>タスクを追加</StyledButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  padding: 2px 6px;
  align-items: center;
  gap: 10px;
  color: ${COLOR.GREEN};
  background-color: ${COLOR.GREEN_TRANSPARENT};
  border-radius: 12px;
  img {
    width: 20px;
    height: 20px;
  }
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const StyledButtonText = styled.div`
  size: ${TEXTS.S};
`;
