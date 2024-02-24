import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({to, className, text}) => {
  return (
    <>
     <li>
        <NavLink className={className} to={to}>{text}</NavLink>
     </li>
    </>
  )
}

export default Navlink