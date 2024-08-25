import React from 'react'

const About = () => {
  return (
    <div className='AboutWrapper w-9/12 h-fit py-12 px-4 bg-white opacity-95 mt-12 mx-auto flex justify-center  items-center rounded-lg'>
    <div className="About w-fit h-fit flex flex-col justify-center items-center rounded-lg py-5 px-8">
        <p className="text text-white">This is a web-based Restaurant Queuing System built to assist Restaurants in handling customer queue and ensuring a transparent and organized service rendering practice. It was built as a part of a project work for a computer science degree.</p>
        <br />
        <p className="text-white">This system was built using React js as the frontend programming language, and Firebase as the backend for storage, database management and hosting of the site.</p>
    </div>
    </div>
  )
}

export default About