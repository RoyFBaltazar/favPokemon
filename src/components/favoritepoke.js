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
        {favpokemon && favpokemon.map(item=>(<div className="card" key={item[0].data.id}>
            
            <img src={item[0].data.sprites.front_shiny}/>
            <h3>Name: {item[0].data.name}</h3>
            <ul><li>Pockedex Number: {item[0].data.id}</li>
            <li>Height: {item[0].data.height}</li>
            <li>Weight: {item[0].data.weight}</li>
            </ul> 
            
            
            
            </div>))}
      {hidepage && <FavsPage favpokemon={favpokemon} setFavpokemon={setFavpokemon}/>}
    </div>)
}
export default FavoritePokemon;