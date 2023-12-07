import { Message } from "@/types";
import { getChat } from "@/utils/getChat";
import React from "react";
import ChatWindowBody from "./ChatWindowBody";

export const revalidate = 60;

const ChatWindow = async ({
  conversation,
  ownerName,
}: {
  conversation: string;
  ownerName: string;
}) => {
  const chat = (await getChat(conversation, ownerName)) as Message[];

  return <ChatWindowBody chat={chat} />;
};

export default ChatWindow;
