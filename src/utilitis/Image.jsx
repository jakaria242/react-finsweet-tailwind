import React from 'react'

const Image = ({className, sorce, alter, }) => {
  return (
    <>
    <img className={className} src={sorce} alt={alter} />
    </>
  )
}

export default Image