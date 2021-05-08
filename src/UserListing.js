import React,{useEffect, useState,Fragment} from "react"
import { Button } from 'react-bootstrap';


function UserListing(){
     const [user,setUser] = useState([
        {"name":"ikhan", "age":10, address:"islamabad"},
        {"name":"farid", "age":12, address:"shergarh"},
        {"name":"ifti", "age":14, address:"shergarh"},
        {"name":"ali shah", "age":16, address:"babu mohallah"},
    ]);
    
    useEffect(()=>{
        console.log(user);

    },[]);
        
    return (
        
        <Fragment>
         <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
            <table>
        <h1>User Listing</h1>
        { 
            user.map((item,index)=>
        <tr>
            <td>{index}</td>
            <td key={index}>{item.name}</td>
            <td key={index}> {item.age}</td>
            <td key={index}> {item.age>10?"yes":"no"}</td>
            <td key={index}>{item.address}</td>
            </tr>
          
            
            )
             

            
        }
          </table>
        </Fragment>
    )
}

export default UserListing;