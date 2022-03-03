export const Create_BATTLE_POKEMON = "CREATE_BATTLE_POKEMON"
export const UPDATE_BATTLE_POKEMON = "UPDATE_BATTLE_POKEMON"
export const DELETE_BATTLE_POKEMON = "DELETE_BATTLE_POKEMON"



export const createFighter =(pokemon)=> async (dispatch)=>{
    
    dispatch({type: Create_BATTLE_POKEMON, payload: pokemon})
}
 export const updatePokemon = (pokemon)=>(dispatch)=>{

     dispatch({type: UPDATE_BATTLE_POKEMON , payLoad: pokemon})
 }
 export const deletePokemon = (pokemon)=>(dispatch)=>{
     
     dispatch({type: DELETE_BATTLE_POKEMON, payLoad: pokemon})
 }