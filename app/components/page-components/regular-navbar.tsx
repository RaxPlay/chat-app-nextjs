import Link from "next/link";
import SocialSignOutButton from "../auth-components/social-sign-out-button";

export default function RegularNavbar() {
  return (
    <header>
      <nav className="flex justify-center items-center p-4 rounded-b-lg">
        <div className="flex gap-20">
          <Link href="/global-chat" className="hover:underline">
            Global Chat
          </Link>
          <Link href="/private-messages" className="hover:underline">
            Messages
          </Link>
        </div>

        <SocialSignOutButton/> 
      </nav>
    </header>
  );
}
