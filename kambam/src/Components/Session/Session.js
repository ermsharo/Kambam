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

export default function Session({ title }) {
    return (<div>
        <SessionText>{title}</SessionText>
        <CardsBox>    <Card title="titulo do card" text="texto do card" />
            <Card title="titulo do card" text="texto do card" />
            <Card title="titulo do card" text="texto do card" />
            <Card title="titulo do card" text="texto do card" />
            <Card title="titulo do card" text="texto do card" /></CardsBox>

    </div>


    );
}


