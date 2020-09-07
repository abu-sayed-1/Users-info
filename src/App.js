import React, { createContext } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import ParsonInfo from './components/ParsonInfo/ParsonInfo';
// import fakeData from './components/data.json';

// export const ImagesContext = createContext();

function App() {
  // const img = fakeData;
  // const images = img.map(imgs => imgs.img);
//  console.log(images);

  return (
    <div style={{background:'lightBlue',margin:0,padding:'10px'}}>
    {/* <ImagesContext.Provider value={{images}}> */}
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
   {/* </ImagesContext.Provider> */}

    </div>
  );
}

export default App;
