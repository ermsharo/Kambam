
import Session from '../Session/Session'
import styled from 'styled-components'
import { useState, useEffect } from "react";
import { GeneticData } from "./genericData";
import NewCardSession from "../Session/NewCardSession";
import cardService from "../../Services/cardServices";

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

    const { getCards, updateCard, removeCard, addCard } = cardService();


    const createCardTeamplate = (session, title, text) => {

        return {
            titulo: title,
            conteudo: text,
            lista: session
        }
    }

    const changeList = () => {

    }
    const updateList = (cardId, newCardInfo) => {


    }

    const addCardSession = (session, title, text) => {
        addCard(createCardTeamplate(session, title, text))
    }

    const createNewCard = (title, text) => {
        addCard(createCardTeamplate("ToDo", title, text))
    }






    const separateObjects = (cardsData) => {

        return {
            "ToDo": cardsData.filter(e => e.lista.includes("toDo")),
            "Doing": cardsData.filter(e => e.lista.includes("Doing")),
            "Done": cardsData.filter(e => e.lista.includes("Done")),
        }

    };



    const [Cards, setCards] = useState(separateObjects(GeneticData));




    useEffect(() => {
        (async () => {
            const cs = await getCards();
            setCards(cs);
        })();
    }, []);

    if (!Cards) return <>loading</>
    return (
        <KambamBox>
            <AppTitle>Kamban</AppTitle>
            <SessionArea>
                <NewCardSession createNewCard={createNewCard} />
                <Session
                    title="To Do"
                    session="ToDo" cards={Cards}
                    setCards={setCards}
                    addCard={addCard}
                    updateCard={updateCard}
                    removeCard={removeCard} />

                <Session
                    title="Doing"
                    session="Doing"
                    cards={Cards}
                    setCards={setCards}
                    addCard={addCard}
                    updateCard={updateCard}
                    removeCard={removeCard} />

                <Session
                    title="Done"
                    session="Done"
                    cards={Cards}
                    setCards={setCards}
                    addCard={addCard}
                    updateCard={updateCard}
                    removeCard={removeCard} />
            </SessionArea></KambamBox>
    );
}


