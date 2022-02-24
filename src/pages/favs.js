import { useState } from "react";
import axios from "axios";

const FavsPage=(props)=>{
    const favpokemon = props;
    const [searchItem, setSearchItem] = useState('')
    const [foundPokemon, setFoundPokemon] = useState(null)
    const ShowFav =()=>{
        console.log(favpokemon)
    }
    const findPokemon =(e)=>{
        e.preventDefault()
        console.log(searchItem)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchItem}`)
        .then(Response=>{
          console.log(Response)
          setFoundPokemon([Response])
          
        })
    }
    console.log(foundPokemon)
    return(<div>
<h1>Your Favorite Pokemon are Here</h1>
<button onClick={ShowFav}>see your favorites</button>
      <form onSubmit={findPokemon}>
        <label htmlFor="PokemonSeach">Search:</label>
        <input type='text' name="pokemon" value={searchItem} onChange={(e)=> setSearchItem(e.target.value)}/>
        <input type='submit'/>

      </form>
      {foundPokemon && foundPokemon.map(pokemon=>{return(<div>
          <img src={pokemon.data.sprites.front_shiny} height='500'/>
        <h1>Name: {pokemon.data.name}</h1>
        <h2>Pockedex: {pokemon.data.id}</h2>
        <h2>Height: {pokemon.data.height}</h2>
        <h2>Weight: {pokemon.data.weight}</h2>


      </div>)})}

    </div>)
}
export default FavsPage;