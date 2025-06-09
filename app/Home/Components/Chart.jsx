
'use client'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const Chart = ({ inventory }) => {
  const data = inventory.map(item => ({
    name: item.name,
    Stock: item.quantity
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis fill = "fffff"/>
        <Tooltip />
        <Bar dataKey="Stock" fill="#ffffff" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
