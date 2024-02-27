import React from 'react'
import SecHeading from '../../../utilitis/SecHeading'
import SubHeading from '../../../utilitis/SubHeading'
import Image from '../../../utilitis/Image'
import upcoming from '../../../assets/images/upcoming.jpg'
import UpcomingCard from '../../../components/UpcomingCard'
import Peragraph from '../../../utilitis/Peragraph'
import { GoClock } from "react-icons/go";
import Button from '../../../components/Button'
import CommonLink from '../../../utilitis/CommonLink'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLocationSearching } from "react-icons/md";
import { Link } from 'react-router-dom'



const Upcaming = () => {
  return (
    <section className='py-32'>
        <div className='max-w-container mx-auto'>
        <div className='text-center mx-auto w-[555px]'>
            <SubHeading className='text-base font-normal font-robotoCondance uppercase text-center text-subHeadingColor' text='Upcoming SERMONS'/>
            <SecHeading className='text-5xl	font-bold leading-SecHLineHight mt-4 font-robotoCondance uppercase text-center text-subHeadingColor' text="join us and become part of something great"/>
        </div>
        <div className='mb-8 bg-relevantColor w-full h-[512px] flex'>
            <UpcomingCard className='w-[435px] py-[61px] px-[90px] relative'>
             <SubHeading  className="text-xs font-bold font-robotoCondance uppercase tracking-[0.96px] text-[#DC9853]" text="Upcoming Event"/>
             <h4 className='py-4 text-2xl	font-bold font-robotoCondance uppercase tracking-[0.24px] w-[210px] text-subHeadingColor'>WATCH AND LISTEN TO OUR SERMONS</h4>
             <Peragraph className="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal w-[256px] opacity-75" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."/>
             <div className='mt-8 flex flex-col	gap-y-4'>
              <div className='flex gap-x-4 items-start'>
                <div>
                <GoClock size={20} />
                </div>
                <div className='mt-[-5px]'>
                  <Peragraph className="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal" text="Friday 23:39 IST"/>
                  <Peragraph className="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal" text="Saturday 11:20 ISD"/>
                </div>
              </div>
              <div className='flex gap-x-4 items-start'>
                <div>
                <MdLocationSearching size={20} />
                </div>
                <div className='mt-[-5px]'>
                  <Peragraph className="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal" text="No 233 Main St. New York,"/>
                  <Peragraph className="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal" text="United States"/>
                </div>
              </div>
              <Button className=" w-[191px] mt-8 py-6 px-16 bg-black  text-primary rounded-xl text-base font-normal uppercase font-robotoCondance leading-none " text="Register"/>
             </div>
             <div className='w-auto absolute top-8 right-8 text-center'>
                  <SubHeading className="text-2xl font-bold font-robotoCondance uppercase tracking-[0.24px] text-subHeadingColor leading-[none]" text="20"/>
                  <span className='text-base font-normal font-robotoCondance uppercase text-subHeadingColor leading-[none]'>JULY</span>
             </div>
            </UpcomingCard>
          <div className='w-[845px] overflow-hidden'>
              <Image className="h-full w-full object-cover leading-none" sorce={upcoming} alter="Not Found"/>
          </div>    
        </div>
        <div className='flex justify-end	items-center gap-x-[11px] mt-12 	'>
            <CommonLink style="text-2xl font-normal font-robotoCondance text-black leading-[24px] capitalize" to="#" text="View all Sermons" />
            <FaArrowRightLong  className='mt-[2px]'/>
        </div>
        </div>
    </section>
  )
}

export default Upcaming