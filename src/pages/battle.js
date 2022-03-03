import { useState } from "react";
import { connect } from "react-redux";
import { deletePokemon } from "../actions";
import pokemusic from '../audio/pokemon-battle.mp3'



const mapStateToProps = (state)=>({
    battlePokemon : state.battlePokemon
  })
  
 const Battle = (props)=>{
      
    // const [score, setScore] = useState(null)
    const {battlePokemon} = props;
    const [status, setStatus] = useState('')
    const [health, setHealth] = useState(null)

    let audio = new Audio(pokemusic)
    const attack=(enemy, firstPokemon)=>{
        if(Math.random() < .75){
            enemy.base_experience -= 30
            console.log('pokeon 1 hit')
            setHealth(`${battlePokemon[0].name} health : ${battlePokemon[0].base_experience} ${battlePokemon[1].name} health : ${battlePokemon[1].base_experience}`)
            }
else{
    console.log('2 hit')
    firstPokemon.base_experience -=30
    setHealth(`${battlePokemon[0].base_experience} ${battlePokemon[1].base_experience}`)
}
    }

        const handleBattle =()=>{
        // audio.play()
        //Handles error of no Pokemon
        if(battlePokemon.length <= 0){
            alert('Add Pokemon to Battle')
            setStatus('add pokemon to Battle')
            
        }

        //Beggin intial attack from Pokemon 0 to pokemon 1        
        if(battlePokemon[0].base_experience >0){
            
             attack(battlePokemon[1], battlePokemon[0])
             
             setStatus(battlePokemon[0].name + ' is attaking ' + battlePokemon[1].name + 'with ' +  battlePokemon[0].abilities[0].ability.name)
         }
         if(battlePokemon[1].base_experience <= 0){
             
             setStatus('game over! ' + battlePokemon[1].name + ' has fainted')
             props.deletePokemon(battlePokemon[1])
             console.log(battlePokemon.length)
         }
        //  else{
            
        //     setStatus('hit')
             
        //  }  


    }
            const handleAttack =()=>{
        if(battlePokemon[1].base_experience > 0){
            attack(battlePokemon[0], battlePokemon[1])
            setStatus(battlePokemon[1].name + 'is attacking with ' + battlePokemon[1].abilities[0].ability.name)
            setHealth(`${battlePokemon[0].base_experience} ${battlePokemon[1].base_experience}`)
        }
     
        if (battlePokemon[0]. base_experience <= 0){
            setStatus('Game over ' + battlePokemon[1].name + ' has fainted')
            props.deletePokemon(battlePokemon[0])
            console.log(battlePokemon.length)
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
        {health && <h1>{health}</h1>}

    {props.battlePokemon.map(item=>{return(<div key={item.name} className="card2">
       <div className="battlediv">
       <img alt="pokemon" src={item.sprites.front_shiny}/>
        {item.name}
        <p>Special Ability: {item.abilities[0].ability.name} </p>
        <p>health: {item.base_experience} </p>
       </div>
       
    </div>)})}
    
    
    </div>)
}
export default connect(mapStateToProps , {deletePokemon})(Battle)