import React from 'react'
import Image from '../utilitis/Image'
import folog from '../assets/images/flogo.png'
import SubHeading from '../utilitis/SubHeading'
import CommonLink from '../utilitis/CommonLink'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import SecHeading from '../utilitis/SecHeading'
import Button from '../components/Button'

const Footer = () => {
  return (
     <footer className='bg-subHeadingColor py-16'>
      <div className='max-w-container mx-auto'>
          <div className='flex'>
            <div>
              <Image sorce={folog} alter="Not Found"/>
              <span className='text-white text-xs font-normal font-robotoCondance uppercase pt-4 inline-block'>© Copyright Finsweet 2022</span>
              <ul className='pt-8 flex flex-col gap-y-4'>
                <li>
                  <span className='text-white text-xs font-normal font-robotoCondance uppercase inline-block'>(480) 555-0103</span>
                </li>
                <li>
                  <span className='text-white text-xs font-normal font-robotoCondance uppercase inline-block'>4517 Washington Ave. </span>
                </li>
                <li>
                  <span className='text-white text-xs font-normal font-robotoCondance uppercase inline-block'>finsweet@example.com</span>
                </li>
              </ul>
            </div>
            <div className='ml-[260px]'>
              <SubHeading className="text-white text-base font-normal font-robotoCondance capitalize leading-6" text="Quicklinks" />
              <ul className='mt-5 flex flex-col gap-y-6'>
                <li>
                  <CommonLink style="text-xs font-normal font-robotoCondance text-white uppercase opacity-75" to="#" text="About us"/>
                </li>
                <li>
                  <CommonLink style="text-xs font-normal font-robotoCondance text-white uppercase opacity-75" to="#" text="Sermons"/>
                </li>
                <li>
                  <CommonLink style="text-xs font-normal font-robotoCondance text-white uppercase opacity-75" to="#" text="Events"/>
                </li>
                <li>
                  <CommonLink style="text-xs font-normal font-robotoCondance text-white uppercase opacity-75" to="#" text="Blog"/>
                </li>
              </ul>
            </div>
            <div className='ml-[72px]'>
            <SubHeading className="text-white text-base font-normal font-robotoCondance capitalize leading-6" text="Connect " />
              <ul className='mt-5 flex flex-row gap-x-5'>
                <li>
                <FaFacebook className='text-primary cursor-pointer' size={18}/>
                </li>
                <li>
                <FaTwitter className='text-primary cursor-pointer' size={18}/>
                </li>
                <li>
                <FaLinkedin className='text-primary cursor-pointer' size={18}/>
                </li>
              </ul>
            </div>
            <div className='ml-[115px]'>
                <SecHeading className="w-[377px] text-white text-[32px] font-bold font-robotoCondance uppercase leading-[44px] mb-8" text="Subscribe to get Latest Updates and News"/>
                <form className='w-[512px] relative'>
                  <input className='p-[19px] w-full rounded-xl	border-[1px] bg-transparent outline-none text-white font-robotoCondance text-base border-slate-600	' type="email" placeholder='Yourmail@gmail.com'/>
                  <Button className="py-6 px-16 bg-primary text-btnTxtColor rounded-xl text-base font-normal uppercase font-robotoCondance leading-none absolute top-0 right-0 " text="Subscribe"/>
                </form>
            </div>
          </div>
      </div>
     </footer>
  )
}

export default Footer