import { useEffect, useState } from "react";
import axios from "axios";
import FavoritePokemon from "./favoritepoke";

const PokemonDisplay=(props)=>{
    const {pokemon} = props;
    const [pokemonData, setpokemonData] = useState(null)
    const randNum = Math.floor(Math.random()*151)
 


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
      <img src='https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png' className="pokeball2" height='100px'/>
        
        <button onClick={showPokemon}>Next Pokemon</button>
        {pokemonData && pokemonData.map(item=>{return(<div key={item.data.id}>
            <img src={item.data.sprites.front_shiny} height='400px'/>
            <h1>Name: {item.data.name}</h1>
            <h2>Pockedex Number:{item.data.id}</h2>
            <h3>Height: {item.data.height}</h3>
            <h3>Weight: {item.data.weight}</h3>
            <h3>Base Experience: {item.data.base_experience}</h3>
           <img src={item.data.sprites.front_shiny}/>


        </div>)})}
       {pokemonData && <FavoritePokemon pokelist={pokemonData}/>}
        



       
    </div>

    )
}
export default PokemonDisplay