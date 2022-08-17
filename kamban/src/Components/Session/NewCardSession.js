import styled from 'styled-components'
import NewCard from '../Card/NewCard';

const SessionText = styled.h2`
    color:white;
    text-shadow:0 0 2.5px rgba(255,255,255,0.6);
    font-size: 36px;
    font-weight: 100;
`;

const CardsBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

`;



export default function NewCardSession({ createNewCard }) {



    return (<div>
        <SessionText>New</SessionText>
        <CardsBox>
            <NewCard createNewCard={createNewCard} />

        </CardsBox>

    </div>


    );
}


