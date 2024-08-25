import React from 'react'
import { Form } from 'react-router-dom'

const CustomerForm = () => {
  return (
    <div className='AdminLogin w-9/12 h-fit py-12 px-4 bg-white opacity-95 mt-12 mx-auto flex justify-center  items-center rounded-lg'>
        <Form method='post' action="/CustomerInfo" className="LoginForm Customer w-72 h-72 flex flex-col justify-center gap-8 items-center rounded-lg py-5 px-8">
            <p className=" text-center text-white font-semibold">CUSTOMER INFO</p>
            <input type="name" name="name" placeholder='Your Name e.g Henry Hart' className=' bg-inherit text-white placeholder:text-white placeholder:text-sm border-b-2 pb-1 border-white text-center outline-none w-full'/>
            <input type="text" name="number" placeholder='Phone Number' className=' bg-inherit text-white placeholder:text-white placeholder:text-sm border-b-2 pb-1 border-white text-center outline-none w-full'/>
            <button className=' w-fit bg-white rounded-md px-8 py-2 font-semibold text-center'>SUBMIT</button>
      </Form>
    </div>
  )
}

export default CustomerForm