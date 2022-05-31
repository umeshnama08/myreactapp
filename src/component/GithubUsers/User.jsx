import React, { useState } from "react";
import Card from "./Card";


// const User = props => <div>{props.cards.map((card, index) => <Card {...card} key={index}/>)}</div>
      
const User = props => {

return (
    <>
        <div>{props.cards.map((card, index) => <Card {...card} key={index}/>)}</div>
    </>
)

}
    

export default User