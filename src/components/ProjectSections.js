import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion,useInView } from 'framer-motion'


const Project_DATA=[
    {
        id:1,
        title:'React Portofolio Website',
        decriptions:'Project 1 description',
        image:'/images/Project/project1.png',
        tag:['All',"Web"],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id:2,
        title:'Dabate Game with ChatGpt',
        decriptions:'Project 1 description',
        image:'/images/Project/project2.png',
        tag:['All',"Web"],
        gitUrl:'https://github.com/daeilgogo/Challenge_AI',
        previewUrl:'https://debate-mate.vercel.app/'
    },
]


function ProjectSections() {

const ref=useRef(null)
const isInView = useInView(ref,{once:true})


  const [tag,setTag]=useState('All')

  const handleTagChange=(newTag)=>{
    setTag(newTag);
  };


  const filterproject=Project_DATA.filter((project)=>
    project.tag.includes(tag)
  )

  const carVariants={
    initial:{y:50,opacity:0},
    animate:{y:0,opacity:1},

  }
  return (
    <section >
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>
        My Projects
    </h2>
    <div className='text-white  flex flex-row justify-center gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag==='All'}/>
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag==='Web'}/>
        <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag==='Mobile'}/>


    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12' >
    {
        filterproject.map((project,index)=>(
          <motion.div key={index} 
          variants={carVariants} initial='initial'
           animate={isInView? 'animate':'initial'}
           transition={{duration:0.3, delay:index*0.4}}
           >
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.decriptions}
             imgUrl={project.image}
          gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}/>
          </motion.div>
           
        ))
      }

    </ul>
     
    </section>
  )
}

export default ProjectSections
