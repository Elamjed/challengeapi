import './App.css';
import Search from './componenet/Search';
import CocktaiList from './componenet/CocktaiList';
import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom'
import Details from './componenet/Details';
function App() {
  const[searchFinal,setSearchFinal]=useState("")
  return (
    <div className="App">
     <Search setSearchFinal={setSearchFinal}/>
     <Switch>
   
     <Route exact path="/" render={(props) =><CocktaiList {...props} searchFinal={searchFinal}/> } />

     < Route path = "/cocktail/:id" component = {Details} />
     </Switch>
    </div>
  );
}

export default App;
