import React from 'react'
import Image from '../utilitis/Image'
import SecHeading from '../utilitis/SecHeading'
import Peragraph from '../utilitis/Peragraph'

const WatchImgCard = ({watcboxclass, imgClass ,src, alt, textClass, hClass, hText, pClass, pText }) => {
  return (
    <div className={watcboxclass}>
        <Image className={imgClass} sorce={src} alter={alt}/>
        <div className={textClass}>
            <SecHeading className={hClass} text={hText}/>
            <Peragraph className={pClass} text={pText}/>
        </div>
    </div>
  )
}

export default WatchImgCard