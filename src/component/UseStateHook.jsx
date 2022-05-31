import React, {useState} from "react";
import "../form.css";

const func = () => {
    console.log('dsfdsf')
}

function UseStateHook(){

    // const state = useState();

    // const [count, setCount] = useState(0);  

    // const IncNum = () => {
    //     setCount(count + 1);
    // }

    // return (
    //     <>
    //         <h1>{count}</h1>
    //         <button onClick={count}>Press</button>
    //     </>
    // )
    //-----------------------------------------------
    // let date = new Date().toLocaleTimeString();

    // const state = useState();

    // const [time, setTime] = useState(date);

    // const getTime = () => {
    //     setTime(new Date().toLocaleTimeString());
    // }
    // return (
    //     <>
    //         <h1>{time}</h1>
    //         <button onClick={getTime}>Current Time</button> 
    //     </>
    // )
    //-----------------------------------------------
    //digital clock 

    // let date = new Date().toLocaleTimeString();

    // const [ctime, setCtime] = useState(date);

    // setInterval(function () {
    //     setCtime(new Date().toLocaleTimeString())
    // }, 1000);


    // return (
    //     <>
    //         <h1>{ctime}</h1>
    //     </>
    // )
    
    //-----------------------------------------------

    // const [color, setColor] = useState("red")
    // const [text, setText] = useState("Hello")

    // const changeColor = () => {
    //     setColor("green")
    //     setText("how are you?")
    // }

    // const backtonormal = () => {
    //     setColor("red")
    //     setText("Hello")
    // }
    // return (
    //     <>
    //         <h1 style={{color: color}}>{text}</h1>
    //         <button onClick={changeColor} onDoubleClick={backtonormal}>change</button>
    //     </>
    // )
    
    //-----------------------------------------------
    const [inputValue, setInputValue] = useState("")

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    
    const submitForm = (e) => {
        e.preventDefault()
        
        console.log(e.target.firstname.value)
        console.log(e.target.lastname.value)
        setInputValue(e.target.firstname.value+" "+e.target.lastname.value)
    }

    const inputEvent = (e) => {
        // console.log(e.target.value)
        console.log(e.target.value)
        console.log(e.target.name)

        const name = e.target.name
        const value = e.target.value

        if(name == 'firstname')
        {

        }
        else if(name == 'lastname')
        {

        }
        // setFname(e.target.value)
        // setLname(e.target.value)

    }
    return (
        <>
            <h3>{inputValue}</h3>

            <form onSubmit={submitForm}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."  />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."   />

                
            
                <input type="submit" value="Submit" />
            </form>
           
        </>
    )
    
}

export default UseStateHook;