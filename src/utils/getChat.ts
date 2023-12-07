import dbConnect from "@/db/dbConnect";
import { cache } from "react";

export const getChat = cache(
  async (conversationUserNumber: string, ownerName: string) => {
    if (dbConnect) {
      const query = `
      SELECT message.*
      FROM message
      INNER JOIN conversation ON message."conversationId" = conversation.id
      INNER JOIN business_owner ON conversation."ownerId" = business_owner.id
      WHERE conversation."userNumber" = $1 AND business_owner.name = $2;
    `;
      return (await dbConnect.query(query, [conversationUserNumber, ownerName]))
        .rows;
    }
  }
);
