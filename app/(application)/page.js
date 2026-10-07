import Link from "next/link";
export default async function  Home({params, searchParams}){
  console.log(await params);
  console.log(await searchParams);
  return(
    <>
    <h1>this is home page</h1>
     <Link href="/users">users</Link>{" "}
     <Link href="/about">about</Link>{" "}
     <Link href="/services">services</Link>
     
    </>
  )
}