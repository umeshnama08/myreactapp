import React, { useState } from "react";
import axios from "axios";
import User from "./User";

const Form = props => {
    const [username, setUsername] = useState('')
  
    const handleSubmit = event => {
      event.preventDefault()
  
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(resp => {
          props.onSubmit(resp.data)
          setUsername('')
        })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    )
  }
  
// function Form(){
//     const [InputField, setInputField] = useState("")

//     const [getUserDetail, setGetUserDetail] = useState("")

//     const inputHandler = (event) => {
//         setInputField(event.target.value)
//     }
    
//     const searchButton = () => {
//         setGetUserDetail((oldGetUserDetail) => ({
//             ...oldGetUserDetail,
//         }))

//         axios.get(`https://api.github.com/users/${InputField}`).then(resp => {
//             setGetUserDetail(resp.data)
//           })
//         // console.log(InputField)
//     }

//     return (
//       <>
//           <input type="text" name="inputText" onChange={inputHandler} value={InputField}/>
//           <button onClick={searchButton}>Search</button>
//           { (getUserDetail != '') ? <User user_data={getUserDetail} /> : ''}
          
//       </>
//     )
// }

export default Form

