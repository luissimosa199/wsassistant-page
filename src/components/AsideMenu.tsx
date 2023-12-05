import React from "react";
import AsideMenuHeader from "./AsideMenuHeader";
import AsideMenuChatList from "./AsideMenuChatList";
import { Conversation } from "@/types";

const AsideMenu = ({ conversations }: { conversations: Conversation[] }) => {
  return (
    <div className="border-r bg-gray-100/40 dark:bg-gray-800/40">
      <AsideMenuHeader />
      <AsideMenuChatList conversations={conversations} />
    </div>
  );
};

export default AsideMenu;
