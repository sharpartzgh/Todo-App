/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import{ FaMoon } from 'react-icons/fa6'
import { BsSun } from 'react-icons/bs'
// import { GetTheme } from '../component/ThemeSelector'

const Header = ({HandleDarkMode, darkMode}) => {
  // const [darkMode, ThemeSwitch] = GetTheme();
  return ( 
    <div className='bg-bg-desktop bg-cover bg-no-repeat h-52 relative items-center'>
        <div className="text-white flex text-centers items-center justify-between lg:w-[50%] lg:mx-auto py-8 px-5">
          <h1 className="h1-div font-mono flex items-center mb-20 text-3xl -tracking-tighter font-semibold">TODO</h1>
          {darkMode ? <BsSun onClick={HandleDarkMode} className='moon text-3xl mb-20'/> : <FaMoon onClick={HandleDarkMode} className='moon text-3xl mb-20'/>}
          
        </div>
    </div>
  )
}

export default Header
