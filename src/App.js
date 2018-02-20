import React, { Component } from 'react';
import './App.css'
import './components/MainMenu.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
class App extends Component {

  render() {
    return (
      
      <div className="App" style={{height: '2000px'}}>
       
      <div id="outer-container">
      <MainMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      
      <main id="page-wrap" style={{height: '2000px'}}>
      <div><h1> Welcome to Julien-Tech </h1></div>
      <div><h1 classname="description"> This is in construction, don't hate me. Use the menu, top left  </h1></div>
      <h3>Universe Story</h3>
      <img style={{ width: "100%",flex: "grow"}} src ='images/bandeau1.jpg' />
      <h3>Porfolio v1</h3>
      <img style={{ width: "100%", flex: "grow"}} src ='images/bandeau2.jpg' />
    
    </main>
  
</div>
<Footer />
      </div>
    );
  }
}

export default App;
