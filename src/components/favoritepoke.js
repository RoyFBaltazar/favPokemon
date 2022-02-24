import { useState } from "react";
import FavsPage from "../pages/favs";

const FavoritePokemon =(props)=>{
    const {pokelist} = props;
    const [favpokemon, setFavpokemon]= useState([])
    const {hidepage, sethidepage} = useState(null)
    const setFavorite=()=>{
       const newpokemon = pokelist
        setFavpokemon(prevState=>[newpokemon, ...prevState])
       
    }
    


    return(<div>
        <button onClick={setFavorite}>Add to Favorites</button>
        <h1>Favorite Pokemon</h1>
        {favpokemon && favpokemon.map(item=>(<div key={item[0].data.id}>
            
            <img src={item[0].data.sprites.front_shiny}/>
            <h2>Name: {item[0].data.name}</h2>
            <h2>Pockedex Number: {item[0].data.id}</h2>
            <h2>Height: {item[0].data.height}</h2>
            <h2>Weight: {item[0].data.weight}</h2>
            
            
            
            </div>))}
      {hidepage && <FavsPage favpokemon={favpokemon}/>}
    </div>)
}
export default FavoritePokemon;