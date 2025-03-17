import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ratione ab molestias commodi facilis quas? Culpa, earum temporibus ab aliquam voluptatum blanditiis doloribus iure cupiditate.    </p>
            </div>

            <div>
                <p className="text-xl mb-5 font-medium">COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-400-272</li>
                    <li>cobtactus@forever.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr className='text-gray-400'/>
            <p className='text-center text-sm py-5'>Copyright 2025@forever.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer