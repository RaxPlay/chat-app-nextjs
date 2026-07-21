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
    <div className="flex justify-center">
      <button
        onClick={signInWithGitHub}
      >
        <FaGithub />
        Sign In with GitHub
      </button>
    </div>
  );
}
