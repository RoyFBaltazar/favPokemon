import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDisplay from './components/pokemondis';

function App() {
 const [pokemon, setpokemon] = useState([])
 const [pokemondata, setpokemondata] = useState([])
  useEffect(()=>
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=99&offset=1')
  .then(Response=>{
    console.log(Response.data.results.url)
    setpokemon(Response.data.results)
  })
  
  
  ,[])
  return (
    <div className="App">
      
 <h1>Welcome! Choose Your Favorite Kanto Pokemon!</h1>

 <PokemonDisplay pokemon={pokemon}/>
    </div>
  );
}

export default App;
