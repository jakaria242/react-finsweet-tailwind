import React from 'react'
import SubHeading from '../../../utilitis/SubHeading'
import SecHeading from '../../../utilitis/SecHeading'
import Peragraph from '../../../utilitis/Peragraph'
import Button from '../../../components/Button'
import Image from '../../../utilitis/Image'
import loveimg1 from '../../../assets/images/loveimg1.png'
import loveimg2 from '../../../assets/images/loveimg2.png'
import loveimg3 from '../../../assets/images/loveimg3.png'
import CommonLink from '../../../utilitis/CommonLink'
import { FaArrowRightLong } from "react-icons/fa6";



const Love = () => {
  return (
    <>
        <section className='pb-32'>
        <div className='max-w-container mx-auto'>
            <div className='text-center'>
                <SubHeading className='text-base font-normal font-robotoCondance uppercase text-center text-subHeadingColor' text='sub-headline'/>
                <SecHeading className='text-5xl	font-bold leading-SecHLineHight mt-4 mb-8 font-robotoCondance uppercase text-center text-subHeadingColor' text="love and compassion"/>
                <Peragraph className='text-base font-normal font-robotoCondance text-center text-subHeadingColor w-[845px] mx-auto leading-6 pb-14' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                <Button className="py-6 px-16 bg-primary text-btnTxtColor rounded-xl text-base font-normal uppercase font-robotoCondance leading-none text-center" text="Learn more"/>
            </div>
            <div className='w-[1080px] flex gap-x-[25px] mt-12 mx-auto '>
                <div className='w-[295px] h-[384px] rounded-[30px] overflow-hidden mt-[-64px]'>
                    <Image className="w-full h-full object-cover" sorce={loveimg1} alter="Not Found"/>
                </div>
                <div className='w-[390px] h-[512px] rounded-[32px] overflow-hidden'>
                    <Image className="w-full h-full object-cover" sorce={loveimg2} alter="Not Found"/>
                </div>
                <div className='w-[295px] h-[384px] rounded-[30px] overflow-hidden mt-[-64px]'>
                    <Image className="w-full h-full object-cover" sorce={loveimg3} alter="Not Found"/>
                </div>
            </div>
            <div className='text-center mt-16'>
            <SubHeading className='text-base font-normal font-robotoCondance uppercase text-subHeadingColor' text='our mission & vision'/>
                <SecHeading className='text-[32px] font-bold leading-[44px] pt-4 font-robotoCondance uppercase text-subHeadingColor' text="celebrate WITH US"/>
                <Peragraph className='text-base font-normal font-robotoCondance text-subHeadingColor w-[512px] mx-auto leading-6 py-4' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <div className='flex justify-center items-center gap-x-[6px] '>
                <CommonLink className="text-[14px] font-normal font-robotoCondance text-subHeadingColor leading-[16px] capitalize" to="#" text="Read More" />
                <FaArrowRightLong  className='mt-[2px]'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Love