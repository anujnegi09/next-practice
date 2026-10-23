// "use client"
export default function likes(){
    
    // if(typeof window !== "undefined"){
    //     console.log(window);
    // }
    console.log("like component")
    return (

        <div
        // onclick will not give error in server even if we don't use "use client"
         onClick={() =>{
            console.log("like button clicked")
        }}>30 likes</div>
    )
}