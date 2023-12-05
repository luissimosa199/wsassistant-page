import AsideMenu from "@/components/AsideMenu";
import ChatWindowsContainer from "@/components/ChatWindowsContainer";
import { Conversation } from "@/types";
import { getConversations } from "@/utils/getConversations";

export default async function Home() {
  const conversations = (await getConversations()) as Conversation[];

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] md:h-screen md:overflow-hidden">
        <AsideMenu conversations={conversations} />
        <ChatWindowsContainer conversations={conversations} />
      </div>
    </main>
  );
}
