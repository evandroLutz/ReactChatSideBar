import { useState, JSX, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Conversation from "../../interfaces/Conversation";

const StyledClose = styled.div`
  position: absolute;
  right: 0;
  cursor: pointer;
  padding: 16px;
`;

interface CloseProps {
  clickAction: () => void;
}

function Close({ clickAction }: CloseProps): JSX.Element {
  return (
    <StyledClose 
      onClick={() => {
        clickAction();
      }}
    >
      X
    </StyledClose>
  );
}

export default Close;