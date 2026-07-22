"use server"

import { db } from "@/app/src";
import { messageTable } from "@/auth-schema";
import { desc } from "drizzle-orm";

export const getMessages = async() => {
  const messages = await db
    .select({
      messageId: messageTable.messageId,
      messageContent: messageTable.messageContent,
      messagerId: messageTable.messagerId,
      messagerName: messageTable.messagerName,
    })
    .from(messageTable)
    .limit(50)
    .orderBy(desc(messageTable.createdAt));

  return messages;
}