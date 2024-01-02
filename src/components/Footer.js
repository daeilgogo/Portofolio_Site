import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white w-full flex'>
        <div className='container p-12 flex justify-between items-center'>
            <span>
                <Image src='/images/logo.png' alt='logo' width={70} height={70}/>
            </span>
            <p className='text-slate-600'>All rigths reserved</p>
        </div>
      
    </footer>
  )
}

export default Footer
