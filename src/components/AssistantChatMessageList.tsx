import React, { useEffect, useRef } from "react";
import { ChatMessage } from "@/types";
import * as showdown from "showdown";

const AssistantChatMessageList = ({
  messages,
}: {
  messages: ChatMessage[];
}) => {
  const converter = new showdown.Converter();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div
      className="grow shrink basis-0 overflow-y-scroll space-y-4 pt-10 p-4 scrollbar"
      ref={scrollRef}
    >
      <div className="flex flex-col space-y-2">
        {messages.map((e, idx) => {
          const isAssistant = e.From === "Asistente";
          return (
            <div key={`message_${idx}`}>
              <p
                className={`font-semibold text-md capitalize ${
                  isAssistant ? "text-green-500" : "text-blue-500"
                }`}
              >
                {e.From}
              </p>
              {isAssistant ? (
                <p
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(e.Body),
                  }}
                ></p>
              ) : (
                <p className="text-gray-700">{e.Body}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssistantChatMessageList;
