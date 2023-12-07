"use client";

import React, { useEffect, useRef, useState } from "react";
import AssistantChatMessageList from "./AssistantChatMessageList";
import AssistantChatForm from "./AssistantChatForm";
import useTrackUserAgent from "@/hooks/useTrackUserAgent";
import { Socket, io } from "socket.io-client";
import { ChatMessage } from "@/types";
import useGetBusinessName from "@/hooks/useGetBusinessName";

const AssistantChatMessageListMemoized = React.memo(AssistantChatMessageList);

const AssistantChatBody = ({
  userAgentCookie,
}: {
  userAgentCookie: string | undefined;
}) => {
  const businessName = useGetBusinessName();

  useTrackUserAgent(userAgentCookie);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (businessName) {
      const socketURL =
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000";
      socketRef.current = io(socketURL, {
        reconnection: true,
        transports: ["websocket"],
      });

      socketRef.current.on("message", (message) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { From: "Asistente", Body: message },
        ]);
      });

      socketRef.current.on("connect_error", (err) => {
        console.error("Connection Error:", err.message);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.off("message");
        socketRef.current.off("connect_error");
        socketRef.current.disconnect();
      }
    };
  }, [businessName]);

  const sendMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { From: "Tu", Body: newMessage },
    ]);
    if (socketRef.current) {
      socketRef.current.emit("message", {
        business: businessName,
        From: userAgentCookie,
        Body: newMessage,
      });
    }
    setNewMessage("");
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="flex flex-col border dark:border-gray-800 rounded-lg relative">
        {/* <div className="absolute top-0 right-0 p-2 flex space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
              <path d="M2 20h20"></path>
              <path d="M14 12v.01"></path>
            </svg>
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
              <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
              <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
              <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
            </svg>
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
              <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
              <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
              <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
            </svg>
          </button>
        </div> */}

        <AssistantChatMessageListMemoized messages={messages} />
        <AssistantChatForm
          sendMessage={sendMessage}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
        />
      </div>
    </div>
  );
};

export default AssistantChatBody;
