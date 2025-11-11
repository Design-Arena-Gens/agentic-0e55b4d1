'use client'

import Link from 'next/link'
import { FaArrowLeft, FaClipboardCheck, FaClock, FaQuestionCircle } from 'react-icons/fa'

export default function PracticePage() {
  const practiceTests = [
    {
      id: 1,
      title: 'Mathematics Quiz',
      subject: 'Mathematics',
      questions: 20,
      duration: '30 min',
      difficulty: 'Medium',
      completed: true,
      score: 85
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      subject: 'Physics',
      questions: 15,
      duration: '25 min',
      difficulty: 'Easy',
      completed: false,
      score: null
    },
    {
      id: 3,
      title: 'Chemistry Advanced',
      subject: 'Chemistry',
      questions: 25,
      duration: '40 min',
      difficulty: 'Hard',
      completed: true,
      score: 92
    },
    {
      id: 4,
      title: 'Biology Cell Structure',
      subject: 'Biology',
      questions: 18,
      duration: '30 min',
      difficulty: 'Medium',
      completed: false,
      score: null
    },
    {
      id: 5,
      title: 'Data Structures',
      subject: 'Computer Science',
      questions: 22,
      duration: '35 min',
      difficulty: 'Hard',
      completed: true,
      score: 78
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/student/dashboard">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <FaArrowLeft />
            Back to Dashboard
          </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Tests</h1>
              <p className="text-gray-600">Test your knowledge and prepare for vivas</p>
            </div>
            <FaClipboardCheck className="text-5xl text-primary-600" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {practiceTests.filter(t => t.completed).length}
              </div>
              <div className="text-sm text-blue-700">Tests Completed</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(
                  practiceTests
                    .filter(t => t.completed && t.score)
                    .reduce((acc, t) => acc + (t.score || 0), 0) /
                    practiceTests.filter(t => t.completed).length
                )}%
              </div>
              <div className="text-sm text-green-700">Average Score</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {practiceTests.filter(t => !t.completed).length}
              </div>
              <div className="text-sm text-purple-700">Available Tests</div>
            </div>
          </div>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceTests.map((test) => (
              <div
                key={test.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {test.title}
                    </h3>
                    <p className="text-sm text-gray-600">{test.subject}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      test.difficulty
                    )}`}
                  >
                    {test.difficulty}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaQuestionCircle className="text-primary-600" />
                    <span>{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-primary-600" />
                    <span>{test.duration}</span>
                  </div>
                </div>

                {test.completed ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-800">
                          Completed
                        </span>
                        <span className="text-lg font-bold text-green-600">
                          {test.score}%
                        </span>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                      Review Answers
                    </button>
                  </div>
                ) : (
                  <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
                    Start Test
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
