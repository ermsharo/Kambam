
import { axios } from "axios";
import Session from '../Session/Session'
import styled from 'styled-components'
import { authenticate } from "../../Services/kambamServices";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { GeneticData } from "./genericData";

const SessionArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
column-gap: 32px;
width: 80vw;
margin: auto;
border: 2px solid blue;
font-family: 'River', sans-serif;
text-align: center;
padding-top: 32px;

`

const SessionBox = styled.div`

`



export default function Board() {

    const separateObjects = (cardsData) => {

        return {
            "ToDo": cardsData.filter(e => e.lista.includes("toDo")),
            "Doing": cardsData.filter(e => e.lista.includes("Doing")),
            "Done": cardsData.filter(e => e.lista.includes("Done")),
        }

    };



    const [Cards, setCards] = useState(separateObjects(GeneticData));





    const moveCardToSession = (originalsession, destinySession, cardId) => {
        //Take a session as a parameter, and move the object to their
    }

    const deleteCardById = (session, cardId) => {
        //Take a card id and delete
        let List = Cards[session];
        let ListWithoutElement = List.splice(List.findIndex(e => e.id === cardId), 1);
        console.log("List" ,List)
        console.log("List without elem", ListWithoutElement)

    }

    const findCardById = (cardId) => {
        //Take a card id and delete
    }

    const editCard = (card, cardEdited) => {
        //Edit our card object
    }


    //deleteCardById()
    return (
        <>
            <div>API BACKGROUND <br />

            </div>
            <SessionArea>

                <Session title="To Do" cards={Cards.ToDo} />
                <Session title="Doing" cards={Cards.Doing} />
                <Session title="Done" cards={Cards.Done} />
            </SessionArea></>
    );
}


