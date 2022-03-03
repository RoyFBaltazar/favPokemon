import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createFighter } from "../actions";
const mapStateToProps= (state)=>({
  battlePokemon : state.battlePokemon
})

const FavsPage=(props)=>{
    const{ battlePokemon} = props;
    const [searchItem, setSearchItem] = useState('pikachu')
    const [foundPokemon, setFoundPokemon] = useState(null)
    const [errorHandling, setErrorHandling] = useState('')
 
    
    
    const findPokemon =(e)=>{
        e.preventDefault()
       console.log(searchItem)
       if(searchItem === ''){
         alert('add a search item')
        //  setErrorHandling(' refresh and try again')
         setSearchItem('pikachu')
       }
       
      
        axios.get(`https://pokeapi.co/api/v2/pokemon/${searchItem}`)
        .then(Response=>{
          
          setFoundPokemon([Response])
          
        })
        .catch (error=>{
          console.log(error.message)
          
         
          setErrorHandling(error.message + ' try again')
         
        }
          
          )
        
    }
    const setFighter=()=>{
      const newFighter = foundPokemon[0].data
      
      props.createFighter(newFighter)
      
  }
    return(<div>
{/* <h1>Your Favorite Pokemon are Here</h1>
<button onClick={ShowFav}>see your favorites</button> */}
      <form className="searchbar" onSubmit={findPokemon}>
        <label htmlFor="PokemonSeach">Search:</label>
        <input type='text' name="pokemon" value={searchItem} onChange={(e)=> setSearchItem(e.target.value.toLocaleLowerCase())}/>
        <input type='submit'/>




      </form>
      {foundPokemon && foundPokemon.map(pokemon=>{return(<div key={pokemon.data.id} >
          <img src={pokemon.data.sprites.front_shiny} className="pokemonimg" alt="poke" height='400px'/>
    <div className="card2">
    <ul>
    <h1>Name: {pokemon.data.name}</h1>
        <li>Pockedex: {pokemon.data.id}</li>
        <li>Height: {pokemon.data.height}</li>
        <li>Weight: {pokemon.data.weight}</li>
        <li>type: {pokemon.data.types[0].type.name}</li>

    </ul>
    </div>
      </div>)})}
     {errorHandling && <h1>{errorHandling}</h1>}

     {foundPokemon && <button onClick={setFighter}>Add To battle</button>}
        <br/>
    </div>)
}
export default connect(mapStateToProps, {createFighter}) (FavsPage);