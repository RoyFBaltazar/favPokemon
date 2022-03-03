import { Create_BATTLE_POKEMON, DELETE_BATTLE_POKEMON, UPDATE_BATTLE_POKEMON } from "../actions"

const instialState = {
    battlePokemon: [

    ]
}
function reducer(state = instialState, action){
    
    switch(action.type){
        case Create_BATTLE_POKEMON:
            return{
                ...state, battlePokemon:[...state.battlePokemon, action.payload]
            }
            case UPDATE_BATTLE_POKEMON:
                return{
                    ...state.battlePokemon[action.payload.name]= action.payload
                }
            case DELETE_BATTLE_POKEMON:
                console.log(action.payLoad.id)
                
                console.log(state.battlePokemon[0].id)
                // let  newState = state.battlePokemon.filter(pokemon=> pokemon.id !== action.payload.id)
                let newState = state.battlePokemon.filter(function(item) {
                    
                      return item !== action.payLoad
                    });
                    
                console.log(newState)
                return{
                    ...state, battlePokemon : newState
                }

                default: return state
    }



}
export default reducer