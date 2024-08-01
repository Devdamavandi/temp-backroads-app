import React from 'react'
import { pageLinks } from '../../data'
import PageLink from '../third-level/PageLink'


const PageLinks = ({parentClass, itemClass}) => {
  return (
    <div>
        <ul className={parentClass}>
            {pageLinks.map((link) => {
                return (
                <PageLink key={link.id} {...link} itemClass={itemClass}/>
                )
            })}
        </ul>
    </div>
  )
}

export default PageLinks