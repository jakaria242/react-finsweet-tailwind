import React from 'react'
import SubHeading from '../utilitis/SubHeading'
import SecHeading from '../utilitis/SecHeading'
import Peragraph from '../utilitis/Peragraph'

const BlogCard = ({blogClass, hClass, hText, sHClass, sHText, pClass, pText, hNclass, hNtext, hTclass, hTtext}) => {
  return (
    <div className={blogClass}>
        <SubHeading className={hClass} text={hText}/>
        <SecHeading className={sHClass} text={sHText}/>
        <Peragraph className={pClass} text={pText}/>
        <h4 className={hNclass}>{hNtext}</h4>
        <h5 className={hTclass}>{hTtext}</h5>
    </div>
  )
}

export default BlogCard