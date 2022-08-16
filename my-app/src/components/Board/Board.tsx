import React from 'react';
import styled from 'styled-components';

const BoardArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
    color: white; 
    height: 100px;
    border: 2px solid red; 

`;




 const Board:React.FC = () =>{
    return(<BoardArea>asd</BoardArea>);
}

export default Board; 