'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumber = dynamic(()=>{return  import('react-animated-numbers')},
{
    ssr:false
});


const achievementsList =[
    {
         metric:'Projects',
         value:"3",
         postfix:'+'

    },
    {
        postfix:'~',
        metric:'Users',
        value:"5",

   },
   {
    metric:'Awards',
    value:"2",

},
{
    metric:'Years',
    value:"1+",

},
]

const AchivementSections = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16  xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>

        {
            achievementsList.map((achievement,index)=>(
                <div key={index} className='flex flex-col items-center justify-center mx-4 gap-3'>
                    <h2 className='text-white text-2xl md:text-4xl font-bold flex flex-row '>
                    <AnimatedNumber
                         includeComma
                         animateToNumber={parseInt(achievement.value)}
                         locale='en-US'
                         configs={(_,index)=>{
                            return{
                                mass:1,
                                friction:100,
                                tension:140 * (index + 1),
                            }
                         }}/>
                         {achievement.postfix}
                    </h2>
                    <p className='text-[#ADB7BE]'>{achievement.metric}</p>

                </div>
            ))
        }
        </div>
       
        <div className='border-[#33353F] border rounded-md p=y-8 px-17 flex flex-row items-center'>

        </div>
      
    </div>
  )
}

export default AchivementSections
