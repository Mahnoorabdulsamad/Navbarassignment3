
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
     <header className='text-white body-font bg-black '>

        <div className='  container mx-auto flex flex-wrap p-5  items-center '>
            <a className='flex titlefont font-medium items-center text-gray-900 mb-4 md:mb-0' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqI-u9-TOTKRd1sopIZbF04X-SYqVSKHSRAQ&s" alt="m logo"
       className='w-11 h-11 rounded-full'  /> 
         <span className='ml-3 mb-2 mt-2 text-2xl text-white  '>Mahnoor Siddiqui</span></a>
         <nav className='md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center mr-auto ' >      
            <ul className=" text-white flex">
          <li>
            <Link className='mr-5 hover:text-red-500 ' href="/" >Home</Link>
          </li>
          <li>
            <Link className='mr-5 hover:text-red-500' href="/about" >About</Link>
            </li>
          <li> 
            <Link className='mr-5 hover:text-red-500' href="/contact">Contact</Link>
            </li>
            <li> 
            <Link className='mr-5 hover:text-red-500' href="/service">Service</Link>
            </li>
        </ul>

         </nav>
         <div className='flex space-x-4 mt-4 md:mt-0'>
            <button  className='inline-flex items-center bg-yellow-300 text-black mr-auto hover:text-red-400  py-1 px-3 hover:bg-blue-400 focus:outline-none border-0 rounded text-base'>Login

            </button>
            <button  className='inline-flex items-center bg-red-600 text-black hover:text-yellow-400  py-1 px-3 hover:bg-green-500 focus:outline-none border-0 rounded text-base'>Login
                
                </button>
         </div>
         
        </div>

      

     </header>
    </div>
  )
}

export default Header

