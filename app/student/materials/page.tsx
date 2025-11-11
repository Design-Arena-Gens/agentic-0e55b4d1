'use client'

import Link from 'next/link'
import { FaArrowLeft, FaBook, FaFileAlt, FaVideo, FaDownload, FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export default function MaterialsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const materials = [
    { id: 1, title: 'Introduction to Calculus', type: 'pdf', subject: 'Mathematics', size: '2.4 MB', date: '2025-03-10' },
    { id: 2, title: 'Physics Motion Laws', type: 'video', subject: 'Physics', size: '45 MB', date: '2025-03-09' },
    { id: 3, title: 'Organic Chemistry Notes', type: 'pdf', subject: 'Chemistry', size: '1.8 MB', date: '2025-03-08' },
    { id: 4, title: 'Cell Biology Overview', type: 'document', subject: 'Biology', size: '3.2 MB', date: '2025-03-07' },
    { id: 5, title: 'Data Structures Tutorial', type: 'video', subject: 'Computer Science', size: '120 MB', date: '2025-03-06' },
    { id: 6, title: 'Linear Algebra Guide', type: 'pdf', subject: 'Mathematics', size: '4.1 MB', date: '2025-03-05' },
  ]

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || material.type === filterType
    return matchesSearch && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FaFileAlt className="text-red-500" />
      case 'video':
        return <FaVideo className="text-blue-500" />
      case 'document':
        return <FaBook className="text-green-500" />
      default:
        return <FaFileAlt className="text-gray-500" />
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Materials</h1>
              <p className="text-gray-600">Access your learning resources</p>
            </div>
            <FaBook className="text-5xl text-primary-600" />
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterType === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('pdf')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterType === 'pdf'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                PDFs
              </button>
              <button
                onClick={() => setFilterType('video')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterType === 'video'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Materials List */}
          <div className="space-y-3">
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {getTypeIcon(material.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{material.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>{material.subject}</span>
                      <span>•</span>
                      <span>{material.size}</span>
                      <span>•</span>
                      <span>{material.date}</span>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition">
                  <FaDownload />
                </button>
              </div>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="text-center py-12">
              <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No materials found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
