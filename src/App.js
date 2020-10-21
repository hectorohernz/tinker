import React from 'react';
import './App.css';
import "milligram";
import Home from '../src/components/home/Home';
import "./components/scss/main.css"

class App extends React.Component{
  render() {
    return (
      <>
       <Home/>
      </>
    )
  }
}

export default App;
