import React from 'react'
import './Card.css'
const Card = ({ image ,text}) => {
  return (
    <div className="card main-card">
      <div className='image-container'>
        <img className='img-fluid card-img' src={image} alt="..." />
        <h5 className='card-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
      </div>
      <div className='card-content'>
        <div className='content'>
          <p>{text}</p>
          <button className='btn btn-light'>Expend</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
