import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div className="HelpWrapper w-9/12 h-fit flex flex-col mt-12 mx-auto justify-start gap-8">
        <div className="navLinksH w-full flex justify-center items-center gap-4">
            <Link to='/Help' className="HelpBtn How py-2 px-4 w-fit text-nowrap text-white rounded-md text-sm font-semibold">HOW TO USE</Link>
            <Link to='/Help/Contact' className="Helpcontact py-2 px-4 w-fit text-nowrap text-white rounded-md text-sm font-semibold">CONTACT</Link>
        </div>
        <div className='Help w-full h-fit py-12 px-4 bg-white opacity-95 mx-auto flex flex-col justify-center  items-center rounded-lg'>
        <Outlet />
        </div>
    </div>
  )
}

export default HelpLayout