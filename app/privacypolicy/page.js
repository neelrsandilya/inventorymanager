'use client'

import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-blue-950">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-600">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Privacy Policy</h1>

        <p className="mb-5 leading-relaxed">
          At <strong>Product Manager</strong>, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4 leading-relaxed">
          We collect information you provide such as your name, email, and business data. We may also collect data related to your inventory and usage of the system.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">2. Use of Information</h2>
        <p className="mb-4 leading-relaxed">
          We use your data to provide and improve our services, personalize your experience, and ensure the security of your account.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">3. Data Security</h2>
        <p className="mb-4 leading-relaxed">
          We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">4. Sharing of Information</h2>
        <p className="mb-4 leading-relaxed">
          We do not sell or rent your personal information. Data may be shared with trusted third-party services strictly for operational purposes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4 leading-relaxed">
          You have the right to access, update, or delete your personal data. You can contact us directly to exercise these rights.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">6. Updates to This Policy</h2>
        <p className="mb-4 leading-relaxed">
          This policy may be updated from time to time. We will notify you of any significant changes through email or the app interface.
        </p>

        <p className="text-sm text-right text-gray-500 mt-10 italic">
          Last updated: June 8, 2025
        </p>
      </div>
    </div>
  )
}
