'use client'
import React, { useEffect, useState } from 'react'
import { FaBoxes, FaExclamationTriangle, FaChartBar, FaListAlt, FaDollarSign } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Chart from '../Home/Components/Chart' // We'll create this separately
import ProductTable from '../Home/Components/ProductTable' // Product list
import SalesReport from '../Home/Components/SalesReport' // Summary card or graph

import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const [inventory, setInventory] = useState([])
  const [lowStock, setLowStock] = useState([])
const router= useRouter();

useEffect(() => {
  const fetchInventory = async () => {
    try {
      const res = await fetch('/api/inventory')
      const json = await res.json()
      console.log('Fetched inventory:', json)

      // If your data is inside a key like 'inventory', extract it
      const data = Array.isArray(json) ? json : json.inventory

      if (!Array.isArray(data)) {
        throw new Error('Expected an array but got: ' + JSON.stringify(data))
      }

      setInventory(data)
      setLowStock(data.filter(item => item.quantity < 5))
    } catch (err) {
      console.error('Error fetching inventory:', err)
    }
  }

  fetchInventory()
}, [])


  return (
    <div className="min-h-screen bg-blue-800 p-6 space-y-10">
      <h1 className="text-4xl font-bold text-gray-100">Inventory Dashboard</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col gap-4">
  <SummaryCard title="Total Items" icon={<FaBoxes />} value={inventory.length} />
  <button
    className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition duration-300"
    onClick={() => {
router.push('/Add')

    }}
  >
    + Add Product
  </button>
</div>



        <SummaryCard title="Low Stock" icon={<FaExclamationTriangle />} value={lowStock.length} />
        <SalesReport data = {inventory} />
        <SummaryCard title="Analytics" icon={<FaChartBar />} value="View Chart" />
      </div>

      {/* Product List */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Product List</h2>
        <ProductTable data={inventory} />
      </section>

      {/* Chart */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4  ">Inventory Analytics</h2>

<div className='bg-blue-400 rounded-2xl text-white'>
        <Chart inventory={inventory} />
</div>
      </section>
    </div>
  )
}

const SummaryCard = ({ title, icon, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-5 shadow flex items-center gap-4"
  >
    <div className="text-indigo-700 text-4xl">{icon}</div>
    <div className='text-black'>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </motion.div>
)




export default Dashboard
