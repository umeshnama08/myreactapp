import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const IncreamentDecrementExample = () => {
    
    const [value, setValue] = useState(0);

    const plus = () => {
        setValue(value+1)
    }

    const minus = () => {
        if(value > 0)
            setValue(value-1)
        else
            alert("done")
    }
    return (
        <>
            <h1>IncreamentDecrementExample</h1>
            <h3> {value}</h3>
            <button onClick={plus}><AddIcon /></button>
            <button onClick={minus}><RemoveIcon /></button>

        </>
    )

}

export default  IncreamentDecrementExample