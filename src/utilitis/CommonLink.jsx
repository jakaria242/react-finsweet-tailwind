import React from 'react'
import { Link } from 'react-router-dom'

const CommonLink = ({style, to, text,}) => {
  return (
    <>
    <Link className={style} to={to}>{text}</Link>
    </>
  )
}

export default CommonLink