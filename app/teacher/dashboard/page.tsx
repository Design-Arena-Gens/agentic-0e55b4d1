'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBrain, FaUsers, FaChartLine, FaBook, FaCalendarAlt, FaSignOutAlt, FaBars, FaTimes, FaPlus } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const classPerformance = [
    { class: 'Math A', avgScore: 82 },
    { class: 'Math B', avgScore: 78 },
    { class: 'Physics', avgScore: 85 },
    { class: 'Chemistry', avgScore: 80 },
  ]

  const weeklyActivity = [
    { day: 'Mon', vivas: 12 },
    { day: 'Tue', vivas: 15 },
    { day: 'Wed', vivas: 18 },
    { day: 'Thu', vivas: 14 },
    { day: 'Fri', vivas: 20 },
  ]

  const upcomingVivas = [
    { id: 1, student: 'John Doe', subject: 'Mathematics', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, student: 'Jane Smith', subject: 'Physics', time: '11:30 AM', status: 'Scheduled' },
    { id: 3, student: 'Bob Johnson', subject: 'Chemistry', time: '2:00 PM', status: 'Scheduled' },
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
            <Link href="/teacher/classes">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaUsers />
                My Classes
              </div>
            </Link>
            <Link href="/teacher/materials">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaBook />
                Materials
              </div>
            </Link>
            <Link href="/teacher/schedule">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaCalendarAlt />
                Schedule
              </div>
            </Link>
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
            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Prof. Sarah Wilson</div>
                <div className="text-xs text-gray-500">Teacher ID: T5678</div>
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                SW
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
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Total Students</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <FaBrain className="text-2xl text-green-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">79</div>
              <div className="text-sm text-gray-600">Vivas This Week</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <FaBook className="text-2xl text-purple-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Active Classes</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <FaChartLine className="text-2xl text-orange-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">81%</div>
              <div className="text-sm text-gray-600">Avg Class Score</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Class Performance</h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={classPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="class" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgScore" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Weekly Viva Activity</h3>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={weeklyActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="vivas" stroke="#0ea5e9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Vivas & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Vivas</h3>
              <div className="space-y-3">
                {upcomingVivas.map((viva) => (
                  <div key={viva.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <div>
                      <div className="font-medium text-gray-900">{viva.student}</div>
                      <div className="text-sm text-gray-600">{viva.subject} • {viva.time}</div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {viva.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                  <FaPlus />
                  Schedule Viva
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                  <FaBook />
                  Upload Material
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                  <FaChartLine />
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
