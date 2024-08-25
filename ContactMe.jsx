import React from 'react'
import { Form } from 'react-router-dom'

const ContactMe = () => {
  return (
    <div className='Contact w-full h-fit flex justify-center items-center'>
    <Form method='post' action="/Help/Contact" className="ContactForm w-72 h-fit flex flex-col justify-center gap-8 items-center rounded-lg py-5 px-8">
        <p className=" text-center text-white font-semibold">CONTACT ME</p>
        <input type="text" name="name" placeholder='Full Name' className=' bg-inherit text-white placeholder:text-white placeholder:text-sm border-b-2 pb-1 border-white text-center outline-none w-full'/>
        <input type="email" name="email" placeholder='Email Address' className=' bg-inherit text-white placeholder:text-white placeholder:text-sm border-b-2 pb-1 border-white text-center outline-none w-full'/>
        <textarea type="text" name="message" placeholder='Enter your message' id="" className=' bg-inherit text-white placeholder:text-white placeholder:text-sm border-b-2 pb-1 border-white text-center outline-none w-full'/>
        <button className=' w-fit bg-white rounded-md px-8 py-2 font-semibold text-center'>SUBMIT</button>
      </Form>
    </div>
  )
}

export default ContactMe