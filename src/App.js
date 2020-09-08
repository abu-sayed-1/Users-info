import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound/PageNotFound';
import ParsonInfo from './components/ParsonInfo/ParsonInfo';
// import Images from './components/Images/Images';
import fakeData from './components/data.json';

// export const ImagesContext = createContext();

function App() {
  const img = fakeData;
  const images = img.map(images => images.img);
//  console.log(images);
//  console.log(img);

  return (
    <div>
      {
       images.map(img => <img src={img} alt=""/>)
      }
    

      <Router>
      {/* <Images></Images> */}
        <Switch>
          <Route path="/home">
           <Home /> 
          </Route>
           <Route exact path="/">
            <Home />
           </Route>
           <Route path="/parson/:parsonId">
            {/* <ImagesContext.Provider value={[img]}> */}
             <ParsonInfo />
             {/* </ImagesContext.Provider> */}
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
