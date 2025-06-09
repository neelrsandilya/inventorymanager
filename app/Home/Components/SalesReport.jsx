'use client'
import React, { useEffect } from 'react'
import { FaDollarSign } from 'react-icons/fa'

const SalesReport = ({data}) => {

let totalSales = data.reduce((sum, item) => {
  return sum + item.sale*item.price
  
},0)

console.log (totalSales)


  return (
    <div className="bg-white rounded-xl p-5 shadow flex items-center gap-4">
      <div className="text-green-600 text-4xl">
        <FaDollarSign />
      </div>
      <div className='text-black'>
        <p className="text-lg font-semibold">Monthly Sales</p>
        <p className="text-2xl font-bold">₹{totalSales}</p>
      </div>
    </div>
  )
}

export default SalesReport