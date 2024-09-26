import React from 'react'
import './Cards.css'
import Card from './Card'
const Cards = () => {
  return (
    <div className='container-fluid py-4 card-container'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
              <Card 
              image="https://images.unsplash.com/photo-1726178543393-032f01abacd6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
              <Card 
              image="https://images.unsplash.com/photo-1726808260756-ec1d4eceaf71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
              <Card 
              image="https://images.unsplash.com/photo-1726608070500-7d4df6bb6b2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
              <Card 
              image="https://images.unsplash.com/photo-1726148153379-c1a513d6dc4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Cards
