import { useState } from "react";
import axios from "axios";
import FavoritePokemon from "./favoritepoke";

const PokemonDisplay=(props)=>{
   
    const [pokemonData, setpokemonData] = useState(null)
    const randNum = Math.floor(Math.random()*151)
 


  const showPokemon =()=>{
      
      axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
      .then(Response=>{
        
        setpokemonData([Response])
      })
    
      
  }
  
    return(<div className="container">
    
        
        <button  onClick={showPokemon}>Next Pokemon</button>
        {pokemonData && pokemonData.map(item=>{return(<div  key={item.data.id}>
          <h1>Name: {item.data.name}</h1>
            <img src={item.data.sprites.front_shiny} height='400px' alt="shiny pokemon" className="pokemonimg"/>
            
           <div className="card2">
           <h3>Pockedex Number:{item.data.id}</h3>
         
           </div>

        </div>)})}
       {pokemonData && <FavoritePokemon pokelist={pokemonData}/>}
        



       
    </div>

    )
}
export default PokemonDisplay