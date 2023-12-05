import dbConnect from "@/db/dbConnect";

export async function getChat(conversation: string): Promise<any> {
  if (dbConnect) {
    const query = 'SELECT * FROM message WHERE "conversationUserNumber" = $1';
    return (await dbConnect.query(query, [conversation])).rows;
  }
}
