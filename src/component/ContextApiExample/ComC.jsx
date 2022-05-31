import React, { useContext } from "react";
import {FirstName, LastName} from "./ComParent"

function ComC(){
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    
    //asynch await promise example
    const apiAction = async () => {
        console.log("test1")

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log("test2")

        const myJson = await response.json(); //extract JSON from the http response

        console.log("test3")
        // console.log(myJson)
    }  
// console.log("ccc",apiAction)
    //asynch await promise example end


    console.log("test")
    return (
        <>
            <h1>{fname} {lname}</h1>
            <button onClick={apiAction}>apiAction</button>
        </>
    )
}

export default ComC;