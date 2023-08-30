import React, { useRef } from 'react'
import {motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type,time,place,info,cgpa}) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LiIcon reference={ref}/>
    <motion.div 
    initial={{y:10}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}>
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
        {type}
      </h3>
      <span className='capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm'>
        <b>{time} | {place} | {cgpa}</b>
      </span>
      <p className='font-medium w-full md:text-sm'>
        <b>{info}</b>
      </p>
    </motion.div>
  </li>
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end',"center start"]
  })
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
      Education
      </h2>
      <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div 
      style={{scaleY: scrollYProgress}}
      className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
      md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-2 xs:ml-2'>
          <Details 
          type ="Bachelor of Technology in Computer Science"
          time="2019-2023"
          place="Lovely Professional University (LPU)" 
          info="Relevant course work included Data Visualization, Machine Learning, Data Analytics."
          cgpa="7.34 CGPA"
          />
      <ul className='ml-36 md:ml-3'>
        <Details
          type ="Class XII"
          time="2017-2019"
          place="Aditya Junior College" 
          cgpa="9.57 CGPA | Intermediate"
          />
        <Details 
          type ="Class X"
          time="2016-2017"
          place="Aditya Public School" 
          cgpa="9.2 CGPA | 10th Class"
          />
          </ul>
          </ul>
      </div>
      </div>
  )
}

export default Education