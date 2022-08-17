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



export default function Session({ title, cards }) {
  return (<div>
    <SessionText>{title}</SessionText>
    <CardsBox>
      {cards.map((card) => <Card title={card.titulo} text={card.conteudo} />)}
    </CardsBox>

  </div>


  );
}


