import React from "react";
import "./Card.css";

const Card = ({ id, name, date, time, number, deleteReservation }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button className="cancel-button" onClick={() => deleteReservation(id)}>
        Cancel
      </button>
    </div>
  );
};

export default Card;
