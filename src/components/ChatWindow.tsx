import { Message } from "@/types";
import { getChat } from "@/utils/getChat";
import React from "react";
import ChatWindowBody from "./ChatWindowBody";

const ChatWindow = async ({ conversation }: { conversation: string }) => {
  const chat = (await getChat(conversation)) as Message[];

  return <ChatWindowBody chat={chat} />;
};

export default ChatWindow;
