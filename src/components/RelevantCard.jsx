import React from 'react'
import SecHeading from '../utilitis/SecHeading'
import Peragraph from '../utilitis/Peragraph'

const RelevantCard = ({boxclass, iconclass, svg, headingTxt, headingClass, peraClass, peraTxt}) => {
  return (
    <div className={boxclass}>
        <div className={iconclass}>
            {svg}
        </div>
        <SecHeading className={headingClass}text={headingTxt}/>
        <Peragraph className={peraClass}text={peraTxt}/>
    </div>
  )
}

export default RelevantCard