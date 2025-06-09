'use client'
import React from 'react'
import Productform from '../Home/Components/Productform'
import { useRouter } from 'next/navigation'
 
const Addproduct = () => {
  const router=useRouter()
  return (

    <div className='flex justify-center items-center flex-col'>

        <Productform/>
<button onClick={() => {
  router.push('/Dashboard')
}
} className=" mt-10 px-15  bg-gradient-to-r from-indigo-800 to-blue-400 rounded-full p-2 flex justify-center text-white active:bg-blue-950">
Return to dashboard
</button>

    </div>
  )
}

export default Addproduct
