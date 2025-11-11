'use client'

import Link from 'next/link'
import { FaArrowLeft, FaUsers, FaPlus, FaEye } from 'react-icons/fa'

export default function ClassesPage() {
  const classes = [
    {
      id: 1,
      name: 'Mathematics A',
      subject: 'Mathematics',
      students: 38,
      avgScore: 82,
      schedule: 'Mon, Wed, Fri - 9:00 AM'
    },
    {
      id: 2,
      name: 'Mathematics B',
      subject: 'Mathematics',
      students: 42,
      avgScore: 78,
      schedule: 'Tue, Thu - 10:30 AM'
    },
    {
      id: 3,
      name: 'Physics 101',
      subject: 'Physics',
      students: 35,
      avgScore: 85,
      schedule: 'Mon, Wed - 2:00 PM'
    },
    {
      id: 4,
      name: 'Chemistry Advanced',
      subject: 'Chemistry',
      students: 41,
      avgScore: 80,
      schedule: 'Tue, Thu, Fri - 11:00 AM'
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-50'
    if (score >= 75) return 'text-yellow-600 bg-yellow-50'
    return 'text-red-600 bg-red-50'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/teacher/dashboard">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <FaArrowLeft />
            Back to Dashboard
          </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Classes</h1>
              <p className="text-gray-600">Manage your classes and students</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
              <FaPlus />
              New Class
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{classes.length}</div>
              <div className="text-sm text-blue-700">Total Classes</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {classes.reduce((acc, c) => acc + c.students, 0)}
              </div>
              <div className="text-sm text-green-700">Total Students</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(classes.reduce((acc, c) => acc + c.avgScore, 0) / classes.length)}%
              </div>
              <div className="text-sm text-purple-700">Overall Average</div>
            </div>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {cls.name}
                    </h3>
                    <p className="text-sm text-gray-600">{cls.subject}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(cls.avgScore)}`}>
                    {cls.avgScore}% avg
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaUsers className="text-primary-600" />
                    <span>{cls.students} students</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    📅 {cls.schedule}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
                    <FaEye className="inline mr-2" />
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                    ⚙️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
