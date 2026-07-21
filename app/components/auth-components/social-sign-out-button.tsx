"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/client";

export default function SocialSignOutButton() {
  const router = useRouter();

  const signOut = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/signin"),
      },
    });

  return <button onClick={signOut}>Sign-Out</button>;
}
