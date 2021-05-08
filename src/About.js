import React, { useEffect, useState } from "react";
function About() {
    const [name, setName] = useState("ikhan");
    const [age, setAge] = useState(33);
    useEffect(() => {
        console.log("use Effect hook for funtion component");
    });
    return (
        <div> About Component name is: {name} and Age is {age}
            <button onClick={() => { setName("irfan khan") }} >Update Name</button>
            <button onClick={() => { setAge(40) }} >Update Age</button>
        </div>
    )

}

export default About;