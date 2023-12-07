import React from "react";
import ChatWindow from "./ChatWindow";
import { Conversation } from "@/types";

const ChatWindowsContainer = async ({
  conversations,
  ownerName,
}: {
  conversations: Conversation[];
  ownerName: string;
}) => {
  return (
    <div className="grid md:flex md:flex-wrap gap-4 p-4 h-screen">
      {!conversations.length && (
        <p className="text-2xl font-semibold text-gray-500">
          No hay conversaciones abiertas
        </p>
      )}

      {conversations.map((e) => {
        return (
          <ChatWindow
            key={`chat_window_${e.userNumber}`}
            conversation={e.userNumber}
            ownerName={ownerName}
          />
        );
      })}
    </div>
  );
};

export default ChatWindowsContainer;

// grid-cols-[1fr_1fr_1fr]
