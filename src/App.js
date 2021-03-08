import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import Frase from "./components/Frase";

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: color .2s ease;

  :hover {
    cursor: pointer;
    color: #a7b5b9;
  } 
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`;

function App() {
  const [frase, setFrase] = useState({});

  const consultarAPI = () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");

    api 
      .then((response) => {
        return response.json();
      })
      .then((frase) => {
        setFrase(frase[0]);
      });
  };

  //Hacer que la frase aperezca sin necesidad de presionar boton
  useEffect(() => {
    return consultarAPI()
  }, [])



  return (
    <Contenedor>
      
      <Frase frase={frase} />

      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
