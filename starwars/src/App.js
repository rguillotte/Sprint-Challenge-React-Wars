import React, { useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

      useEffect(()=>{
        axios.get("https://swapi.co/api/people/")
        .then(results => {
          console.log(results);
          setData(results.data.results);
    
        })
        .catch(err => {
          console.log(err);
        })
      }, []);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
        {data.map(data=>{
          return <CharacterCard characterData={data} />
        })}
      </CardContainer>
    </div>
  );
}

export default App;
