import { useState } from "react";
import styled from "styled-components";
import ChatPage from "./components/pages/ChatPage";
import Sidebar from "./components/atoms/SideBar";
import Conversation from "../src/interfaces/Conversation";

const StyledAppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;


export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [currentId, setCurrentId] = useState(1);

  const [isNewChat, setisNewChat] = useState(true);

  const currentConversation = conversations.find((c) => c.id === currentId)!;

  return (
    <StyledAppWrapper>
      <Sidebar
        conversations={conversations}
        currentId={currentId}
        onSelect={setCurrentId}
        setisNewChat={setisNewChat}
      />
      <ChatPage isNewChat={isNewChat} key={currentId} initialMessages={currentConversation?.messages} setConversations={setConversations} />
    </StyledAppWrapper>
  );
}
