import mongoose from "mongoose";

import Product from "@/models/Product";

import { connectDB } from "@/libs/mongodb";

import { NextResponse } from "next/server";



export async function POST(request)
{
await connectDB()
console.log("Prod Created")
const {name,price,quantity,sale,about,year}= await request.json()
// const newUser = new User({username,email,password,cover,pp})

// await newUser.save()
await Product.create({name,price,quantity,sale,about,year})

return NextResponse.json({
    success:true,
    message:"Product Created"

})
}


export async function GET()
{
await connectDB()


const products= await Product.find()

return NextResponse.json(products)
}



export async function PUT(request){

    const {name,price,quantity,sale,about,year}= await request.json()


   const updatedProduct = await Product.findOneAndUpdate({name},{name,price,quantity,sale,about,year} )


    return NextResponse.json({ success: true, message: "Product updated", product: updatedProduct })

   
}

