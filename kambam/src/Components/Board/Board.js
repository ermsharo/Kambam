
import Session from '../Session/Session'
import styled from 'styled-components'

const SessionArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
column-gap: 32px;
width: 80vw;
margin: auto;
border: 2px solid blue;

`

const SessionBox = styled.div`

`



export default function Board() {
  return (
    <SessionArea>
       <Session title = "Novo"/>
      <Session title = "To Do"/>
       <Session title = "Doing"/>
       <Session title = "Done"/>
    </SessionArea>
  );
}


