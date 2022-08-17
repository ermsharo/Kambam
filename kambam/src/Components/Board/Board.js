
import { axios } from "axios";
import Session from '../Session/Session'
import styled from 'styled-components'
import { authenticate } from "../../Services/kambamServices";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import { GeneticData } from "./genericData";
import NewCardSession from "../Session/NewCardSession";


const SessionArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
column-gap: 64px;
width: 60vw;
margin: auto;

font-family: 'River', sans-serif;
text-align: center;
padding-top: 32px;


`

const SessionBox = styled.div`

`

const AppTitle = styled.header`
text-align: center;
font-family: 'River', sans-serif;
font-size: 42px;
padding-top: 32px;
color: white;


`

const KambamBox = styled.div`
background-color: #313831;
background-image: url("https://www.transparenttextures.com/patterns/concrete-wall-2.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
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







    const findCardById = (cardId) => {
        //Take a card id and delete
    }

    const editCard = (card, cardEdited) => {
        //Edit our card object
    }


    //deleteCardById()
    return (
        <KambamBox>
            <AppTitle>Kambam</AppTitle>
            <SessionArea>
                <NewCardSession/>
                <Session title="To Do" session="ToDo" cards={Cards} setCards={setCards} />
                <Session title="Doing" session="Doing" cards={Cards} setCards={setCards} />
                <Session title="Done" session="Done" cards={Cards} setCards={setCards} />
            </SessionArea></KambamBox>
    );
}


