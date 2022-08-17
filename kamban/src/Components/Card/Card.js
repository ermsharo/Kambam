import styled from 'styled-components';
import { useState } from 'react';
import CardRendered from './CardRendered';
import EditCard from './EditCard';
const CardBox = styled.div`
  position: relative;
  margin: 40px auto;
  width: 100%;
  height: auto;
  min-height: 200px;
  background: #feff9c;
  border-radius: 2px;

  &:before{
    content: '';
  position: absolute;
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 5px 14px rgba(0,0,0,.7);
  z-index: -1;
  transition: all .3s ease-in-out;
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
  }
  &:after {
    content: '';
  position: absolute;
    left: 5px;
  }
  &:hover:after{
    box-shadow: 0 2px 14px rgba(0,0,0,.4);
    right: 5px;
  }
`;



export default function Card({
  title,
  text,
  cards,
  cardId,
  setCards,
  session }) {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <CardBox>
      {(isEditing) ?
        <EditCard  setIsEditing={setIsEditing} title={title} text={text} />
        : <CardRendered  setIsEditing={setIsEditing} title={title} text={text}  />}
    </CardBox>
  );
}


