import { useState, useRef, useEffect, JSX, SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import Conversation from "../../interfaces/Conversation";
import Close from '../atoms/Close';

const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
`;

const StyledChatHeader = styled.div`
  display: flex;
  height: 60px;
  background-color: #333;
  color: white;
  align-items: center;
  padding: 0 16px;
  font-weight: bold;
`;

const StyledMessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledMessage = styled.div<{ isUser?: boolean }>`
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: ${({ isUser }) => (isUser ? "#4f93ff" : "#e0e0e0")};
  color: ${({ isUser }) => (isUser ? "white" : "black")};
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const StyledChatInputWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  background-color: #ddd;
`;

const StyledChatInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const StyledSendButton = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: #4f93ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3b7ccc;
  }
`;

interface ChatPageProps {
  initialMessages?: { text: string; isUser?: boolean }[];
  setConversations: Dispatch<SetStateAction<Conversation[]>>;
  isNewChat: boolean;
}

function ChatPage({ initialMessages = [{text: "Olá, bem vindo ao nosso chat!", isUser: false}], setConversations, isNewChat }: ChatPageProps): JSX.Element {

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    if(messages){
        setMessages([...messages, { text: input, isUser: true }]);
        setInput("");
    }
  };

  function setNewConversation(): void {
    setConversations(prev => {
        const lastId = prev.length > 0 ? prev[prev.length - 1].id : 0;
        return [
            ...prev,
            {
                id: lastId + 1,
                title: `chat${lastId + 1}`,
                messages,
            }
        ];
    });
  }


  return (
    <StyledChatWrapper>
      <StyledChatHeader>
         {isNewChat ? "Inicie uma conversa" : "Releia uma conversa" }
        <Close clickAction={() => {setNewConversation()}} />
      </StyledChatHeader>
      <StyledMessagesContainer>
        {messages.length > 0 ? messages.map((msg, index) => (
          <StyledMessage key={index} isUser={msg.isUser}>
            {msg.text}
          </StyledMessage>
        )): null}
        <div ref={messagesEndRef} />
      </StyledMessagesContainer>
        {isNewChat ? <StyledChatInputWrapper>
        <StyledChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <StyledSendButton onClick={sendMessage}>Enviar</StyledSendButton>
      </StyledChatInputWrapper> : null }
    </StyledChatWrapper>
  );
}

export default ChatPage;
