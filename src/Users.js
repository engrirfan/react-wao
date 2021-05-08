import React,{useEffect, useState} from "react"

function Users()
{

    const [users, setUsers] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
      data.json().then(result=>{
          //console.log("starrrr****");
          //console.log(result);
          setUsers(result);
          //console.log(users);
      }) 
    })
},[]);

    return (
        <>
        <div>Users component </div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">username</th>
    </tr>
  </thead>
  <tbody>
  {users.map((item, index)=>
          
           
          <tr>
          <th key={index}>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
        </tr>
        )
    }
      
     
  </tbody>
</table>
</>

    )
}

export default Users;