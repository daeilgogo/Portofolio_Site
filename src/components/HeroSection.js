"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';




function HeroSection() {
  return (
    <section className='lg-py-16 py-5'>
        <div className='grid grid-cols-1 sm:grid-cols-12 pt-20'>
            <motion.div
            initial={{opacity:0, scale:0.5 }}
             animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            
            className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 '> Hello, I`m {" "} </span>
                    <br></br>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Dae il  GOGO ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developper',
        1000,
        'Mobile Developper',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
       </h1> 
                <p className='text-[#ADB7BE] text-lg lg:text-xl '>
                A software developer with a passion for learning and creating.
                </p>
               <div>
                <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
                <button onClick={()=> window.location.replace('https://github.com/daeilgogo/CV-')} className='px-1 py-1 rounded-full w-full sm:w-fit mr-4  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white mt-3 '>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-2'>
                      Download CV
                    </span>
                </button>
               </div>
            </motion.div>
               <motion.div
            initial={{opacity:0, scale:0.5 }}
             animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
             className='col-span-4 place-self-center mt-4 lg:mt-0 '>
                <div className=' rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative object-fill  '>
                    <Image src='/images/folio.png'
                     alt='hero image'
                     width={400}
                     height={400}
                     className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-fill  shadow-xl  shadow-red-500'
                   />
                </div>
            </motion.div>
        </div>       
    </section>
  )
}

export default HeroSection
