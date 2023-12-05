export interface Conversation {
  ownerId: number;
  userNumber: string;
}

export interface Message {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  conversationUserNumber: string;
}
