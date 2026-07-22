"use client";

import { useState } from "react";
import GlobalChatForm from "../components/page-components/global-chat-components/global-chat-form";
import DisplayMessages from "../components/page-components/global-chat-components/display-messages";
import RegularNavbar from "../components/page-components/regular-navbar";

export interface Messages {
  messageId: string;
  messageContent: string;
  messagerId: string;
  messagerName: string;
}

export default function GlobalChat() {
  const [displayGlobalMessages, setDisplayGlobalMessages] = useState<
    Messages[]
  >([]);
  const [newGlobalMessage, setNewGlobalMessage] = useState<string>("");

  return (
    <>
      <RegularNavbar />
      
      <div className="flex justify-center">
        <div id="container" className="flex flex-col items-center mt-50">
          <h1 className="text-2xl">Global Chat</h1>
          <DisplayMessages
            displayMessages={displayGlobalMessages}
            setDisplayMessages={setDisplayGlobalMessages}
          />

          <GlobalChatForm
            newMessage={newGlobalMessage}
            setNewMessage={setNewGlobalMessage}
          />
        </div>
      </div>
    </>
  );
}
