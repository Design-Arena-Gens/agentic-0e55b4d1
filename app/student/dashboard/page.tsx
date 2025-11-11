'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBrain, FaBook, FaChartLine, FaRobot, FaClipboardCheck, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const performanceData = [
    { name: 'Week 1', score: 65 },
    { name: 'Week 2', score: 72 },
    { name: 'Week 3', score: 78 },
    { name: 'Week 4', score: 85 },
  ]

  const subjectData = [
    { subject: 'Math', score: 85 },
    { subject: 'Physics', score: 78 },
    { subject: 'Chemistry', score: 92 },
    { subject: 'Biology', score: 88 },
  ]

  const recentVivas = [
    { id: 1, subject: 'Mathematics', score: 85, date: '2025-03-10', status: 'Completed' },
    { id: 2, subject: 'Physics', score: 78, date: '2025-03-08', status: 'Completed' },
    { id: 3, subject: 'Chemistry', score: 92, date: '2025-03-05', status: 'Completed' },
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
            <Link href="/student/viva">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaBrain />
                Start Viva
              </div>
            </Link>
            <Link href="/student/materials">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaBook />
                Study Materials
              </div>
            </Link>
            <Link href="/student/practice">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaClipboardCheck />
                Practice Tests
              </div>
            </Link>
            <Link href="/student/tutor">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer">
                <FaRobot />
                AI Tutor
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
            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">Student ID: 12345</div>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                JD
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
                  <FaBrain className="text-2xl text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-600">Vivas Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <FaChartLine className="text-2xl text-green-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <FaBook className="text-2xl text-purple-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-sm text-gray-600">Study Materials</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <FaClipboardCheck className="text-2xl text-orange-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">Practice Tests</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Scores</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={subjectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Vivas */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Vivas</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Subject</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Score</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentVivas.map((viva) => (
                    <tr key={viva.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{viva.subject}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {viva.score}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{viva.date}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {viva.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
