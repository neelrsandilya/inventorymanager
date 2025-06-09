'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faHome, faMagnifyingGlass, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { logout } from '@/actions/actions'
import { useActionState } from 'react'
import Logoutbutton from './Logoutbutton'



const Navbar = () => {
   const { register, handleSubmit,reset, formState: { errors,isLoading,isSubmitting } } = useForm();
      const [currentYear, setCurrentYear] = useState("");
  

  const [isDrop, setisDrop] = useState(false)
  const [state,logoutaction]=useActionState(logout,undefined)



 
    
    const redirect= useRouter()
    
    const [creator, setcreator] = useState("")

    const changehandle =(e) => {
      setcreator(e.target.value);
   }





  

  return (
   
      
<nav>
 
 <div className='flex flex-row justify-end text-gray-500 text-2xl	h-100px bg-white py-8 gap-10'>

 <Link className='absolute mr-425' href="/">  <Image height={50} width={70} className='' alt='hi'  src="/inv.png" />

 </Link>
 
  <Link className='absolute mr-450 font-bold text-black ' href="/"> PROD  <Image height={50} width={70} className='' alt='hi'   src="/manager.png" />
 </Link>
 
 

 <Link className='text-blue-800 font-bold' href="/"> Home </Link>
 <Link className='text-blue-800 font-bold' href="/contact"> Contact Us </Link>
 <Link className='text-blue-800 font-bold' href="/about"> About </Link>
 <Link className='text-blue-800 font-bold' href="/privacypolicy"> Privacy Policy </Link>

 { /* <Link className='hover:text-blue-400 pl-10'href="/Home">Account</Link> */ }

 {/* {session ? (<span className='text-sm'>Signed in as {session.user.email} </span>):"" } */}




<Link href="/Login"> <button onClick={() => {

 }
 } className="text-white  bg-gradient-to-r from-indigo-800 to-blue-400 hover: focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-blue-800 " > Sign In</button></Link>
<span className='mr-5'>
<Logoutbutton/>
 </span>
</div>


</nav>

  
  )
}

export default Navbar
