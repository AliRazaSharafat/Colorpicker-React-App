import React, { Component } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import brown from '@material-ui/core/colors/brown';
import deepOrange from '@material-ui/core/colors/deepOrange';
import blueGrey from '@material-ui/core/colors/blueGrey';

class App extends Component {
  state = {
    color: [
      red[500],
      purple[500],
      pink[500],
      blue[300],
      indigo[900],
      cyan[200],
      teal[600],
      green[800],
      cyan[600],
      yellow[500],
      brown[600],
      deepOrange[700],
      blueGrey[400],
      green[200],
      teal[300]
    ]
  }
  render() {
    return (
      <div className="App">
        <i><h1 style={{ fontFamily: 'Arial', fontSize: '40px', color: 'orange' }}> Color Picker</h1></i>

        <ColorPicker list={this.state.color} />
        <span>Deployed</span>
      </div>
    );
  }
}

export default App;