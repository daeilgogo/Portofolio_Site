
'use client'
import React,{useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { data } from 'autoprefixer'



const EmailSection = () => {

// const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const data ={
//     email:e.target.email.value,
//     subject:e.target.subject.value,
//     message:e.target.message.value,
//     }

//     const JSONdata =JSON.stringify(data)
//     const endpoint = '/src/APi/api.js';

//     const options={
//         method:'POST',
//         Headers:{
//             'content-types':'application/json'
//         },
//         body:JSONdata,
//     }

//     const response = await fetch(endpoint,options)
//     const resData = await response.json();
//     if (response.status ===200){
//     console.log('Message Sent')
//     }
// }
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_6brdkvi', 'template_f491es5', form.current, '6q_h_Vtswyci8-QMc')
    .then((result) => {
        alert(result.text);
    }, (error) => {
        alert(error.text);
    });
};


  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className=' bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bod text-white my-2 '>
                Let`s Connect 
            </h5>
            <p className='text-[#ABD7BE] mb-4 max-w-md'>

            </p>
            <div className='socials  flex flex-row gap-2'>
                <Link href='http://github.com'>
                    <Image src={'/images/github.png'} alt='Github Icon' width={50} height={50}/>
                </Link>
                <Link href='http://linkedin.com'>
                    <Image src={'/images/linkedin.png'} alt='linked i Icon' width={50} height={50} />
                </Link> 

            </div>
        </div>
        <div>
            <form className='flex flex-col' ref={form} onSubmit={sendEmail}  >
                <div className='mb-6'>
                   <label  className='text-white block mb-1 text-sm font-medium'>Your Name</label>
                   <input   type='text' name='user_name'
                   className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required placeholder='enter your name'/>

                </div>
                <div className='mb-6'>
                    <label  className='text-white block mb-1 text-sm font-medium'>email</label>
                    <input  type='email' name='user_email'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required placeholder='abcd@gmail.com'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium  '>
                        Message 
                    </label>
                    <textarea
                    name='message'
                    placeholder='Leave your message here .....'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>

                </div>
              <button
                    type="submit" value="Send"
                className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full  '
                >Send Message</button>
                  
                 
                         
            </form>
        </div>
      
    </section>
  )
}

export default EmailSection
