'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from "next/navigation"; 

const UpdateForm = () => {

    const { register, handleSubmit,reset, formState: { errors,isLoading,isSubmitting } } = useForm();
    const [currentYear, setCurrentYear] = useState("");
const [user, setUser] = useState({})

 const [message, setmessage] = useState("")

 useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
}, []);

const redirect=useRouter()

 const onSubmit = async(data) => {

    console.log(data);
    // reset();
    setmessage("");
 
    

    try{

        const response = await fetch(`api/inventory`,{method:"PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data) })

          

                        if(response.ok){
                console.log("Product updated successfully")

                setmessage("Product updated successfully")}
                else{
                    setmessage("Error 500")
                }            
    }
  


   catch(error){
setmessage("Error: 400")

   }

 }
 

//  useEffect(() => {

//     fetchUser()
//    reset(
//     {


//         username: user.username || "",
//         email:user.email || "",
//         cover: user.cover || "",
//         about: user.about || "",
//         description: user.description || "",
//         pp: user.pp || "",
//         password: user.password || "",


//     }
// )

 
 
//  }, [])
 




 
 
  
  
    // const fetchUser = async (username) => {
    //     try {
    //         const response = await fetch(`/api/inventory/${encodeURIComponent(username)}`);
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch user");
    //         }
    //         const userInfo = await response.json();
    //         console.log(userInfo)
    //         setUser(userInfo.user);
    //     } catch (error) {
    //         console.error("Error fetching user:", error);
    //     }
    // };
  
  




  return (
    <div >

<form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
    <div className="outrbox bg-indigo-500 flex flex-col justify-center w-100 min-h-100 mt-10 rounded-xl items-center">
        <div className="inrbox bg-white text-black flex flex-col justify-center w-100 min-h-100 items-center py-10 px-5 rounded-xl ">
<h2 className='text-xl text-black'>Update Product </h2>
<div>
    <label htmlFor="username">Name:</label> <br />
    <input {...register("name",{required:true, minLength:{value:3,message:"Name should be longer!"},maxLength:30})} placeholder='Enter Your Name' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.username && <div className='text-red-500 text-sm'>{errors.name.message} </div>}
</div>

<div>
    <label htmlFor="price">Price:</label> <br />
    <input {...register("price",{ minLength:{value:1,message:"Price should be greater than one"}, })}placeholder='Enter Your email' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />

</div>
<div>
    <label htmlFor="password" >Quantity:</label> <br />
    <input {...register("quantity",{required:true, minLength:{value:1,message:"minimum quantity is 1"},maxLength:30})}placeholder='Enter Your password' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
    {errors.password && <div className='text-red-500 text-sm'>{errors.password.message} </div>}

    <div>
    <label htmlFor="cover">Sale:</label> <br />
    <input {...register("sale")} placeholder='Your cover pic URL' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.cover && <div className='text-red-500 text-sm'>{errors.sale.message} </div>}
</div>


<div>
    <label htmlFor="about">About:</label> <br />
    <input {...register("about",{required:true, minLength:{value:3,message:"about should be longer!"}})} placeholder='About Yourself' type="text" className='border pl-3 border-gray-400 rounded-md w-80 h-10' />
{errors.about && <div className='text-red-500 text-sm'>{errors.about.message} </div>}
</div>

{currentYear && (
                            <div className='hidden'>
                                <input 
                                    {...register("year")}
                                    type="text" 
                                    value={currentYear} 
                                    readOnly 
                                    className='border pl-3 border-gray-400 rounded-md w-80 h-10'
                                />
                            </div>
                        )}


</div>

<input disabled={isSubmitting} type='submit' className='bg-gradient-to-r from-indigo-800 to-blue-400 rounded-full p-2 flex justify-center w-80 mt-5 text-white active:bg-blue-950 '/>

<p className='text-sm text-gray-400 pt-5'>By logging in and using , you agree to our Terms of Service and Privacy Policy, and confirm that you are at least 18 years old.</p>


</div>
</div>



</form>




      
    </div>
  )
}

export default UpdateForm
