import React,{useEffect, useState} from "react"

function Home()
{
    const [username, setUsername] = useState("sdff");
    const showName = () =>{
        alert("ikhan:"+ username);
    }
    return(
        <>
        <h2> This is Home Component</h2>
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username} />
        <input type="button" onClick={()=>alert(username)} value="Click Me" />
        <input type="button" onClick={showName} value="showName" />
        </>
    )
}

export default Home;