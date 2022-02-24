import { useState } from "react";

const FavoritePokemon =(props)=>{
    const {pokelist} = props;
    const [favpokemon, setFavpokemon]= useState([])
    const setFavorite=()=>{
       const newpokemon = pokelist
        setFavpokemon(prevState=>[newpokemon, ...prevState])
        console.log(favpokemon)
    }
    console.log(favpokemon)


    return(<div>
        <button onClick={setFavorite}>add to Favorites</button>
        {favpokemon && favpokemon.map(item=>(<div>{item[0].data.name}</div>))}
       
    </div>)
}
export default FavoritePokemon;