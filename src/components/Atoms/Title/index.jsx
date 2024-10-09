import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.L};
  font-family: ${FONTFAMILY.ROBOTO};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXTS.M}
  }
`;
