import Link from "next/link"
// import { getServerSession } from "next-auth"
// import { useSession, signIn, signOut } from "next-auth/react"
// import { authOptions } from "./[...nextauth]/auth"
export default async function Home() {
  return (
    <pre>
      <Link href="/buttonboard">Silly Buttons Board</Link>
    </pre>
  )
}
