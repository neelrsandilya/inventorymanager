'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const ProductTable = ({ data }) => {

  const router= useRouter()

  const handleupdate = (e,name) => {
    router.push('/edit/name')
  }
   

  

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl text-black">
        <thead>
          <tr className="bg-indigo-200 text-indigo-900">
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Sale</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Price (₹)</th>
            <th className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.sale}</td>
              <td className="py-2 px-4">{item.quantity}</td>
              <td className="py-2 px-4">{item.price}</td>
              <td> <button className='rounded-2xl bg-indigo-800 text-white px-3 hover:bg-indigo-600' onClick={() => {
                handleupdate(e,item.name)
              }
              }>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable