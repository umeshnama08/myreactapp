import React, {useState} from "react";
// import Form from "./Form"
import axios from "axios";
import Form from './Form'
import Users from './User'

function Main(){

    
    const [cards, setCards] = useState([])

    const addNewCard = cardInfo => {
        // console.log(cardInfo)
        // setCards(cardInfo)
        setCards(cards.concat(cardInfo))
    }
    // console.log(cards)
    
    return (
            <>
                <Form onSubmit={addNewCard} />
                <Users cards={cards} />
            </>
        )
}


export default Main