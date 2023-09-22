import Link from "next/link"
import { getServerSession } from "next-auth"
import { useSession, signIn, signOut } from "next-auth/react"
import { authOptions } from "./[...nextauth]/auth"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    return (
      <pre>
        {JSON.stringify(session, null, 2)}
        <Link href="/buttonboard">Silly Buttons Board</Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </pre>
    )
  }
}
