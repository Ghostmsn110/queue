import React from 'react'
import { Link } from 'react-router-dom'
import { TfiList } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import {useState, useEffect} from 'react'
import { Breadcrumbs } from './BreadCrumbs';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const [user, setUser] = useState('')
  const User = auth.currentUser;

  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);

  const signout = () => {
    signOut(auth)
    console.log('SIGNED OUT')
    window.location.href = '/';
  }

  return (
    <div id='Nav' className='NavBarWrapper w-screen pt-8 pb-4 opacity-95 flex flex-col justify-center items-center mt-0 mx-auto sticky top-0 z-30'>
      <div className="navBar w-9/12 flex justify-between h-fit">
        <h2 className="Logo text-xl font-semibold cursor-pointer">BRAND</h2>
        <div className="navLinks flex gap-8 font-semibold cursor-pointer">
        <Link href="/" className="Queue">QUEUE</Link>
        <Link to='/About' href="" className="About">ABOUT</Link>
        <Link to='/Help' className="Help">HELP</Link>
        {user ?  <Link to='/AdminLogin' href="" className="Login" onClick={signout}>SIGN OUT</Link>  :
        <Link to='/AdminLogin' href="" className="Login">ADMIN LOGIN</Link>
       }
        </div>
        <div className="MenuIcon cursor-pointer hidden justify-center relative">
            {toggle? <TfiList size = {30} onClick = {() => setToggle(false)} /> 
            : <TfiClose size = {30} onClick = {() => setToggle(true)}/> }
        </div>
        {!toggle && (
          <div className='Bar flex flex-col scale-up-tr  w-9/12 h-fit py-5 px-2 absolute top-24 z-20 rounded-md' >
              <ul className='menu-link px-4 text-white text-end gap-2 h-fit text-nowrap flex flex-col font-light py-2'>
              <Link href="/" className="Queue border-b-2 border-white pb-2">QUEUE</Link>
              <Link to='/About' href="" className="About border-b-2 border-white pb-2">ABOUT</Link>
              <Link to='/Help' className="Help border-b-2 border-white pb-2">HELP</Link>
              {user ? <Link to='/AdminLogin' href="" className="Login" onClick={signout}>SIGN OUT</Link> : 
              <Link to='/AdminLogin' href="" className="Login">ADMIN LOGIN</Link> 
               }
              </ul>
          </div>     
              )
              }
    </div>
    <Breadcrumbs />

    </div>
  
  )
}

export default NavBar