import Link from "next/link"
import { storage } from "../utils/cloud-stotage-auth"

const listBuckets = async () => {
    const [buckets] = await storage.getBuckets();

    console.log("Buckets:")
    buckets.forEach(bucket => {
        console.log(bucket.name)
    });
}


export default function Page() {


    listBuckets()

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