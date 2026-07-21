"use client";

import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/client";

export default function SocialSignInButton() {
  const signInWithGitHub = async () =>
    await authClient.signIn.social({
      callbackURL: "/",
      provider: "github",
    });

  return (
    <button onClick={signInWithGitHub} className="flex items-center gap-2 border py-2 px-4 rounded-md">
      <FaGithub />
      Sign In with GitHub
    </button>
  );
}
