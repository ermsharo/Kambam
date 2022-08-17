
import Session from '../Session/Session'
import styled from 'styled-components'
import { useState } from "react";
import { GeneticData } from "./genericData";
import NewCardSession from "../Session/NewCardSession";


const SessionArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
column-gap: 64px;
width: 80vw;
margin: auto;

font-family: 'River', sans-serif;
text-align: center;
padding-top: 32px;


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


    // const { getCards, updateCard, removeCard, addCard } = useCardService();

    const changeList = () => {

    }
    const updateList = () => {

    }


    const separateObjects = (cardsData) => {

        return {
            "ToDo": cardsData.filter(e => e.lista.includes("toDo")),
            "Doing": cardsData.filter(e => e.lista.includes("Doing")),
            "Done": cardsData.filter(e => e.lista.includes("Done")),
        }

    };



    const [Cards, setCards] = useState(separateObjects(GeneticData));

    return (
        <KambamBox>
            <AppTitle>Kamban</AppTitle>
            <SessionArea>
                <NewCardSession />
                <Session title="To Do" session="ToDo" cards={Cards} setCards={setCards} />
                <Session title="Doing" session="Doing" cards={Cards} setCards={setCards} />
                <Session title="Done" session="Done" cards={Cards} setCards={setCards} />
            </SessionArea></KambamBox>
    );
}


