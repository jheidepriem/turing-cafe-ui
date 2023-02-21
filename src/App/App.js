import React, { Component } from 'react';
import { fetchApiData } from './Api';
import './App.css';
import Reservations from './Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
   }
   componentDidMount = () => {
    fetchApiData()
    .then((data) => this.setState({reservations: data}))
    .catch((err) => console.log(err, 'Sorry, there has been an error!'))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Reservations reservations={this.state.reservations}/>
      </div>
      
    )
  }
}

export default App;
