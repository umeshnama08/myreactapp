import React from "react";


function NoteList(props){
    const del = (id) => {
        props.deleteItem(id)
    }
    return (
        <>
           <ul className="list-group">
            {
                props.noteData.map((Items, index) => 
                <li className="list-group-item" key={index} onDoubleClick={() => del(index)}>Title: {Items.title}<p>Note: {Items.subject}</p></li>
            )}
            </ul>
        </>
    )
}

export default NoteList
