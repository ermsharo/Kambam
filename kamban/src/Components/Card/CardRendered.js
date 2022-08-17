import styled from 'styled-components';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import { deleteCardById } from "../../Utils/boardOps";
import Markdown from 'marked-react';

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

const CardTitle = styled.h3`
grid-column: 2/4;
display: flex ;
flex-direction: column;
justify-content: center;
font-size: 28px;
`;

const CardHeader = styled.div`
display: grid;
font-family: 'Roza', sans-serif;
text-align: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CardEditBox = styled.div`
display: flex ;
flex-direction: column;
justify-content: center;
padding: 16px;
font-size: 24px;
cursor: pointer;


`;


const CardText = styled.div`
font-family: 'Roza', sans-serif;
font-size: 24px;
text-align: justify;
padding: 10%;


`;

const CardOptions = styled.div`
display: flex ;
justify-content: space-between;
font-size: 24px;
padding: 5% 10%;


`;

const CardIcons = styled.div`
font-size: 24px;
cursor: pointer;



`;

export default function Card({ title, text, cards, cardId, setCards, session , setIsEditing}) {



    return (
        <CardBox>
            <CardHeader><CardTitle>{title}</CardTitle>
                <CardEditBox><HiPencilAlt onClick={() => {setIsEditing(true)}} /></CardEditBox>
            </CardHeader>

            <CardText><Markdown>{text}</Markdown></CardText>

            <CardOptions>
                <CardIcons><FiArrowLeftCircle /></CardIcons>
                <CardIcons><HiOutlineTrash onClick={() => {
                    setCards(deleteCardById(cards, session, cardId))
                }} /></CardIcons>
                <CardIcons><FiArrowRightCircle /></CardIcons>
            </CardOptions>
        </CardBox>
    );
}


