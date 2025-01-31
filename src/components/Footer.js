import React from 'react'
import SocialLinks from './second-level/SocialLinks'
import PageLinks from './second-level/PageLinks'

const Footer = () => {
  return (

    <footer className="section footer">

      <PageLinks parentClass="footer-links" itemClass="footer-link"/>
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />  
        
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
  )
}

export default Footer