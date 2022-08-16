
import { axios } from "axios";
import Session from '../Session/Session'
import styled from 'styled-components'
import { authenticate } from "../../Services/kambamServices";
import { useState, useEffect } from "react";
import api from "../../Services/api";

const SessionArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
column-gap: 32px;
width: 80vw;
margin: auto;
border: 2px solid blue;
font-family: 'River', sans-serif;
text-align: center;
padding-top: 32px;

`

const SessionBox = styled.div`

`



export default function Board() {

    const [post, setPost] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        api
          .get()
          .then((response) => setPost(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    if (!post) return null;

    return (
        <>
            <div>API BACKGROUND <br />

                <div>{JSON.stringify(post)}</div>
            </div>
            <SessionArea>
                <Session title="Novo" />
                <Session title="To Do" />
                <Session title="Doing" />
                <Session title="Done" />
            </SessionArea></>
    );
}


