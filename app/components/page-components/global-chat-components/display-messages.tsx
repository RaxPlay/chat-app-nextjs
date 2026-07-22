"use client";

import React, { useEffect } from "react";
import { Messages } from "@/app/global-chat/page";
import { getMessages } from "@/utils/utils";

interface Props {
  displayMessages: Messages[];
  setDisplayMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
}

export default function DisplayMessages({
  displayMessages,
  setDisplayMessages,
}: Props) {
  //First fetch.
  useEffect(() => {
    const firstFetch = async () => {
      setDisplayMessages(await getMessages());
    }

    firstFetch()
  }, [])

  return (
    <>
      <div className="border border-[#3169a5] bg-[#001d3d] rounded-md w-[85%] h-fit py-5 mt-4">
        {displayMessages.map((message) => (
          <div key={message.messageId} className="px-3">
            <span className="text-[#5aa7f9]">{message.messagerName} -</span>{" "}
            {message.messageContent}
          </div>
        ))}
      </div>
    </>
  );
}
