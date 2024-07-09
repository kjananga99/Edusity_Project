import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>In this tutorial you will learn to build and deploy complete responsive website using React JS. We will create a college or University website in this tutorial.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
