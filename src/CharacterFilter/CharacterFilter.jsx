import React, { useState } from "react";
import InputSearch from "../Input/InputSearch";


export default function CharacterFilter() {
    const [character, setCharacter] = useState([]);
    const {characterName, handleChange } = InputSearch();
  //console.log(characterName);

  const url = "https://rickandmortyapi.com/api/character/?name=";

  const searchCharacter = () => {
    fetch(url + characterName)
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res.results);
        //console.log(res.results);
      });
  };

    return (
      <>
        <div className="container-btn">
          <input type="text" value={characterName} onChange={handleChange} />
          <button className="btn" onClick={searchCharacter}>Buscar</button>
        </div>
        <div className="container-character">
          {character.length > 0 &&
            character.map((item, index) => {
              return (
                <div key={index} className="container-card">
                  <img src={item.image} alt={item.name} />
                  <h2>Name: {item.name} </h2>
                  <p>Status: {item.status} </p>
                  <p>Species: {item.species} </p>
                  <p>Type: {item.type} </p>
                  <p>Gender: {item.gender} </p>
                </div>
              );
            })}
        </div>
      </>
    );
}
