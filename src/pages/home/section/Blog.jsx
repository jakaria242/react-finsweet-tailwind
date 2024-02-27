import React from 'react'
import SubHeading from '../../../utilitis/SubHeading'
import SecHeading from '../../../utilitis/SecHeading'
import BlogCard from '../../../components/BlogCard'

const Blog = () => {
  return (
    <section className='py-32'>
        <div className='max-w-container mx-auto'>
        <div className='text-center mx-auto w-[576px]'>
            <SubHeading className='text-base font-normal font-robotoCondance uppercase text-center text-subHeadingColor' text='Read our Blog'/>
            <SecHeading className='text-5xl	font-bold leading-SecHLineHight mt-4 font-robotoCondance uppercase text-center text-subHeadingColor' text="SHARE, INSPIRE, INNOVATE"/>
        </div>
        <div className='mt-16 flex flex-wrap gap-[24px]'>
              <BlogCard blogClass="bg-relevantColor px-8 py-12 w-[302px] relative after:absolute after:content-[' '] after:w-0 after:h-4 after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-700 hover:after:w-full" hClass="text-xs font-bold font-robotoCondance uppercase tracking-[0.96px] text-[#DC9853]" hText="Relationship" sHClass="py-4 text-2xl	font-bold font-robotoCondance uppercase tracking-[0.24px] w-[218px] text-subHeadingColor" sHText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal w-[238px] opacity-75" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." hNclass=" mt-12 mb-[4px] capitalize text-[18px] font-normal font-robotoCondance text-subHeadingColor leading-normal" hNtext="By Mathew Johnson" hTclass="capitalize text-base font-normal font-robotoCondance text-subHeadingColor leading-6" hTtext="Tuesday 13 May, 2021"/>
              <BlogCard blogClass="bg-relevantColor px-8 py-12 w-[302px] relative after:absolute after:content-[' '] after:w-0 after:h-4 after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-700 hover:after:w-full" hClass="text-xs font-bold font-robotoCondance uppercase tracking-[0.96px] text-[#DC9853]" hText="Relationship" sHClass="py-4 text-2xl	font-bold font-robotoCondance uppercase tracking-[0.24px] w-[218px] text-subHeadingColor" sHText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal w-[238px] opacity-75" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." hNclass=" mt-12 mb-[4px] capitalize text-[18px] font-normal font-robotoCondance text-subHeadingColor leading-normal" hNtext="By Mathew Johnson" hTclass="capitalize text-base font-normal font-robotoCondance text-subHeadingColor leading-6" hTtext="Tuesday 13 May, 2021"/>
              <BlogCard blogClass="bg-relevantColor px-8 py-12 w-[302px] relative after:absolute after:content-[' '] after:w-0 after:h-4 after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-700 hover:after:w-full" hClass="text-xs font-bold font-robotoCondance uppercase tracking-[0.96px] text-[#DC9853]" hText="Relationship" sHClass="py-4 text-2xl	font-bold font-robotoCondance uppercase tracking-[0.24px] w-[218px] text-subHeadingColor" sHText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal w-[238px] opacity-75" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." hNclass=" mt-12 mb-[4px] capitalize text-[18px] font-normal font-robotoCondance text-subHeadingColor leading-normal" hNtext="By Mathew Johnson" hTclass="capitalize text-base font-normal font-robotoCondance text-subHeadingColor leading-6" hTtext="Tuesday 13 May, 2021"/>
              <BlogCard blogClass="bg-relevantColor px-8 py-12 w-[302px] relative after:absolute after:content-[' '] after:w-0 after:h-4 after:bg-primary after:bottom-0 after:left-0 after:transition-all after:duration-700 hover:after:w-full" hClass="text-xs font-bold font-robotoCondance uppercase tracking-[0.96px] text-[#DC9853]" hText="Relationship" sHClass="py-4 text-2xl	font-bold font-robotoCondance uppercase tracking-[0.24px] w-[218px] text-subHeadingColor" sHText="WATCH AND LISTEN TO OUR SERMONS" pClass="text-base font-normal font-robotoCondance text-subHeadingColor leading-normal w-[238px] opacity-75" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." hNclass=" mt-12 mb-[4px] capitalize text-[18px] font-normal font-robotoCondance text-subHeadingColor leading-normal" hNtext="By Mathew Johnson" hTclass="capitalize text-base font-normal font-robotoCondance text-subHeadingColor leading-6" hTtext="Tuesday 13 May, 2021"/>
        </div>
        </div>
    </section>
  )
}

export default Blog