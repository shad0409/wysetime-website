"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/WyseLogo.png'

export default function Navbar() {

    const [isClick, setisClick] = useState();

    const toggleNavbar = ():void =>{
        setisClick(!isClick)
    }

  return (
    <div>
      <nav className='bg-black'>
        <div className='max-w-10xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <Image src={Logo} width={150} height={250} placeholder='blur' alt="logo"/>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        <Link href="/" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Home
                        </Link>
                        <Link href="/Product" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Product
                        </Link>
                        <Link href="/Core" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Core Technologies
                        </Link>
                        <Link href="/Solution" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Solutions
                        </Link>
                        <Link href="/Case" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Case Studies
                        </Link>
                        <Link href="/Contact" 
                        className='text-white hover:bg-white hover:text-black rounded-lg'>
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white 
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavbar}
                    >
                        {isClick ? (
                            <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-2 sm:px-3'>
                    <Link href="/" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Home
                        </Link>
                        <Link href="/Product" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Product
                        </Link>
                        <Link href="/Core" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Core Technologies
                        </Link>
                        <Link href="/Solution" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Solutions
                        </Link>
                        <Link href="/Case" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Case Studies
                        </Link>
                        <Link href="/Contact" 
                        className='text-white block hover:bg-white hover:text-black rounded-lg'>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
      </nav>
    </div>
  )
}
