import React, { Component } from "react";
import { Switch, Route } from 'react-router';
import Home from "./components/Home";
import Movies from './components/Movies'
import MoviesDetails from './components/MoviesDetails'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}/>
          <Route exact path='/movies' render={props => <Movies {...props}/>}/>
          <Route exact path='/movies/:id' render={props => <MoviesDetails {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
