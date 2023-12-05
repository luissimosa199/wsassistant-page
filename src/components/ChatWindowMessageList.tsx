import { Message } from "@/types";
import React from "react";

const ChatWindowMessageList = ({ chat }: { chat: Message[] }) => {
  return (
    <div className={`h-full flex flex-col space-y-4 p-4`}>
      <div className="grow shrink basis-0 overflow-y-scroll scrollbar">
        {chat.map((e) => {
          return (
            <div
              key={e.id}
              className="mb-2 pr-2"
            >
              <span className="font-semibold">{e.author}: </span>
              <span>{e.content}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatWindowMessageList;
