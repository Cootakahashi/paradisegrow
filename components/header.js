import React, { useState, useEffect } from 'react';
import {useCallback} from 'react'
import styles from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavRes from './navRes'
export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let pageYoffset = 0

    const onScroll = useCallback(event => {
        const navitem = window.document.querySelector('.nav-item')


        if (pageYoffset > pageYOffset){
            navitem.classList.add('show')
        }
        else {
            navitem.classList.remove('show')
        }
        pageYoffset = pageYOffset


    }, []);


    useEffect(() => {
      const navitem = window.document.querySelector('.nav-item')
      navitem.classList.add('show')
      const { pageYOffset, scrollY } = window;
      const navRe = window.document.querySelector('.navres')
      const headerElem = window.document.querySelector('.header-elem')
      window.addEventListener('scroll', onScroll, { passive: true })



    })


    
    
  
    return (
      <div className="uppercase	z-30 fixed nav-item px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 opacity-0 -translate-y-40">
        <div className="relative flex items-center justify-between">
            <div className='block md:hidden ml-auto flex hidden'>
            <button
              onClick={function addc(){
                alert(123);
              }}
              aria-label="Company"
              title="Company"
              className=""
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
              
            </button>
            </div>
            <div className="hidden md:flex text-right ">
            <ul className="flex items-center ml-80 hidde space-x-12 lg:flex border-b">
              <li>
                <Link href={"/shop"} passHref legacyBehavior>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="bg-lime-600 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Shopnow
                </a>
                </Link>
              </li>
              <li>
              <Link href="#aboutus" passHref legacyBehavior>
              <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  className="whitespace-nowrap font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Our story
                </a>
                 </Link>


              </li>
              <li>
              <Link href="#product" passHref legacyBehavior> 
              <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Products
                </a>
              </Link>


              </li>
              <li>
              <Link href="#science" passHref legacyBehavior>
              <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="whitespace-nowrap font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Science of medical cannabis
                </a>
                 </Link>


              </li>
              <li>
              <Link href="#events" passHref legacyBehavior>
              <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Events
                </a>
                 </Link>


              </li>
              <li>
              <Link href="#aboutus" passHref legacyBehavior> 

              <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="whitespace-nowrap mr-8 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Holidays with paradise
                </a>
              </Link>

              </li>

            </ul>
          </div>
          {/* <ul className="flex items-center hidden space-x-8 lg:flex border-b">
            <li>
              <a
                href="/"
                aria-label="Sign in"
                title="Sign in"
                className="whitespace-nowrap font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/"
                className="whitespace-nowrap text-slate-400 bg-gray-100 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul> */}
          </div>


         
      
      </div>
    );
  };