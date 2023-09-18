"use client";

import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import { firestore } from "../firebase/firebase";

type Props = {
  session: Session | null;
  toggleSidebar: () => void;
};

function NewChat({ session, toggleSidebar }: Props) {
  const router = useRouter();

  const createNewChat = async () => {
    try {
      if (!session) return;

      const doc = await addDoc(
        collection(firestore, `users/${session.user?.email}/chats`),
        {
          userId: session?.user?.email,
          userEmail: session?.user?.email,
          createdAt: serverTimestamp() as Timestamp,
        }
      );

      if (!doc.id) return;

      router.push(`/chat/${doc.id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex">
      <div className="chatRow border-gray-500 hover:bg-[#202123] border flex-1 justify-start rounded-lg" onClick={createNewChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-white"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <p>New Chat</p>
      </div>
      <div onClick={() => toggleSidebar()} className="flex min-w-[50px] ml-2 justify-center items-center border-gray-500 border rounded-lg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  );
}

export default NewChat;