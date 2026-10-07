import Link from "next/link";
export default function services(){
    return(
        <>
        <h1>All services</h1>
        <Link href="/services/web-dev">web development</Link>{"  "}
        <Link href="/services/app-dev">app development</Link>{"  "}
        </>
    )
}