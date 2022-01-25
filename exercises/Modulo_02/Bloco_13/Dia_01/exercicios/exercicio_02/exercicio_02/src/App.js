import React, { Component } from 'react'
import './App.css';
import Profile from './Components/Profile';


class App extends Component {
  render() {
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        <Profile /> 
      </div>
    )
  }
}

export default App;
