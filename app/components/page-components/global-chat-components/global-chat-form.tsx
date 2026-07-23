"use client";

import React from "react";
import { Messages } from "@/app/global-chat/page"
import { socket } from "@/lib/socketClient";
import { addMessage } from "@/utils/utils";

interface Props {
  messageContent: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  displayMessages: Messages[]
  setDisplayMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
  messagerName: string
  messagerId: string
}

export default function GlobalChatForm({ messageContent, setNewMessage, setDisplayMessages, displayMessages, messagerName, messagerId}: Props) {
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if(messageContent.trim() !== ""){
      const data = { messageContent, messagerName, messagerId };
      setDisplayMessages([...displayMessages, { messageContent , messagerId, messagerName }])
      socket.emit("global-message", data);
      await addMessage({ messageContent, messagerName, messagerId })
      setNewMessage("");
    }
  }

  return (
    <form id="global-chat-form" onSubmit={sendMessage} className="mt-5">
      <input
        type="text"
        placeholder="Be nice!"
        value={messageContent}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
