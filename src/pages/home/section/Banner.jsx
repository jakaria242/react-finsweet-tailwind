import React from 'react'
import Button from '../../../components/Button'
import Peragraph from '../../../utilitis/Peragraph'


const Banner = () => {
  return (
   <section  className='bg-homeBanner bg-cover bg-no-repeat bg-center py-32'>
      <div className='max-w-container mx-auto'>
          <div className='w-[592px]'>
            <h6 className='text-base uppercase font-robotoCondance text-white font-bold'>Welcome to our CHURCH</h6>
            <h1 className='text-bannerHeading uppercase font-robotoCondance text-white font-bold pt-4 pb-8'>Become a part of our community</h1>
            <Button className="py-6 px-16 bg-primary text-btnTxtColor rounded-xl text-base font-normal uppercase font-robotoCondance leading-none" text="Learn more"/>
            <Peragraph className='w-[308px] text-base font-robotoCondance text-white font-norma leading-6 mt-16 pl-[30px] relative after:absolute after:content-[" "] after:w-[18px] after:h-[2px] after:bg-primary after:top-[10px] after:left-0' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'/>
          </div>
      </div>
   </section>

  )
}

export default Banner