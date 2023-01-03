import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Displayp from './component/Displayp';
import Navbar from './component/navbar';

function App() {

  const [pokemon, setPokemon] = useState([
    { url: "https://pokeapi.co/api/v2/pokemon/152/" }
  ])

  const get25Pokemon = async() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=25&offset=0")
      .then((response) => {

        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    get25Pokemon();
  });


  return (
    <div className="App">
      <Navbar brand="Api de Pokemon por:Julio Reyes" />
      <Displayp pokemon={pokemon} />
    </div>
  );
};

export default App;
