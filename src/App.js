
import './App.css';
import {Route, Switch} from 'react-router-dom'
import FavsPage from './pages/favs';
import NavBar from './components/navbar';
import Home from './pages/home';
import Header from './components/header';
import {connect } from "react-redux"
import Battle from './pages/battle';

import Footer from './components/footer';
const mapStateToProps = (state)=>({
  battlePokemon : state.battlePokemon
})

function App(props) {
 
const {battlePokemon} = props;


  return (
    <div className="App">
      <Header/>
     
  <NavBar />    
 

 <Switch>


   <Route path='/Search' battlePokemon={battlePokemon} component={FavsPage} />
   {/* <Route path='/Battle' component={Battle} battlePokemon={battlePokemon} /> */}
   <Route path='/Battle' render={props => <Battle {...props} battlePokemon={battlePokemon}/>}/>
   <Route path='/' component={Home}  />
  

 </Switch>
    <Footer/>
    </div>
  );
}

export default connect(mapStateToProps, {})(App);
