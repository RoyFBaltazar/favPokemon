import { useState } from "react";
import { createFighter } from "../actions";
import FavsPage from "../pages/favs";
import { connect } from "react-redux";
const mapStateToProps = (state)=>({
    battlePokemon : state.battlePokemon
  })
  

const FavoritePokemon =(props)=>{
    const {pokelist, battlePokemon} = props;
    const [favpokemon, setFavpokemon]= useState([])
    const {hidepage, sethidepage} = useState(null)
    const setFavorite=()=>{
       const newpokemon = pokelist
        setFavpokemon(prevState=>[newpokemon, ...prevState])
       
    }
    const setFighter=()=>{
        const newFighter = pokelist[0].data
        console.log(newFighter)
        props.createFighter(newFighter)
        
    }
  
    


    return(<div>
        <button onClick={setFavorite}>Add to Favorites</button>
        <button onClick={setFighter}>Add to Battle</button>
        <h1>Favorite Pokemon</h1>
        {favpokemon && favpokemon.map(item=>(<div className="card" key={item[0].data.id}>
            
            <img src={item[0].data.sprites.front_shiny} alt='shiny pokemon'/>
            <h3>Name: {item[0].data.name}</h3>
            <ul><li>Pockedex Number: {item[0].data.id}</li>
            <li>Height: {item[0].data.height}</li>
            <li>Weight: {item[0].data.weight}</li>
            <li>type: {item[0].data.types[0].type.name}</li>
            
            </ul> 
            
            
            
            </div>))}
      {hidepage && <FavsPage favpokemon={favpokemon} setFavpokemon={setFavpokemon}/>}
    </div>)
}
export default connect(mapStateToProps, {createFighter})(FavoritePokemon);