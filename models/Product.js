import mongoose, { Schema } from "mongoose";


const ProductSchema= new mongoose.Schema({
    name:{type:String,required:true},
price:{type:String,required:true},
quantity:{type:String,required:true},
sale:{type:String,required:true},
about:{type:String},
year:{type:String,required:true},


})


const Product= mongoose.models.Product || mongoose.model("Product", ProductSchema)

export default Product

