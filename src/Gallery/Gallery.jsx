import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import BiHomeAlt from 'react-icons/bi';

export default function Gallery() {
  const [names, setNames] = useState([]);
  const [count, setCount] = useState(1);

  const url = `https://rickandmortyapi.com/api/character/?page=${count}`;

  //console.log(url);

  const nextPage = () => {
    setCount(count + 1);
  };

  const backPage = () => {
    if (count <= 1) {
      return count === 1;
    }
    setCount(count - 1);
  };

  const home = () => {
    setCount(1);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setNames(res.results);
        //console.log(res.results);
      });
  }, [url]);

  return (
    <>
      <NavBar />

      <div className="container-btn">
        <button className="btn" onClick={backPage}>
          Previous
        </button>
        <button className="btn" onClick={home}>
          Home
        </button>
        <button className="btn" onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="container-character" >
        {names.map((item) => {
          //console.log(item.name)
          return (
            <div key={item.id} className="container-card">
              <div className="card">
                <img src={item.image} alt={item.name}></img>
                <p> Name: {item.name}</p>
                <p> Species: {item.species}</p>
                <p> Type: {item.type}</p>
                <p> Gender: {item.gender}</p>
                <p> Origin: {item.origin.name}</p>
                <p> Location: {item.location.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
