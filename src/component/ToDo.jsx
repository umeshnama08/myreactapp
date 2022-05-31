import React, {useState} from "react";

export default function ToDo(){

    const [heading, setHeading] = useState("To Do List Example");

    const [textVal, setTextVal] = useState("");
    const [Items, setItems] = useState([]);

    const InputEvent = (event) => {
        // console.log(event.target.value)
        setTextVal(event.target.value)
    }
    const Submit = () => {
        setItems((oldItems) => {
            // console.log(...oldItems)
            return [...oldItems, textVal]
        })
        setTextVal("")
    }

    const deleteItems = (id) => {
        console.log(id)
        setItems((oldItems) => {
            return oldItems.filter((currData, index) => {
                return index !== id
            })
        })
            
    }

    console.log(Items)
    return (
        <>

            <h1>{heading}</h1>
            <input type="text" onChange={InputEvent} value={textVal}/>
            <input type="button" value="Submit" onClick={Submit}/>
            
            {
                Items.map((value, index) => <li key={index} onDoubleClick={() => deleteItems(index)}>{value} &nbsp;&nbsp;<span><i>double click to delete item</i></span></li>)
            }

        </>
    )

}