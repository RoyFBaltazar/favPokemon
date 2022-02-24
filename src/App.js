import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDisplay from './components/pokemondis';
import {Route, Switch} from 'react-router-dom'
import FavsPage from './pages/favs';
import NavBar from './components/navbar';
import Home from './pages/home';
import Header from './components/header';
function App() {
 
 

  return (
    <div className="App">
      <Header/>
     
  <NavBar />    
 
 {/* <PokemonDisplay pokemon={pokemon}/> */}
 <Switch>
   
   <Route path='/Search' component={FavsPage} />
   <Route path='' component={Home}/>

 </Switch>
    </div>
  );
}

export default App;
