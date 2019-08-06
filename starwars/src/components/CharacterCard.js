import React, {useState} from "react";
import styled from "styled-components";



export default function CharacterCard(props){

const [characters] = useState(props.characterData);


const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-items: center;
    border-radius: 8px;
    border: 1px solid black;
    width: 475px;
    height 350px;
    margin: 60px;
    background: #00001a;
    opacity: 0.65;
    color: yellow;
    font-family: 'Press Start 2P', cursive;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    


`

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

const ListItems = styled.li`

    padding: 14px;
    text-align: left;



`
const Header = styled.h1`
    margin-bottom: 40px;
    padding-top: 5px;

`

return (

        <Card className="characterCard">
            <Header>{characters.name}</Header>
            <List>
            <ListItems>Born: {characters.birth_year}</ListItems>
            <ListItems>Gender: {characters.gender}</ListItems>
            <ListItems>Height: {characters.height}</ListItems>
            <ListItems>Eye Color: {characters.eye_color}</ListItems>
            <ListItems>Hair Color: {characters.hair_color}</ListItems>
            </List>
        </Card>  
    );

}