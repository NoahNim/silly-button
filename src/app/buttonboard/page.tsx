import Link from "next/link"
import { getLocations } from "../utils/square-auth"

export default async function Page() {
    await getLocations();

    return (
        <section style={{ "margin": "auto", "display": "flex", "flexDirection": "column", "alignItems": "center" }} >
            <h1>This page will eventually show the buttons users will push.</h1>
            <ul style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                <li style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                    <Link href="/buttonboard/randomword">Generate Random Word</Link>
                    <Link href="/buttonboard/catalog">Sqaure Catalog API Seeder</Link>
                    <Link href="/buttonboard/customers">Square Customer API Seeder</Link>
                </li>
            </ul>
        </section>)
}