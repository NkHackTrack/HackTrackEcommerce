import React from 'react'
import './TabCard.css'

const TabCard = ({heading,content}) => {
  return (
    <div className='card tab-card p-4'>
      <h4 className='mb-lg-3'>{heading}</h4>
      <p>{content}</p>
      <p className='mb-0'><button className='learn-more-btn'>LEARN MORE</button></p>
    </div>
  )
}

export default TabCard
