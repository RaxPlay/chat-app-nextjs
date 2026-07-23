import { getSession } from "@/lib/auth";
import GlobalChat from "../global-chat/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if(!session) redirect("/");

  const userName = session.user.name;
  const userId = session.user.id;

  return (
    <>
      <GlobalChat userName={userName} userId={userId}/>
    </>
  );
}
