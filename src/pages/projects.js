import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import facerecog from "../../public/images/projects/facerecog2.png"
import bankterm from "..//../public/images/projects/btd.jpg"
import daimond from "..//../public/images/projects/daimond.jpg"
import flightpp from "..//../public/images/projects/flight.png"
import bigmart from "..//../public/images/projects/bigmart1.png"
import bhp from "..//../public/images/projects/bhp2.png"
import airbnb from "..//../public/images/projects/Airbnb-Logo.jpg"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject= ({type,title,summary,img,link,github}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[0.5rem]
        ' />
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank" className='w-10'>{" "}<GithubIcon />{" "}</Link>
            <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base'
            >Visit Project</Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title,type,img,link,github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
        ' />
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-80" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target="_blank"
            className='text-lg font-semibold underline md:text-base'
            >Visit</Link>
            <Link href={github} target="_blank" className='w-8 md:w-6'>
                <GithubIcon />
            </Link>
            </div>
            </div>
        </article>

    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>
                Mouli | Projects Page
            </title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Unleashing the Power of Data" 
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl s:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Face Recognition Based Attendance System"
                        img={facerecog}
                        summary="Led a 4-person team to develop a face recognition application that captured and stored 100 photo samples of each student 
                        and tested with 50 students, fostering accurate attendance tracking.
                        Engineered an automated system using Python, Tkinter, OpenCV, and a MySQL Database, optimizing attendance marking 
                        for educational institutions through efficient photo management.
                        "
                        link="https://github.com/Mouli322/Attendance-System-Using-Face-Recognition"
                        github="https://github.com/Mouli322/Attendance-System-Using-Face-Recognition"
                        type="Featured Project"
                        />               
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Real Estate Price Prediction"
                        img={bhp}
                        summary="Engineered a predictive model using machine learning to anticipate house prices in Bangalore. Achieved 92% accuracy in 
                        predictions while analysing area, bedrooms, and bathrooms across a vast dataset of 13,000+ entries.
                        Implemented the entire project lifecycle, including data refinement, feature enhancement, machine learning model creation, 
                        and deployment as a user-friendly Flask application on AWS, enabling streamlined house price predictions."
                        link="https://real-estate-price-prediction.streamlit.app/"
                        github="https://github.com/Mouli322/Real-Estate-Price-Prediction/blob/main/Real_Estate_Price_Prediction.ipynb"
                        />     
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="BigMart Sales Prediction"
                        img={bigmart}
                        summary="Led a data-driven project focused on leveraging regression analysis and advanced statistical techniques to predict the sales 
                        of the company Big Mart based on the historical data and attained with 95% accuracy.
                        To estimate sales, this project required the cleaning of the data, EDA, feature engineering, dashboards with Power BI and 
                        development of machine learning models."
                        link="https://github.com/Mouli322/BigMart-Sales-Prediction/blob/main/Bigmart%20Sales%20Prediction.ipynb"
                        github="https://github.com/Mouli322/BigMart-Sales-Prediction/blob/main/Bigmart%20Sales%20Prediction.ipynb"
                        
                        />  
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject
                        title ='AirBnB Booking Analysis'
                        img = {airbnb}
                        summary=""
                        link=''
                        github=''
                        type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Diamond Price Prediction"
                        img={daimond}
                        summary="I developed a diamond price prediction project using Python and machine learning algorithms. The aim of the project is to predict
                        the price of diamonds based on various features such as carat weight, cut, color, clarity, and depth."
                        link="/"
                        github="/"
                       
                        />  
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Flight Fare Prediction"
                        img={flightpp}
                        link="https://github.com/Mouli322/Flight-Fare-Prediction"
                        github="https://github.com/Mouli322/Flight-Fare-Prediction"
                        />  
                    </div>
                     <div className='col-span-12'>
                    <FeaturedProject 
                        title="Bank Term Deposit"
                        img={bankterm}
                        summary="Utilized Python and diverse machine learning techniques to achieve 96% accurate customer enrollment forecasting on a 
                        10,000-record dataset, enhancing data-driven decision-making.
                        Supervised project phases, including feature selection, Excel data analysis, and advanced predictive modeling, achieving 
                        96% accuracy in predicting customer subscription behavior."
                        link="https://github.com/Mouli322/Bank-Term-Deposit/blob/main/Bank%20Term%20Deposit%20.ipynb"
                        github="https://github.com/Mouli322/Bank-Term-Deposit/blob/main/Bank%20Term%20Deposit%20.ipynb"
                        type="Featured Project"
                        />  
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects
