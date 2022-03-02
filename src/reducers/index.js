import { Create_BATTLE_POKEMON, DELETE_BATTLE_POKEMON, UPDATE_BATTLE_POKEMON } from "../actions"

const instialState = {
    battlePokemon: [

    ]
}
function reducer(state = instialState, action){
    
    switch(action.type){
        case Create_BATTLE_POKEMON:
            console.log(action.payload)
            return{
                ...state, battlePokemon:[...state.battlePokemon, action.payload]
            }
            case UPDATE_BATTLE_POKEMON:
                return{
                    ...state.battlePokemon[action.payload.name]= action.payload
                }
            // case DELETE_BATTLE_POKEMON:
            //     let  newState = state.battlePokemon.filter((pokemon)=> pokemon !== action.payload);

            //     console.log(newState)
            //     return{
            //         ...state.battlePokemon, battlePokemon : [newState]
            //     }

                default: return state
    }



}
export default reducer