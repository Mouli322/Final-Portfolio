import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
          <span>Contact Me &#x1F449;</span>
            <div className='flex items-center lg:py-2'>
              <span>Email: <b>pothanavenkatamouli322@gmail.com</b></span>
               {/* <Link href="https://devdreaming.com" className='underline
               underline-offset-2
               ' target={"_blank"}><b>pothanavenkatamouli322@gmail.com</b></Link> */}
            </div>
            <span>Mobile: <b>+91 9550702931</b></span>
        </Layout>
    </footer>
  )
}

export default Footer