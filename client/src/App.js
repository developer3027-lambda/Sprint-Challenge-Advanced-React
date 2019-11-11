import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './App.css';

class App extends React.Component {
constructor() {
  super()
  this.state = {
    players:[],
  }
}

componentDidMount() {
  axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res);
      this.setState({
        players: res.data
      });
    })
    .catch(err => console.log('axios err: ', err));
}
  render(){
    return (
      <div className="App">
        <Navbar />
      {this.state.players.map(player => (
        <div key={player.id}>
          <h3>{player.name}</h3>
        </div>
      ))}
        
      </div>
    );
  }
}

export default App;
