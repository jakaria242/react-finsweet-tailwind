import React from 'react'
import SecHeading from '../../../utilitis/SecHeading'
import Peragraph from '../../../utilitis/Peragraph'
import Button from '../../../components/Button'
import Image from '../../../utilitis/Image'
import visiticon from '../../../assets/images/visiticon.png'

const Visit = () => {
  return (
    <section className='bg-visitimg bg-cover bg-no-repeat bg-center py-32'>
      <div className='max-w-container mx-auto'>
         <div className='w-[768px] bg-white mx-auto py-[72px] px-12 flex justify-between items-center border-b-[16px] border-primary'>
             <div>
              <SecHeading className="text-5xl font-bold font-robotoCondance uppercase text-subHeadingColor leading-[64px] w-[369px]" text="We want to serve the world around us"/>
              <Peragraph className="text-base font-normal font-robotoCondance  text-subHeadingColor leading-16 w-[302px] py-4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."/>
              <Button className=" py-6 px-16 bg-primary  text-black rounded-xl text-base font-normal uppercase font-robotoCondance leading-none " text="Visit"/>
             </div>
             <div>
              <Image sorce={visiticon} alter="Not Found"/>
             </div>
         </div>
      </div>
    </section>
  )
}

export default Visit