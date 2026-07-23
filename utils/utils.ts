"use server"

import { db } from "@/app/src";
import { messageTable } from "@/auth-schema";
import { asc } from "drizzle-orm";

interface addExpenseInterface {
  messageContent: string;
  messagerId: string;
  messagerName: string
}

export const getMessages = async() => {
  const messages = await db
    .select({
      messageContent: messageTable.messageContent,
      messagerId: messageTable.messagerId,
      messagerName: messageTable.messagerName,
    })
    .from(messageTable)
    .limit(50)
    .orderBy(asc(messageTable.createdAt));

  return messages;
}

export const addMessage = async({messageContent, messagerId, messagerName}: addExpenseInterface) => {
  await db
    .insert(messageTable)
    .values({
      messageContent,
      messagerId,
      messagerName
    })
}