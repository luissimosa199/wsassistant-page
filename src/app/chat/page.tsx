import AssistantChatBody from "@/components/AssistantChatBody";
import AssistantChatHeader from "@/components/AssistantChatHeader";
import React from "react";

const Chat = () => {
  return (
    <div className="grid grid-rows-[60px,1fr] h-screen overflow-hidden">
      <AssistantChatHeader />
      <AssistantChatBody />
    </div>
  );
};

export default Chat;
