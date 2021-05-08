import React from "react";

class Contact extends React.Component {
    constructor(){
        super();
        console.log("constructor called");
        this.state = {
            name:"irfan khan",
            age:32
        }
    }
    componentDidMount()
    {
        console.log("Component Did Mount called");
    }
    componentDidUpdate()
    {
        console.log("Component did update called");
    }
    render(){
        let name = "ikhan js developer";
        return(
            <div>
            <h1> Contact component {name}</h1>
            <p> info is: {this.state.name} and age is: {this.state.age}</p>
            <button onClick={()=>{this.setState({name:"khang",age:this.state.age+1})}}>Update Info </button>
            </div>

        )
        }
}

export default Contact;