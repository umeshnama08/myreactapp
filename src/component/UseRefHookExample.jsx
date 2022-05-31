import React, {useRef} from "react";

export default function UseRefHookExample(){
    const firstInput =  useRef('hi');
    const secondInput =  useRef('hi');

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(firstInput.current.value) //.focus();
        console.log(secondInput.current.value) //.focus();
    }
    return (
        <><h1>UseRefHookExample</h1>
        {firstInput.current.value + secondInput.current.value}
        <form onSubmit={submitHandler}>
            <input type="text" ref={firstInput} />
            <input type="text" ref={secondInput} />
            <input type="submit" />
        </form>
        </>
    )
}