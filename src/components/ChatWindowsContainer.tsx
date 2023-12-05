import React from "react";
import ChatWindow from "./ChatWindow";
import { Conversation } from "@/types";

const ChatWindowsContainer = async ({
  conversations,
}: {
  conversations: Conversation[];
}) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 p-4 h-screen">
      {conversations.map((e) => {
        return (
          <ChatWindow
            key={e.userNumber}
            conversation={e.userNumber}
          />
        );
      })}
    </div>
  );
};

export default ChatWindowsContainer;
