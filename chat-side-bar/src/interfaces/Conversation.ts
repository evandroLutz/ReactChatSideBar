interface Conversation {
  id: number;
  title: string;
  messages: { text: string; isUser?: boolean }[];
}

export default Conversation;