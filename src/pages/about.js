import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/boy6.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Fira_Sans_Extra_Condensed } from 'next/font/google'
import Skills from './Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{ duration: 3000 })
const isInView = useInView(ref,{once: true});

useEffect(() =>{
    if(isInView){
        motionValue.set(value);
    }

}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change",(latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
}, [springValue,value])

    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>
                Mouli | About Page
            </title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className='font-medium text-justify'>
                Hello! I'm <b>Mouli</b>, a Data Science enthusiast with a knack for transforming complex information into visual narratives. My journey began with a degree in <b>B.Tech  - CSE</b> (Specialised in <b>Data Science</b>), where I delved into the fascinating world of data preprocessing, exploratory analysis, and the captivating realms of machine learning and deep learning. Proficient in Python and various data manipulation tools, I've honed my skills through hands-on projects that have refined my ability to craft practical solutions. Alongside, I've mastered data visualization using tools such as Power BI, Excel, and Tableau, breathing life into data-driven stories. Together, let's explore the hidden patterns within data, drive insightful decisions, and collaboratively shape a smarter future through this thrilling data-driven adventure.
                </p>
                {/* <p className='my-4 font-medium'>
                Versatile individual with experience collecting, transforming, and organizing data for analysis to help make informed decisions. Excellent understanding and proficiency of platforms for effective data analyses, including SQL, Python, Excel, Tableau, and R. Strong communication, organizational, and analytical skills.
                </p>
                <p className='font-medium'>
                Versatile individual with experience collecting, transforming, and organizing data for analysis to help make informed decisions. Excellent understanding and proficiency of platforms for effective data analyses, including SQL, Python, Excel, Tableau, and R. Strong communication, organizational, and analytical skills.
                </p> */}
            </div>
    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
    '>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
        <Image src={profilePic} alt="Mouli" className="w-full h-auto rounded-full"
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw" />
    </div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-1'>
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={10} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:txt-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
    </div>

    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={10} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:txt-center md:text-lg sm:text-base xs:text-sm'>Certifications</h2>
    </div>

    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={10} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:txt-center md:text-lg sm:text-base xs:text-sm'>Skills</h2>
    </div>

</div>
        </div>
        <Skills />

        <Experience />
        <Education />
        </Layout>
      </main>
    </>
  )
}

export default about