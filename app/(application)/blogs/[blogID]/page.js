import Link from "next/link";

export async function generateStaticParams(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const data = await response.json()
    return data.map(({id}) => ({blogID : `${id}` }));
    // return[
    //     {blogID : "1"},
    //     {blogID : "2"},
    //     {blogID : "3"},

    // ];
}

 const Blog = async ({params})=>{
    const {blogID}  = await params;
    console.log("blogID : ", blogID);
    return (
        <>
        <Link href="/">go to home</Link>
        </>
    )
}
export default Blog;