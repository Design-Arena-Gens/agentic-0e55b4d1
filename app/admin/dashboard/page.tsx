'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBrain, FaUsers, FaChalkboardTeacher, FaChartLine, FaCog, FaSignOutAlt, FaBars, FaTimes, FaDollarSign } from 'react-icons/fa'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const userGrowth = [
    { month: 'Jan', users: 850 },
    { month: 'Feb', users: 920 },
    { month: 'Mar', users: 1050 },
    { month: 'Apr', users: 1200 },
  ]

  const vivaStats = [
    { month: 'Jan', vivas: 1200 },
    { month: 'Feb', vivas: 1450 },
    { month: 'Mar', vivas: 1680 },
    { month: 'Apr', vivas: 1920 },
  ]

  const userDistribution = [
    { name: 'Students', value: 950, color: '#0ea5e9' },
    { name: 'Teachers', value: 55, color: '#8b5cf6' },
    { name: 'Admins', value: 8, color: '#f59e0b' },
  ]

  const recentActivity = [
    { id: 1, action: 'New user registered', user: 'john@example.com', time: '5 min ago', type: 'user' },
    { id: 2, action: 'Viva completed', user: 'Jane Smith', time: '12 min ago', type: 'viva' },
    { id: 3, action: 'Material uploaded', user: 'Prof. Wilson', time: '25 min ago', type: 'material' },
    { id: 4, action: 'Class created', user: 'Prof. Johnson', time: '1 hour ago', type: 'class' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <FaBrain className="text-3xl text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">AI Viva</span>
          </div>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-600 rounded-lg font-medium">
              <FaChartLine />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <FaUsers />
              Users
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <FaChalkboardTeacher />
              Classes
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <FaDollarSign />
              Payments
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">
              <FaCog />
              Settings
            </a>
          </nav>
        </div>
        <div className="absolute bottom-0 w-full p-6 border-t">
          <Link href="/login">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium">
              <FaSignOutAlt />
              Logout
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600"
            >
              {sidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Admin User</div>
                <div className="text-xs text-gray-500">System Administrator</div>
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <FaUsers className="text-2xl text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">1,013</div>
              <div className="text-sm text-gray-600">Total Users</div>
              <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <FaChalkboardTeacher className="text-2xl text-purple-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">55</div>
              <div className="text-sm text-gray-600">Active Teachers</div>
              <div className="text-xs text-green-600 mt-1">↑ 8% from last month</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <FaBrain className="text-2xl text-green-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">1,920</div>
              <div className="text-sm text-gray-600">Vivas This Month</div>
              <div className="text-xs text-green-600 mt-1">↑ 15% from last month</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <FaDollarSign className="text-2xl text-orange-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">$12,450</div>
              <div className="text-sm text-gray-600">Revenue This Month</div>
              <div className="text-xs text-green-600 mt-1">↑ 20% from last month</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#0ea5e9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={userDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {userDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Viva Activity</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={vivaStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vivas" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <div>
                    <div className="font-medium text-gray-900">{activity.action}</div>
                    <div className="text-sm text-gray-600">{activity.user}</div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
