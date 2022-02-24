import { useEffect, useState } from "react";
import axios from "axios";
import FavoritePokemon from "./favoritepoke";

const PokemonDisplay=(props)=>{
    const {pokemon} = props;
    const [pokemonData, setpokemonData] = useState(null)
    const randNum = Math.floor(Math.random()*151)
 

//   useEffect(()=>
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
//   .then(Response=>{
//     console.log(Response)
//     setpokemonData([Response])
//   })
  
  
//   ,[])
  const showPokemon =()=>{
      console.log(pokemonData)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then(Response=>{
        console.log(Response)
        setpokemonData([Response])
      })
    
      
  }
  
    return(<div>
      <img src='https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png' className="pokeball" height='100px'/>
        <h2>Pokemon name:</h2>
        <button onClick={showPokemon}>get pokemon</button>
        {pokemonData && pokemonData.map(item=>{return(<div>
            <img src={item.data.sprites.front_shiny}/>
            <h1>Name: {item.data.name}</h1>
            <h1>Pockedex Number:{item.data.id}</h1>
            <h1>Height: {item.data.height}</h1>
            <h1>Weight: {item.data.weight}</h1>
            <h1>Base Experience: {item.data.base_experience}</h1>
           <img src={item.data.sprites.front_shiny}/>


        </div>)})}
       {pokemonData && <FavoritePokemon pokelist={pokemonData}/>}
        



       
    </div>

    )
}
export default PokemonDisplay