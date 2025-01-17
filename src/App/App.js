import React, { Component } from "react";
import { fetchApiData } from "./Api";
import "./App.css";
import Reservations from "./Reservations";
import ResyForm from "./ResyForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }
  componentDidMount = () => {
    fetchApiData()
      .then((data) =>
        this.setState({
          reservations: data,
        })
      )
      .catch((err) => console.log(err, "Sorry, there has been an error!"));
  };

  addReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(
      (reservation) => reservation.id !== id
    );
    this.setState({ reservations: filteredReservations });
  };

  render() {
    return (
      <main className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <ResyForm addReservation={this.addReservation} />
        <Reservations
          reservations={this.state.reservations}
          deleteReservation={this.deleteReservation}
        />
      </main>
    );
  }
}

export default App;
