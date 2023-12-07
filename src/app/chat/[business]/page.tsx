import AssistantChatBody from "@/components/AssistantChatBody";
import AssistantChatHeader from "@/components/AssistantChatHeader";
import { cookies } from "next/headers";
import React from "react";

const Chat = () => {
  const userAgentCookie = cookies().get("user_agent_id")?.value;

  return (
    <div className="grid grid-rows-[60px,1fr] h-screen overflow-hidden">
      <AssistantChatHeader />
      <AssistantChatBody userAgentCookie={userAgentCookie} />
    </div>
  );
};

export default Chat;
