import { Conversation } from "@/types";
import React from "react";

const AsideMenuChatList = async ({
  conversations,
}: {
  conversations: Conversation[];
}) => {
  return (
    <div className="overflow-y-auto p-4 space-y-4">
      {/* <div className="border rounded-md p-4 relative bg-blue-100">
        <h3 className="font-medium">Chat 1</h3>
        <p className="text-sm text-gray-500">Último mensaje...</p>
        <div>
          <div className="mt-2 absolute top-0 right-0 p-2">
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
              <line
                x1="22"
                x2="16"
                y1="2"
                y2="8"
              ></line>
              <line
                x1="16"
                x2="22"
                y1="2"
                y2="8"
              ></line>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="mt-2 absolute bottom-0 right-0 p-2">
              <span className="text-sm text-red-500">No leído</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* conversation card */}
      {conversations?.map((e) => {
        return (
          <div
            key={`aside_${e.userNumber}`}
            className="border rounded-md p-4"
          >
            <h3 className="font-medium">{e.userNumber}</h3>
            <p className="text-sm text-gray-500">Último mensaje...</p>
          </div>
        );
      })}
    </div>
  );
};

export default AsideMenuChatList;
