import React from 'react'
import Image from '../utilitis/Image'
import logo from '../assets/images/logo.png'
import Navlink from '../utilitis/Navlink'
import Button from '../components/Button'

const Navbar = () => {
  return (
    <>
    <nav className='bg-navbg py-3'>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center'>
                <div className='w-[200px] relative after:absolute after:content-[" "] after:w-[2px] after:h-[80px] after:bg-white after:top-[-24px] after:right-0 after:opacity-25'>
                    <Image sorce={logo} alter="Logo"/>
                </div>
                <div className='w-[1080px] flex justify-between items-center'>
                    <ul className='flex gap-x-12 items-center ml-16'>
                        <Navlink className="text-base text-white font-normal uppercase opacity-90 font-robotoCondance hover:opacity-100" to="/" text="Home"/>
                        <Navlink className="text-base text-white font-normal uppercase opacity-90 font-robotoCondance hover:opacity-100" to="about" text="About Us"/>
                        <Navlink className="text-base text-white font-normal uppercase opacity-90 font-robotoCondance hover:opacity-100" to="sermon" text="Sermon"/>
                        <Navlink className="text-base text-white font-normal uppercase opacity-90 font-robotoCondance hover:opacity-100" to="blog" text="Blog"/>
                    </ul>
                    <Button className="py-5 px-12 bg-primary text-btnTxtColor rounded-xl text-base font-normal uppercase font-robotoCondance leading-none" text="Contact us"/>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar