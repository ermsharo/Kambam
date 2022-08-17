import styled from 'styled-components'
import Card from '../Card/Card';

const SessionText = styled.h2`
    color:white;
    text-shadow:0 0 2.5px rgba(255,255,255,0.8);
    font-size: 36px;
`;

const CardsBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;

`;



export default function Session({ title, cards, session, setCards }) {
  console.log("Cards", cards[session])

  if (!cards) return <div></div>
  return (<div>
    <SessionText>{title}</SessionText>
    <CardsBox>
      {cards[session].map((card) => <Card
        title={card.titulo}
        text={card.conteudo}
        cards={cards}
        cardId={card.id}
        setCards={setCards}
        session={session}
      />)}
    </CardsBox>

  </div>


  );
}


