import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faHome, faMagnifyingGlass, faMoneyBill, faStar,faX,fainstagram } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <div>

<footer className='py-20px flex flex-col bg-white h-100'>

  <div className="footbox flex flex-col sm:flex sm:flex-col  ">

    <div>

</div>
<div className='absolute mt-50 ml-10 flex flex-row gap-5'>
<SocialIcon url="https://twitter.com/" />
<SocialIcon url="https://facebook.com/" />
<SocialIcon url="https://linkedin.com/" />
</div>



<div className='grid grid-cols-2 grid-rows-4 wrap  text-gray-500 text-md bg-white py-6 gap-8 pl-170 pt-30 pb-30'>


<Link className='hover:text-indigo-600'href="/">Home</Link>
<Link className='hover:text-indigo-600'href="/Dashboard">Dashboard</Link>
<Link className='hover:text-indigo-600'href="/Dashboard">Account</Link>
<Link className='hover:text-indigo-600'href="/contact">Contact</Link>
<Link className='hover:text-indigo-600'href="/">Help</Link>
<Link className='hover:text-indigo-600' href="/about">About</Link>
<Link className='hover:text-indigo-600'href="/terms">Terms of Service</Link>
<Link className='hover:text-indigo-600' href="/privacypolicy">Privacy</Link>

</div>
</div> 

<div className='text-xs bg-gradient-to-r from-indigo-800 to-blue-400 py-4 flex flex-row justify-center max-w-lvw  '>Copyright © 2025 . All Rights Reserved.</div>


</footer>

      
    </div>
  )
}

export default Footer
