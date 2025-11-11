'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaRobot, FaPaperPlane } from 'react-icons/fa'

export default function TutorPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([
    {
      role: 'ai',
      text: 'Hello! I\'m your AI tutor. I can help you with any subject - Mathematics, Physics, Chemistry, Biology, Computer Science, and more. What would you like to learn today?'
    }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { role: 'user', text: input }])

      // Simulate AI response
      setTimeout(() => {
        const responses = [
          'That\'s a great question! Let me explain...',
          'I can help you with that. Here\'s what you need to know...',
          'Excellent topic! Let\'s break this down step by step...',
          'Good thinking! The concept you\'re asking about involves...'
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setMessages(prev => [...prev, {
          role: 'ai',
          text: randomResponse + ' ' + getDummyAnswer()
        }])
      }, 1000)

      setInput('')
    }
  }

  const getDummyAnswer = () => {
    const answers = [
      'In mathematics, this concept is fundamental to understanding calculus. The key is to remember that derivatives measure the rate of change.',
      'In physics, Newton\'s laws govern motion. The first law states that an object at rest stays at rest unless acted upon by an external force.',
      'In chemistry, chemical bonds form when atoms share or transfer electrons. Covalent bonds involve sharing, while ionic bonds involve transfer.',
      'In biology, cells are the basic unit of life. They contain organelles that perform specific functions to keep the cell alive.',
      'In computer science, algorithms are step-by-step procedures for solving problems. Time complexity measures how long an algorithm takes to run.'
    ]
    return answers[Math.floor(Math.random() * answers.length)]
  }

  const suggestedQuestions = [
    'Explain derivatives in calculus',
    'What is Newton\'s second law?',
    'How do covalent bonds work?',
    'What is photosynthesis?',
    'Explain binary search algorithm'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/student/dashboard">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <FaArrowLeft />
            Back to Dashboard
          </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <FaRobot className="text-2xl text-primary-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AI Tutor</h1>
                <p className="text-primary-100">Your 24/7 learning assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-900 shadow-sm'
                  }`}
                >
                  {msg.role === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <FaRobot className="text-primary-600" />
                      <span className="text-xs font-semibold text-primary-600">AI Tutor</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(question)}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your studies..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by AI • Available 24/7 • Multi-subject support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
