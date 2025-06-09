import mongoose from "mongoose";

import Product from "@/models/User";

import { connectDB } from "@/libs/mongodb";

import { NextResponse } from "next/server";


export async function GET(request, {params}) {
    await connectDB();
  
    const {name} = await params;
  
    const product = await Product.findOne({ name });
  
    return NextResponse.json({
      userFound: !!product,
      product,
    });
  }

export async function PUT(request,{params}){

    const {name,price,quantity,sale,about,year}= await request.json()

    const {id} =params

    await Product.findOneAndUpdate({id},{name,price,quantity,sale,about,year} )


    return NextResponse.json({
        Product:true
    })

}


