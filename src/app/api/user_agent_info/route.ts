import dbConnect from "@/db/dbConnect";
import { cookies } from "next/headers";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const useCookie = cookies();
  const { userData } = await req.json();
  const newId = nanoid(13);

  try {
    if (!dbConnect) {
      throw new Error("Database connection pool is not initialized");
    }
    const client = await dbConnect.connect();

    try {
      await client.query("BEGIN");

      const insertUserAgentQuery = "INSERT INTO user_agent (id) VALUES ($1)";
      await client.query(insertUserAgentQuery, [newId]);

      const insertVisitQuery = `
          INSERT INTO visits (user_agent_id, timestamp, utm_params, entry_point, device, os, browser)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

      await client.query(insertVisitQuery, [
        newId,
        new Date(),
        userData.utm_params,
        userData.entry_point,
        userData.device,
        userData.os,
        userData.browser,
      ]);

      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      return Response.error();
    } finally {
      client.release();
    }

    useCookie.set("user_agent_id", newId, {
      httpOnly: process.env.NODE_ENV !== "development",
      expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      sameSite: "strict",
      path: "/",
    });

    return Response.json({ message: "userAgent registered" });
  } catch (error) {
    console.error("Error creating UserAgent:", error);
    return Response.json({ error: "Failed to create userAgent" });
  }
}

export async function PUT(req: Request) {
  const { userData, id } = await req.json();

  try {
    if (!dbConnect) {
      throw new Error("Database connection pool is not initialized");
    }

    const client = await dbConnect.connect();

    try {
      await client.query("BEGIN");

      const insertVisitQuery = `
          INSERT INTO visits (user_agent_id, timestamp, utm_params, entry_point, device, os, browser)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

      await client.query(insertVisitQuery, [
        id,
        new Date(),
        userData.utm_params,
        userData.entry_point,
        userData.device,
        userData.os,
        userData.browser,
      ]);

      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      return Response.error();
    } finally {
      client.release();
    }

    return Response.json({ message: "UserAgent updated" });
  } catch (error) {
    console.error("Error updating UserAgent:", error);
    return Response.json({ error: "Failed to update userAgent" });
  }
}
