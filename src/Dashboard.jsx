"use client"

import { Link, useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/cookies here
    alert("You have been logged out.")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#f0e6dd]">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <svg className="w-12 h-12 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-3xl font-bold">Group19</span>
        </div>
        <nav className="flex gap-8">
          <Link to="/dashboard" className="font-semibold text-lg">
            Dashboard
          </Link>
          <Link to="/projects" className="text-lg">
            Projects
          </Link>
          <Link to="/reporting" className="text-lg">
            Reporting
          </Link>
          <button onClick={handleLogout} className="text-lg text-red-600">
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to your Dashboard</h1>
          <div className="bg-white rounded-full px-4 py-2">
            <span className="font-medium">Secure Session</span>
            <span className="ml-2 bg-green-500 rounded-full w-3 h-3 inline-block"></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4">Security Status</h2>
          <div className="flex items-center text-green-600 mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Two-Factor Authentication is enabled</span>
          </div>
          <div className="flex items-center text-green-600 mb-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Last login: {new Date().toLocaleString()}</span>
          </div>
          <div className="flex items-center text-green-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Your account is secure</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">MFA Settings</h3>
            <p className="text-gray-600 mb-4">Manage your two-factor authentication settings</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Configure MFA</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Security Log</h3>
            <p className="text-gray-600 mb-4">View your recent account activity</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Log</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Recovery Options</h3>
            <p className="text-gray-600 mb-4">Set up account recovery methods</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Manage Recovery</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
