export default async function id({params}){
    console.log(await params)
    const {id} = await params;
    return(
        <>
        <h1>hello {id}</h1>
        </>
    )
}