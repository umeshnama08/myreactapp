import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext()
const LastName = createContext()

function ComParent(){
    return (
        <>
            <FirstName.Provider value={'Hello'}>
                <LastName.Provider value={'World'}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default ComParent;
export {FirstName, LastName}