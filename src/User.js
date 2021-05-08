import React,{useState} from "react";

function User()
{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const saveUser = () =>{
        console.warn("name is"+name+" and age is "+age+" and address is "+address);
    }
    return (
<>
<h2>User</h2>
<input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} value={name} />
<br/><br/>
<input type="number" name="number" onChange={(e)=>{setAge(e.target.value)}} value={age} />
<br/><br/>
<input type="text" onChange={(e)=>{setAddress(e.target.value)}} name="address" value={address} />
<br/><br/>
<input type="Button" onClick={saveUser}  value="Creae User" />
 
</>
    );
}

export default User;