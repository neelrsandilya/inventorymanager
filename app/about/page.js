"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        <p className="mb-6 text-lg">
          <strong>ProdManager</strong> is a smart and simple Inventory Management System
          designed to help businesses manage, track, and organize their product stock
          with ease. Whether you&apos;re a small retailer or a growing warehouse operation,
          our platform gives you the tools to stay in control and make smarter
          decisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Total inventory tracking</li>
          <li>Product and stock management</li>
          <li>Low stock alerts</li>
          <li>Sales reporting and analytics</li>
          <li>User-friendly dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We aim to simplify inventory operations and eliminate manual errors with a clean, automated system. We believe in empowering businesses to grow by streamlining their backend operations through intuitive technology.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Terms and Conditions</h2>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-sm">
          <li>All data entered into our system is the responsibility of the user. We do not take liability for inaccurate or outdated inventory records.</li>
          <li>Users are not allowed to misuse, redistribute, or reverse-engineer the software or its components.</li>
          <li>System access is provided on an &quot;as-is&quot; basis without warranties. Users should regularly backup critical data.</li>
          <li>We reserve the right to suspend accounts for suspicious or malicious activity without prior notice.</li>
          <li>By using our system, you agree to these terms and acknowledge our privacy and security policies.</li>
        </ul>

        <p className="text-center mt-10 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} ProdManager. All rights reserved.
        </p>
      </div>
    </div>
  );
}
