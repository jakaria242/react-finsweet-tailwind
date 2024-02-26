import React from 'react'
import SubHeading from '../../../utilitis/SubHeading'
import SecHeading from '../../../utilitis/SecHeading'
import WatchImgCard from '../../../components/WatchImgCard'
import watch1 from '../../../assets/images/watch1.png'
import watch2 from '../../../assets/images/watch2.png'
import watch3 from '../../../assets/images/watch3.png'
import watch4 from '../../../assets/images/watch4.png'

const Watch = () => {
  return (
    <section className='pb-32 bg-watchBg'>
    <div className='max-w-container mx-auto'>
        <div className='text-center mx-auto w-[440px]'>
            <SubHeading className='text-base font-normal font-robotoCondance uppercase text-center text-subHeadingColor' text='Watch and listen'/>
            <SecHeading className='text-5xl	font-bold leading-SecHLineHight mt-4 mb-8 font-robotoCondance uppercase text-center text-subHeadingColor' text="THE benefits of joining our church"/>
        </div>
        <div className='mt-16 flex flex-wrap items-center gap-6'>
            <WatchImgCard watcboxclass="w-[302px] h-[384px] overflow-hidden relative group" imgClass="w-full h-full object-cover" textClass="absolute left-0 top-[70%] w-full h-full bg-overly p-8 group-hover:top-[45%] transition-all duration-300" src={watch1} alt="Not Found"   hClass="text-2xl font-bold font-robotoCondance uppercase text-white mb-4" hText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance leading-6 text-white opacity-[0.78]" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."/>
            <WatchImgCard watcboxclass="w-[302px] h-[384px] overflow-hidden relative group" imgClass="w-full h-full object-cover" textClass="absolute left-0 top-[70%] w-full h-full bg-overly p-8 group-hover:top-[45%] transition-all duration-300" src={watch2} alt="Not Found"   hClass="text-2xl font-bold font-robotoCondance uppercase text-white mb-4" hText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance leading-6 text-white opacity-[0.78]" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."/>
            <WatchImgCard watcboxclass="w-[302px] h-[384px] overflow-hidden relative group" imgClass="w-full h-full object-cover" textClass="absolute left-0 top-[70%] w-full h-full bg-overly p-8 group-hover:top-[45%] transition-all duration-300" src={watch4} alt="Not Found"   hClass="text-2xl font-bold font-robotoCondance uppercase text-white mb-4" hText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance leading-6 text-white opacity-[0.78]" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."/>
            <WatchImgCard watcboxclass="w-[302px] h-[384px] overflow-hidden relative group" imgClass="w-full h-full object-cover" textClass="absolute left-0 top-[70%] w-full h-full bg-overly p-8 group-hover:top-[45%] transition-all duration-300" src={watch3} alt="Not Found"   hClass="text-2xl font-bold font-robotoCondance uppercase text-white mb-4" hText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance leading-6 text-white opacity-[0.78]" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."/>
        </div>
    </div>
</section>
  )
}

export default Watch