import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu'


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

let hostname =window.location.host.split('.')[-2] + "." + window.location.host.split('.')[-1]
let ai = "ai."+ hostname
let universe = "universe." + hostname
let help = "help." + hostname


class MainMenu extends React.Component {
  
  showSettings (event) {
    event.preventDefault();
  }
 

  render () {
    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={styles}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="universe" className="menu-item" href={universe}>Universe Story</a>
        <a id="portfolio" className="menu-item" href={ai}>Tina AI</a>
        <a id="tutorials" className="menu-item" href={help}>Aide RCSL</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default MainMenu