import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListItemSecondaryAction } from "@material-ui/core";
import NoteList from './NoteList'

function Form(){

    const [noteState, setNoteState] = useState({
        title: "",
        subject: ""
    }) 

    const [ListData, setListData] = useState([])

    const inputHandler = (event) => {
        
        const {name, value} = event.target

        setNoteState((oldFieldsData) => ({
            ...oldFieldsData,
            [name]: value
        }))
        
    }

    const AddNote = (event) => {
        event.preventDefault()

        setListData((preData) => {
            return [...preData,noteState]
        })

        setNoteState({
            title: "",
            subject: ""
        })
    }

    const passDelFunction = (id) => {
        setListData((oldListData) => {
            return ListData.filter((currElement, index) => {
                    return index !== id
                
            })
        })
    }

    return (
        <>
            <form onSubmit={AddNote}>
                <div className="container">
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" onChange={inputHandler} value={noteState.title} id="fname" name="title" className="form-control" placeholder="Your name.." />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-25">
                        <label htmlFor="subject">Note</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" onChange={inputHandler} value={noteState.subject} className="form-control" name="subject" placeholder="Write something.." ></textarea>
                    </div>
                    </div>
                    <div className="row">
                    <input type="submit" value="Submit" />
                    </div>
                </div>
            </form>

            <NoteList noteData = {ListData} deleteItem={passDelFunction}/>
            
           

        </>
    )
}

export default Form
