'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { get } from 'react-hook-form'
import { useEffect } from 'react'
import { LoginForm } from '../Home/Components/LoginForm'


const Login = () => {

 

  return (
    <div className='flex flex-col justify-center items-center' >
      
<LoginForm/>

  </div>
  )}



export default Login
