import styled from 'styled-components';

const CardBox = styled.div`
border: 2px solid green;
padding: 16px;

`;

const CardTitle = styled.h3`

`;

const CardHeader = styled.div`
display: flex;
justify-content: space-between;

`;

const CardEditBox = styled.div`

`;


const CardText = styled.div`

`;

export default function Card({ title, text }) {
  //ESTADOS QUE ESSE CARD VAI TER
  //Modo
  //Titulo
  //Texto

  return (
    <CardBox>
      <CardHeader><CardTitle>{title}</CardTitle>
      <CardEditBox><button>edit</button></CardEditBox>
      </CardHeader>

      <CardText>{text}</CardText>

      <CardText>{text}</CardText>
    </CardBox>
  );
}


