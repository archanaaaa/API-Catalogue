import React, {Component}from 'react';
import Main from './Components/MainComponent';
import Login from './Components/Login';
import "./App.css";
import PrivateRoute from './utils/PrivateRoute';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {

  
  render() {  
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/main" component={Main}/>
      </Switch>
      </BrowserRouter>
      
   
  );
}
}

export default App;

