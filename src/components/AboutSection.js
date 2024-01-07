"use client"
import React,{useState,useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA=[
    {
        title:'Skills',
        id:'skills',
        content:(
            <ul className='list-disc pl-2 '>
                <li>Node.js</li>
                <li>Github</li>
                <li>JavasCript.js</li>
                <li>React.js</li>
            </ul>
        ),
    },
    {
        title:'Education',
        id:'education',
        content:(
            <ul className='list-disc pl-2 '>
                <li>Sunmoon University in South Korea</li>
           
            </ul>
        ),
    },
    {
        title:'Certifications',
        id:'certifications',
        content:(
            <ul className='list-disc pl-2 '>
                <li> Microsoft AI 900 Certification</li>
                <li> Certificate of Attendance International Conference on Research in Adaptive and Convergent Systems (RACS 23)</li>
            </ul>
        ),
    },
]



function AboutSection() {

    const [tab,setTab]=useState('skills')
    const [isPending,startTrasition]=useTransition()

    const handleTabchange=(id)=>{
        startTrasition(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white ' id='#about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 '>
               <Image src={'/images/about-me.jpg'} alt='' width={500} height={500} className='rounded-xl'/>
               <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I had the opportunity to come study in south korea. 
                        The i graduate in computer science in Sunmoon University. 
                        I have learn alot about my major
                         so i would like to use my skill to create more project 
                         and i would like to have more expreriences

                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton 
                        selectTab={()=>handleTabchange('skills')} 
                        active={tab==='skills'}>
                             {""}
                              Skills {""}
                        </TabButton>                      
                        <TabButton 
                        selectTab={()=>handleTabchange('education')} 
                        active={tab==='education'}>
                             {""}
                              Education {""}
                        </TabButton>   
                        <TabButton 
                        selectTab={()=>handleTabchange('certifications')} 
                        active={tab==='certifications'}>
                             {""}
                              Certifications {""}
                        </TabButton>   
                    </div>
                    <div className='mt-8'>
                        {
                            TAB_DATA.find((t)=>t.id===tab).content
                        }

                    </div>
               </div>
        </div>

      
    </section>
  )
}

export default AboutSection
