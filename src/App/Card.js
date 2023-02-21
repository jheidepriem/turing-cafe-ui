import React from 'react';
import './Card.css'

const Card = ({id, name, date, time, number}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
    </div>
  )
}

export default Card;