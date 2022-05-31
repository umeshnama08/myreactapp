import React, { useEffect, useState } from "react";
import users from '../List.jsx'
import axios from 'axios';


function ListComponent(){

//   var promise = new Promise(function(resolve, reject) {
//     reject('Geeks For Geeks');
// })
   
// promise
//     .then(function(successMessage) {
//        //success handler function is invoked
//         console.log(successMessage);
//     }, function(errorMessage) {
//         console.log(errorMessage);
//     })
    
//   const [users, setUsers] = useState([]);
//   console.log("fsdf")
  
//   // function apiCall(){

//     const apiAction = async () => {

//       console.log("test1")

//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       console.log("test2")

//       const myJson = await response.json(); //extract JSON from the http response

//       return myJson
//       console.log("test3")
//       // console.log(myJson)
//   }  
//   var abc = apiAction()
//   abc.then(function () {
//     console.log('Success, You are a GEEK');
// }).
// catch(function () {
//     console.log('Some error has occurred');
// });
  // axios.get(`https://jsonplaceholder.typicode.com/users`)
    // .then(res => {
    //   const persons = res.data;

    //   setUsers( persons );
    // })

    
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //   .then(res => {
  //     const persons = res.data;

  //     setUsers( persons );
  // console.log(users)

  //   })
  // }

  // useEffect(() => {
  //   apiCall()
  // });
    
return (
    <>
{
  users.map((post) =>
    <ul key={post.id}>
      <li>{post.name}</li>
      <li>{post.username}</li>
      <li>{post.email}</li>
    </ul>
  )}
    </>
)
}

export default ListComponent