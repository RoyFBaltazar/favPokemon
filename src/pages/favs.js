import { useState } from "react";
import axios from "axios";


const FavsPage=(props)=>{
    const{ favpokemon, setFavpokemon} = props;
    const [searchItem, setSearchItem] = useState('pikachu')
    const [foundPokemon, setFoundPokemon] = useState(null)
    const [errorHandling, setErrorHandling] = useState('')
    const ShowFav =()=>{
        console.log(foundPokemon[0].data)
        
        console.log(favpokemon)       
    }
    
    
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
    
    return(<div>
{/* <h1>Your Favorite Pokemon are Here</h1>
<button onClick={ShowFav}>see your favorites</button> */}
      <form className="searchbar" onSubmit={findPokemon}>
        <label htmlFor="PokemonSeach">Search:</label>
        <input type='text' name="pokemon" value={searchItem} onChange={(e)=> setSearchItem(e.target.value.toLocaleLowerCase())}/>
        <input type='submit'/>




      </form>
      {foundPokemon && foundPokemon.map(pokemon=>{return(<div key={pokemon.data.id} >
          <img src={pokemon.data.sprites.front_shiny} className="pokemonimg" height='400px'/>
    <div className="card2">
    <h2>Name: {pokemon.data.name}</h2>
        <h3>Pockedex: {pokemon.data.id}</h3>
        <h3>Height: {pokemon.data.height}</h3>
        <h3>Weight: {pokemon.data.weight}</h3>

    </div>
      </div>)})}
     {errorHandling && <h1>{errorHandling}</h1>}

    </div>)
}
export default FavsPage;