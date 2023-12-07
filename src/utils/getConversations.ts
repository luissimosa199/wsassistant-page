import dbConnect from "@/db/dbConnect";
import { cache } from "react";

export const getConversations = cache(async (business: string) => {
  if (dbConnect) {
    const queryText = `
      SELECT conversation.*
      FROM conversation
      INNER JOIN business_owner ON conversation."ownerId" = business_owner.id
      WHERE business_owner.name = $1
    `;

    const values = [business];

    return (await dbConnect.query(queryText, values)).rows;
  }
});
