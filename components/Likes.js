export default async function likes(){
    // this is for stream in next 
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    return (
        <h3>30 likes</h3>
    )
}