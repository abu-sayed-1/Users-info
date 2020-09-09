import React  from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import PersonsInfo from './components/PersonsInfo/PersonsInfo';

function App() { 

  return (
    
      <Router>
       <Switch>
        <Route path="/home">
         <Home /> 
         </Route>
         <Route exact path="/">
         <Home />
        </Route>
        <Route path="/person/:personId">
        <PersonsInfo />
       </Route>
       <Route path="*">
      <PageNotFound />
     </Route>
   </Switch>
  </Router>

  );
}

export default App;
