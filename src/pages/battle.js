import { useState } from "react";
import { connect } from "react-redux";
import { deletePokemon } from "../actions";
import { Card, Row, Col} from "react-bootstrap";
const mapStateToProps = (state)=>({
    battlePokemon : state.battlePokemon
  })

const Battle = (props)=>{
    const [score, setScore] = useState(null)
    const {battlePokemon} = props;
    const [status, setStatus] = useState('')

    const attack=(enemy)=>{
        if(Math.random() < .95){
            enemy.base_experience -= 10
            setStatus('attacking')
            }
        if(enemy.base_experience <=0){
            console.log(enemy)}
else{
    console.log('missed')
    setStatus('missed')
}
    }

    const handleBattle =(props)=>{
        console.log(battlePokemon.length)
        if(battlePokemon.length <= 0){
            alert('add pokemon')
            setStatus('add pokemon')
            
        }

        console.log(battlePokemon[1].base_experience)
        if(battlePokemon[0].base_experience >0){
            console.log('attact')
             attack(battlePokemon[1])
             
             setStatus(battlePokemon[0].name + ' is attaking ' + battlePokemon[1].name)
         }
         if(battlePokemon[1].base_experience <= 0){
             setStatus('game over! ' + battlePokemon[1].name + ' has fainted')
         }
         else{
            
             console.log('over')
         }  


    }
    const handleAttack =()=>{
        if(battlePokemon[1].base_experience > 0){
            attack(battlePokemon[0])
            setStatus(battlePokemon[1].name + 'is attacking')
        }
     
        if (battlePokemon[0]. base_experience <= 0){
            setStatus('Game over ' + battlePokemon[1].name + ' has fainted')
        } 
        if(battlePokemon[1].base_experience <= 0){
            setStatus('Game over ' + battlePokemon[1].name + ' has fainted')
        }
    }

    return(<div>
        <h1>Welcome to Your Gym Battle</h1>
        <h1>{status}</h1>
        <button onClick={handleBattle}>Battle</button>
        {status && <button onClick={handleAttack}>Attack</button>}

    {props.battlePokemon.map(item=>{return(<div className="card2">
       <div className="battlediv">
       <img alt="pokemon" src={item.sprites.front_shiny}/>
        {item.name}
        <p>Special Ability: {item.abilities[0].ability.name} </p>
       </div>
       
    </div>)})}
    
    
    </div>)
}
export default connect(null , deletePokemon)(Battle)