"use client";

import { addMessage } from "@/utils/utils";
import React from "react";

interface Props {
  newMessage: string;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function GlobalChatForm({ newMessage, setNewMessage}: Props) {
  const sendMessage =  async (event: React.FormEvent) => {
    if(newMessage !== ''){
      try {
        event.preventDefault();
      }
      catch(err) {
        console.error(err);
      }
    }
  }

  return (
    <form id="global-chat-form" onSubmit={sendMessage} className="mt-5">
      <input
        type="text"
        placeholder="Be nice!"
        value={newMessage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
