import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import ParsonInfo from './components/ParsonInfo/ParsonInfo';
function App() {
  // http://jsonplaceholder.typicode.com/comments/?postId=9
  //http://jsonplaceholder.typicode.com/posts/15
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
           <Home /> 
          </Route>
           <Route exact path="/">
            <Home />
           </Route>
           <Route path="/parson/:parsonId">
             <ParsonInfo />
           </Route>
           <Route path="*">
           <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
