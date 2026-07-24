"use client";

import React, { useEffect } from "react";
import { Messages } from "@/app/global-chat/page";
import { socket } from "@/lib/socketClient";
import { getMessages } from "@/utils/utils";

interface Props {
  displayMessages: Messages[];
  setDisplayMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
}

export default function DisplayMessages({
  displayMessages,
  setDisplayMessages,
}: Props) {
  useEffect(() => {
    socket.on("global-message", (data) => {
      setDisplayMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("global-message");
    };
  }, [displayMessages]);

  useEffect(() => {
    const fetchMessages = async () => {
      setDisplayMessages(await getMessages());
    };
    fetchMessages();
  }, []);

  return (
    <>
      <div className="border border-[#3169a5] bg-[#001d3d] rounded-md w-[85%] h-fit py-5 mt-4">
        {displayMessages.map((message, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-1"
          >
            <span>
              <span className="text-[#5aa7f9]">{`${message.messagerName} - `}</span>
              {message.messageContent}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
