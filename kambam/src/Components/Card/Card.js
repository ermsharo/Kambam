import styled from 'styled-components';

const CardBox = styled.div`
border: 2px solid green;
padding: 16px;

`;

const CardTitle = styled.h3`

`;

const CardText = styled.div`

`;

export default function Card({title, text}) {
    //ESTADOS QUE ESSE CARD VAI TER
    //Modo
    //Titulo
    //Texto

    return (
      <CardBox>
<CardTitle>{title}</CardTitle>
<CardText>{text}</CardText>
      </CardBox>
    );
  }
  
  
  