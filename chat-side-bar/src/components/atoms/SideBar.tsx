import { JSX, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import NewConversation from "./NewConversation";

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #222;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const SidebarHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ConversationItem = styled.div<{ active?: boolean }>`
  padding: 10px 12px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "#4f93ff" : "transparent")};
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    background-color: #555;
  }
`;

interface Conversation {
  id: number;
  title: string;
  messages: { text: string; isUser?: boolean }[];
}

interface SidebarProps {
  conversations: Conversation[];
  currentId: number;
  onSelect: (id: number) => void;
  setisNewChat: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ conversations, currentId, onSelect, setisNewChat }: SidebarProps): JSX.Element {
  return (
    <SidebarWrapper>
      <SidebarHeader>Conversas</SidebarHeader>
       <ConversationItem>
          <NewConversation clickAction={() => {
            setisNewChat(true);
            onSelect(0)
           }}/>
        </ConversationItem>
      {conversations.map((conv) => (
        <ConversationItem
          key={conv.id}
          active={conv.id === currentId}
          onClick={() => {
            onSelect(conv.id);
            setisNewChat(false);
          }}
        >
          {conv.title}
        </ConversationItem>
      ))}
    </SidebarWrapper>
  );
}

export default SideBar;