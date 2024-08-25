import React from 'react'
import NavBar from './NavBar'
import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='RootLayout w-screen mt-0 mx-auto flex justify-start flex-col h-screen pb-12 overflow-x-hidden bg-cover bg-no-repeat bg-center'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default RootLayout