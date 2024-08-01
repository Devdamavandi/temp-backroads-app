import React from 'react'
import { socialLinks } from '../../data'
import SocialLink from '../third-level/SocialLink'
  
const SocialLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
    {socialLinks.map((social) => {
      return (
        <SocialLink key={social.id} {...social} itemClass={itemClass}/>
      )
    })}
  </ul>
  )
}

export default SocialLinks