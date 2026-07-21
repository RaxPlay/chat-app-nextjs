import Link from "next/link"

export default function AuthNavbar() {
  return (
    <header>
      <nav className="flex justify-center gap-20 p-4 rounded-b-lg">
        <Link href="/sign-in" className="hover:underline">Sign-In</Link>
        <Link href="/sign-up" className="hover:underline">Sign-up</Link>
      </nav>
    </header>
  )
}
