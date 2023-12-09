import { Message } from "@/types";
import * as showdown from "showdown";
import React from "react";

const ChatWindowMessageList = ({ chat }: { chat: Message[] }) => {
  const converter = new showdown.Converter();

  return (
    <div className={`h-full flex flex-col space-y-4 p-4`}>
      <div className="grow shrink basis-0 overflow-y-scroll scrollbar">
        {chat.map((e) => {
          const isAssistant = e.author === "asistente";

          return (
            <div
              key={`chat_window_message_${e.id}`}
              className="mb-4 pr-2"
            >
              <span
                className={`font-semibold text-md capitalize ${
                  isAssistant ? "text-green-500" : "text-blue-500"
                }`}
              >
                {e.author}:{" "}
              </span>
              {isAssistant ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(e.content),
                  }}
                  className=""
                ></span>
              ) : (
                <span className="">{e.content}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatWindowMessageList;
