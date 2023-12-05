import dbConnect from "@/db/dbConnect";
import { cache } from "react";

export const getConversations = cache(async () => {
  if (dbConnect) {
    return (await dbConnect.query("SELECT * FROM conversation")).rows;
  }
});
