import React from 'react';
import './Card.css'

const Card = ({id, name, date, time, number}) => {
  return (
    <div className='Card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
}

export default Card;