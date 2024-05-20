"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../public/WyseLogo.png';

export default function Navbar() {
  const [isClick, setisClick] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  const isActive = (pathname: string) => activePath === pathname;

  const handleLinkClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div>
      <nav className='navbar bg-gray-300'>
        <div className='max-w-10xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href="/" onClick={() => handleLinkClick('/')}>
                  <Image src={Logo} width={150} height={250} placeholder='blur' alt="logo" />
                </Link>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center space-x-12'>
                <a href="/WyseTraffic" 
                  className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseTraffic') ? 'text-red-500' : ''}`}
                  onClick={() => handleLinkClick('/WyseTraffic')}>
                  WyseTraffic
                </a>
                <a href="/WyseRetail" 
                  className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseRetail') ? 'text-red-500' : ''}`}
                  onClick={() => handleLinkClick('/WyseRetail')}>
                  WyseRetail
                </a>
                <a href="/WyseSafety" 
                  className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseSafety') ? 'text-red-500' : ''}`}
                  onClick={() => handleLinkClick('/WyseSafety')}>
                  WyseSafety
                </a>
                <a href="/Industries" 
                  className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/Industries') ? 'text-red-500' : ''}`}
                  onClick={() => handleLinkClick('/Industries')}>
                  Industry
                </a>
                <a href="/Customization" 
                  className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/Customization') ? 'text-red-500' : ''}`}
                  onClick={() => handleLinkClick('/Customization')}>
                  Customization
                </a>
                <a href="/Contact" 
                  className='bg-red-500 text-white hover:bg-red-600 rounded-lg px-3 py-2 font-bold text-lg'
                  onClick={() => handleLinkClick('/Contact')}>
                  Request Demo
                </a>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col'>
              <a href="/WyseTraffic" 
                className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseTraffic') ? 'text-red-500' : ''}`}
                onClick={() => handleLinkClick('/WyseTraffic')}>
                WyseTraffic
              </a>
              <a href="/WyseRetail" 
                className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseRetail') ? 'text-red-500' : ''}`}
                onClick={() => handleLinkClick('/WyseRetail')}>
                WyseRetail
              </a>
              <a href="/WyseSafety" 
                className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/WyseSafety') ? 'text-red-500' : ''}`}
                onClick={() => handleLinkClick('/WyseSafety')}>
                WyseSafety
              </a>
              <a href="/Industries" 
                className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/Industries') ? 'text-red-500' : ''}`}
                onClick={() => handleLinkClick('/Industries')}>
                Industry
              </a>
              <a href="/Customization" 
                className={`text-black hover:bg-black hover:text-white rounded-lg font-bold text-lg ${isActive('/Customization') ? 'text-red-500' : ''}`}
                onClick={() => handleLinkClick('/Customization')}>
                Customization
              </a>
              <a href="/Contact" 
                className='bg-red-500 text-white hover:bg-red-600 rounded-lg px-3 py-2 font-bold text-lg'
                onClick={() => handleLinkClick('/Contact')}>
                Request Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
