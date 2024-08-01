import React from 'react'
import heroImage from '../images/main.jpeg'
import './css/hero.css'

const Hero = () => {

  return (
    <section className="hero" id="home">
        <div className="hero-banner">
          <img src={heroImage} alt='Hero'/>
          <div className='hero-content'>
            <h1>continue exploring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href="#tours" className="btn hero-btn">explore tours</a>
          </div>
        </div>
      </section>
  )
}

export default Hero