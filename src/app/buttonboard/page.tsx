import Link from "next/link"
import { getLocations } from "../utils/square-auth"

export default async function Page() {
    await getLocations();

    return (
        <section>
            <h1>This page will eventually show the buttons users will push.</h1>
            <ul>
                <li>
                    <Link href="/buttonboard/randomword">Generate Random Word</Link>
                </li>
            </ul>
        </section>)
}