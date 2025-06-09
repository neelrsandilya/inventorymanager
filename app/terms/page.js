'use client'

import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-blue-950">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-600">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Terms of Service</h1>

        <p className="mb-5 leading-relaxed">
          Welcome to <strong>ProdManager</strong>. By using our inventory management service, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 leading-relaxed">
          By accessing or using the platform, you confirm that you accept and agree to be bound by these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">2. User Responsibilities</h2>
        <p className="mb-4 leading-relaxed">
          You are responsible for maintaining the security of your account and data. Any activity under your account is your responsibility.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">3. Data & Privacy</h2>
        <p className="mb-4 leading-relaxed">
          We take privacy seriously. Your inventory and sales data remain confidential and are never sold or shared with third parties.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">4. Changes to Terms</h2>
        <p className="mb-4 leading-relaxed">
          We may update these Terms occasionally. You will be notified of any significant changes via email or the app interface.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">5. Termination</h2>
        <p className="mb-4 leading-relaxed">
          We reserve the right to suspend or terminate your access if you violate these terms or misuse the service.
        </p>

        
      </div>
    </div>
  )
}
