import AsideMenu from "@/components/AsideMenu";
import ChatWindowsContainer from "@/components/ChatWindowsContainer";
import { Conversation } from "@/types";
import { getConversations } from "@/utils/getConversations";

export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: { business: string };
}) {
  const businessName = params.business.toUpperCase();
  const conversations = (await getConversations(
    businessName
  )) as Conversation[];

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] md:h-screen md:w-max">
        <AsideMenu conversations={conversations} />
        <ChatWindowsContainer
          conversations={conversations}
          ownerName={businessName}
        />
      </div>
    </main>
  );
}
