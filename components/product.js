import React, { useState, useEffect } from 'react';
import {useCallback} from 'react'
import styles from '../styles/nav.module.css'
import Image from 'next/image'

export default function Product(){
    return (
      <div className="mt-40 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
          <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
            <a href="/" aria-label="Item" className="mr-3">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <Image
              className="object-cover mb-6 rounded shadow-lg md:h-12 xl:h-12 w-32 h-32"
              src="/canva/leaf.svg"
              alt="later"
              width={50}
              height={150}
            />
              </div>
            </a>
            <h2 className="overflow-hidden font-sans text-3xl font-bol leading-none tracking-tight text-gray-900 sm:text-4xl">
              <span className="title-anime translate-y-20 inline-block mb-2 font-serif">The best Product</span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
          </div>
          <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">

          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          <div className='col-span-full'>
            <h2 id="product" className='text-right pr-20 text-4xl'>Sativa</h2></div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/2.png"
              alt="later"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Skunk 1
            </p>
            <p className="text-gray-700">
            Genetics Multiple Skunk Crosses (Afghani, Acapulco, Colombian)
            THC % THC 17% BALANCED
            Flavour/Aroma Earthy aromas and sour flavours
            Effects Energetic and Appetite increasing
            Medical Usage Stress and Anxiety reduction
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/3.png"
              alt="write"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            OG Kush
            </p>
            <p className="text-gray-700">
            Hybrid
Lemon Thai X Hindu Kush
THC 18% BALANCED
Spicy, skunky
Relaxation
Stress Reduction
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/4.png"
              alt="ok"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Banana Blaze
            </p>
            <p className="text-gray-700">
            Indica Dominant Hybrid
Dutch Passion genetics Old School Banana X Afghani Kush
THC 15% LOW
Sweet Fruit aromas and taste
Body relaxation
Switching off the mind
            </p>
          </div>
          <div className='col-span-full'>
          <h2 className='text-left text-4xl col-span-full'>Indica</h2>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/5.png"
              alt="next"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Amnesia Haze
            </p>
            <p className="text-gray-700">
            Sativa
South Asian Landrace X Jamaican Landrace
THC 19% HEAVY
Earthy aromas and lemon flavours
Uplifting and energetic buzz
Helps with stress relief and motivation
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/6.png"
              alt="doya"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Gorilla Glu
            </p>
            <p className="text-gray-700">
            Hybrid
Chem’s Sister X Chocolate Diesel
THC 20% POTENT
Earthy, sour aromas
Helps with stress and pain alleviation
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/7.png"
              alt="ok"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Gelato
            </p>
            <p className="text-gray-700">
            Hybrid
Sunset Sherbert X Thin Mint Girl Scout Cookies
THC 17% BALANCED
Sweet aroma and a fruity flavour
Euphoria, relaxation
Relief of pain, fatigue and Insomnia
            </p>
          </div>
          <div className='col-span-full'>
          <h2 className='text-center text-4xl'>Hibrid</h2>

          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/6.png"
              alt="doya"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            White Widow
            </p>
            <p className="text-gray-700">
            Hybrid
Brazilian Sativa Landrace X Indian Indica
THC 15% LOW
Woody aromas and an earthy flavour
Energetic
Motivates and powers creativity
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/7.png"
              alt="ok"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Critical White
            </p>
            <p className="text-gray-700">
            Hybrid
White Widow X Critical Mass
THC 21% HEAVY
Sweet and woody
Uplifting, Euphoric
Relaxation and motivating
            </p>
          </div>
          <div>
            <Image
              className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
              src="/canva/products/7.png"
              alt="ok"
              width={200}
              height={200}
            />
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Organically grow
            </p>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </div>


        
        
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    );
  };