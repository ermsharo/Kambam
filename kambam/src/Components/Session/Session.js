import styled from 'styled-components'
import Card from '../Card/Card';

const SessionText = styled.h2`

`;

const CardsBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  gap: 16px;


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


