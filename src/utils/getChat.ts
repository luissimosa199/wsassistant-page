import dbConnect from "@/db/dbConnect";
import { cache } from "react";

export const getChat = cache(async (conversation: string) => {
  if (dbConnect) {
    const query = 'SELECT * FROM message WHERE "conversationUserNumber" = $1';
    return (await dbConnect.query(query, [conversation])).rows;
  }
});
