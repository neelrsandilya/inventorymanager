'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Link } from 'react-router-dom'
import UpdateForm from '../Home/Components/UpdateForm'


const Edit = () => {


 

  return (
   <div>

<UpdateForm/>

   </div>
  )
}

export default Edit

