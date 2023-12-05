import dbConnect from "@/db/dbConnect";

export async function getConversations(): Promise<any> {
  if (dbConnect) {
    return (await dbConnect.query("SELECT * FROM conversation")).rows;
  }
}
