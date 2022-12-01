import React from 'react'
import { BiMessageAlt } from 'react-icons/bi'

//Icons
import { FiSearch } from 'react-icons/fi'
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineNotifications, MdSettings } from 'react-icons/md'

const Navbar = () => {
  return (
      <>
          <div className='h-16 border-b shadow-sm text-gray-300 flex items-center justify-between px-10'>
              <div className='flex items-center gap-4'>
                  <FiSearch className='w-5 h-5'/>
                  <input type="search" placeholder='Type to search..' className='border-none text-sm active:outline-none focus:outline-none ' />
            </div>
              <div className='flex items-center gap-4'>
                  <MdSettings className='w-5 h-5'/>
                  <BiMessageAlt className='w-5 h-5' />
                  <MdOutlineNotifications className='w-5 h-5' />
                  <div className='flex items-center gap-2'>                      
                  <span className='flex flex-col items-center text-xs font-semibold'>
                      <h4 className='text-gray-800'>Thomas Brown</h4>
                      <p>Developer</p>
                  </span>                      
                    <div className='w-10 h-10 rounded-full'>
                      <img src="https://images.unsplash.com/photo-1545912453-3d32e20f72bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" className='w-full h-full rounded-full'/>
                      </div>
                      <BiChevronDown />
                  </div>
              
              </div>  
      </div>
      </>
  )
}

export default Navbar