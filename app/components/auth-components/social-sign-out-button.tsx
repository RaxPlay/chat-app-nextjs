"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client";

export default function SocialSignOutButton() {
  const router = useRouter();

  const signOut = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/sign-in"),
      },
    });

  return (
    <div className="fixed left-[85%]">
      <button onClick={signOut} id="sign-out-button" >Sign-Out</button>
    </div>
  );
}
