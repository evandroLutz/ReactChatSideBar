import { JSX } from "react";
import styled from "styled-components";

const StyledNewConversation = styled.div`
    cursor: pointer;
`;

interface NewConversationProps {
  clickAction: () => void;
}

function NewConversation({ clickAction }: NewConversationProps): JSX.Element {
  return (
    <StyledNewConversation 
      onClick={() => {
        clickAction();
      }}
    >
      Nova Conversa
    </StyledNewConversation>
  );
}

export default NewConversation;