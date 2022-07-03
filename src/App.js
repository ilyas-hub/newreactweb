import React from 'react';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Service';
import Error from './Pages/Error';


const App = () => {
  return ( <>
  
  <Switch>
    <Route exact path="/newreactweb" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/service" component={Services} ></Route>
    <Route  component={Error}></Route>
    </Switch> 
  </>
  );
};

export default App;
