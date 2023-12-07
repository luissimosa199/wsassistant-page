import { Conversation } from "@/types";
import React from "react";

const AsideMenuChatList = async ({
  conversations,
}: {
  conversations: Conversation[];
}) => {
  return (
    <div className="overflow-y-auto p-4 space-y-4">
      {!conversations.length && (
        <p className="text-sm text-gray-500">No hay mensajes</p>
      )}

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
