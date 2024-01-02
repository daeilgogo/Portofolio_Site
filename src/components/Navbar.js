"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'


function Navbar() {

    const [navbarOpen,setNavBarOpen]=useState(false);


    const nav_links = [
        {
            title:"About",
            path:"#about",
        },
        {
            title:"Project",
            path:"#project",
        },
        {
            title:"Contact",
            path:"#contact",
        },
    ]

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
     <div className='flex container lg:py-4 flex-wrap items-center justify-between  px-4 w-full py-1 '>
      <Link href={"/"} 
      className='text-2xl md:text-5xl text-white font-semibold  '> 
       <Image src='/images/logo.png' className='rounded-full' width={100} height={100} alt='logo'/>
      </Link>
      {/* <div className='mobile-menu block md:hidden'>
        {
            !navbarOpen ? (
                <button onClick={()=>setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200  hover:text-white hover:border-white text-slate-200'>
                    <Bars3Icon className='w-5 h-5'/>
                </button>
            ):(
                <button onClick={()=>setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200  hover:text-white hover:border-white text-slate-200'>
                    <XMarkIcon className='w-5 h-5'/>
                </button>
            )
        }
      </div> */}
      <div className='menu hidden  md:bolck md:w-auto' id='navbar'>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
         
                {
                    nav_links.map((link, index)=>(
                       <li key={index} > 
                        <NavLink href={link.path} title={link.title}/>
                       </li>
                    ))
                }
         
        
        </ul>
      </div>
    </div>
   {
    navbarOpen ? <MenuOverlay links={nav_links}/>:null
   }
    </nav>
    
  )
}

export default Navbar
