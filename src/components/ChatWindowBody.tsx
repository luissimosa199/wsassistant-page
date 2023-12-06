"use client";

import React, { useState } from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowInput from "./ChatWindowInput";
import ChatWindowMessageList from "./ChatWindowMessageList";
import { Message } from "@/types";

const ChatWindowBody = ({ chat }: { chat: Message[] }) => {
  const [minWindow, setMinWindow] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col border dark:border-gray-800 rounded-lg relative max-w-md ${
        minWindow ? "h-fit self-end" : ""
      }`}
    >
      <ChatWindowHeader setMinWindow={setMinWindow} />
      {!minWindow && (
        <>
          <ChatWindowMessageList chat={chat} />
          {/* <ChatWindowInput /> */}
        </>
      )}
    </div>
  );
};

export default ChatWindowBody;
