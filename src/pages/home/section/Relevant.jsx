import React from 'react'
import SubHeading from '../../../utilitis/SubHeading'
import SecHeading from '../../../utilitis/SecHeading'
import RelevantCard from '../../../components/RelevantCard'
import { FaPrayingHands } from "react-icons/fa";
import { MdOutlineWifiTethering } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";


const Relevant = () => {
  return (
    <>
    <section className='py-32'>
        <div className='max-w-container mx-auto'>
            <div className='font-robotoCondance uppercase text-center text-subHeadingColor'>
                <SubHeading className='text-base font-norma' text='sub-headline'/>
                <SecHeading className='text-5xl	font-bold   leading-SecHLineHight    mt-4' text="a church that's relevant"/>
            </div>
            <div className='pt-16 flex gap-[25px] flex-wrap items-center'>
                    <RelevantCard boxclass="w-[410px] bg-relevantColor p-20 relative after:absolute after:content-[' '] after:w-full after:h-4 after:bg-primary after:bottom-0 after:left-0" iconclass="w-12 h-12 bg-primary rounded-full flex justify-center items-center" svg={<FaPrayingHands size={20}/>} headingTxt="About us" headingClass="text-reletaveHeading font-robotoCondance text-subHeadingColor uppercase font-bold leading-11 mt-6 mb-2" peraTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." peraClass=" text-base text-normal font-robotoCondance text-subHeadingColor leading-6"/>
                    <RelevantCard boxclass="w-[410px] bg-relevantColor p-20 relative after:absolute after:content-[' '] after:w-full after:h-4 after:bg-primary after:bottom-0 after:left-0" iconclass="w-12 h-12 bg-primary rounded-full flex justify-center items-center" svg={<MdOutlineWifiTethering size={20}/>} headingTxt="Get involved" headingClass="text-reletaveHeading font-robotoCondance text-subHeadingColor uppercase font-bold leading-11 mt-6 mb-2" peraTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." peraClass=" text-base text-normal font-robotoCondance text-subHeadingColor leading-6"/>
                    <RelevantCard boxclass="w-[410px] bg-relevantColor p-20 relative after:absolute after:content-[' '] after:w-full after:h-4 after:bg-primary after:bottom-0 after:left-0" iconclass="w-12 h-12 bg-primary rounded-full flex justify-center items-center" svg={<FaHandHoldingHeart size={20}/>} headingTxt="Giving back" headingClass="text-reletaveHeading font-robotoCondance text-subHeadingColor uppercase font-bold leading-11 mt-6 mb-2" peraTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." peraClass=" text-base text-normal font-robotoCondance text-subHeadingColor leading-6"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Relevant