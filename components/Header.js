/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
   <center>
    <nav className="bg-gray-100 shadow dark:bg-gray-800 w-fit rounded-md mt-2 bg-white ">
        <div className="container flex items-center justify-center text-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="/" className="scroll-smooth text-gray-800 transition-colors duration-200 transform dark:text-gray-200  rounded-md px-2 py-2 hover:text-white hover:bg-purple-500 mx-1.5 sm:mx-6">home</a>
              
            <a  href="#abt" className=" border-b-2 border-transparent hover:text-white  transition-colors duration-200 transform dark:hover:text-gray-200  rounded-md px-2 py-2 hover:bg-purple-500 mx-1.5 sm:mx-6">about</a>

            <a href="#proj" className="border-b-2 border-transparent hover:text-white  transition-colors duration-200 transform dark:hover:text-gray-200 rounded-md px-2 py-2 hover:bg-purple-500 mx-1.5 sm:mx-6">projects</a>

            <a href="#skills" className=" border-b-2 border-transparent hover:text-white  transition-colors duration-200 transform dark:hover:text-gray-200 rounded-md px-2 py-2 hover:bg-purple-500 mx-1.5 sm:mx-6">skills</a>

            <a  href="https://techwithspandy.tk" className=" border-b-2 border-transparent hover:text-white  transition-colors duration-200 transform dark:hover:text-gray-200  rounded-md px-2 py-2 hover:bg-purple-500 mx-1.5 sm:mx-6">blog</a>
            
        </div>
    </nav>
    </center>
  )
}