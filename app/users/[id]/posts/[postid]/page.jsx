export default async function posts({params}){
    console.log(await params);
    const paramsobj = await params;
    const {postid} = paramsobj;
    return(
        <>
        <h1>post {postid}</h1>
        </>
    )
}