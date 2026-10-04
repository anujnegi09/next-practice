import Link from "next/link";
export default function Home(){
  return(
    <>
    <h1>this is home page</h1>
     <Link href="/users">users</Link>{" "}
     <Link href="/about">about</Link>
    </>
  )
}