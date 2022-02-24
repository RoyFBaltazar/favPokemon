import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDisplay from './components/pokemondis';
import {Route, Switch} from 'react-router-dom'
import FavsPage from './pages/favs';
import NavBar from './components/navbar';
import Home from './pages/home';
function App() {
 const [pokemon, setpokemon] = useState([])
 

  return (
    <div className="App">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' height='400px' />
  <NavBar />    
 
 {/* <PokemonDisplay pokemon={pokemon}/> */}
 <Switch>
   
   <Route path='/Fav' component={FavsPage} />
   <Route path='' component={Home}/>
   
 </Switch>
    </div>
  );
}

export default App;
