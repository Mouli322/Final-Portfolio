import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/boy4.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';
// import fs from 'fs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mouli | My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>  
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className = "flex items-center justify-between w-full lg:flex-col">
            <div className='w-[45%] md:w-full'>
              <Image src={profilePic} alt="Mouli" className='w-full h-auto md:inline-block md:w-full rounded-full'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
            </div>
            
            <div className='w-1/2 flex flex-col items-left self-center lg:w-full lg:text-center'>
            <h1 className='text-4xl'>Hello I'm <strong className='text-5xl'>Mouli</strong></h1>
              {/* <h2>I am a Data Science Enthusiast</h2> */}
              <AnimatedText text="I am a Data Science Enthusiast" className='!text-4xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text=6xl  md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs text-justify'>Enthusiastic and proactive data science enthusiast with a good hands on experience in Python programming and machine learning techniques. 
              Proficient in SQL for efficient data manipulation and Excel for insightful data analysis. 
              Skilled in leveraging Tableau and Power BI for impactful data visualization and storytelling. 
              Currently expanding expertise into deep learning, demonstrating a commitment to staying at the forefront of emerging trends. 
              Eager to contribute my versatile skill set to a dynamic data-driven team while continuously enhancing my capabilities through hands-on learning and collaboration.</p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/Pothana Venkata Mouli Resume.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark

                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  ' download={true}>Resume <LinkArrow className={"w-6 ml-1"} />
                  
                  </Link>
                  <Link href="mailto:pothanavenkatamouli322@gmail.com" target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >Contact</Link>
                </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Mouli' className='w-full h-auto' />
        </div>

      </main>
    </>
  )
}

// export async function getStaticProps() {
//   // Read the content of the index.html file synchronously
//   const htmlContent = fs.readFileSync('srce/pages/index.html', 'utf-8');
  
//   return {
//     props: {
//       htmlContent,
//     },
//   };
// }
