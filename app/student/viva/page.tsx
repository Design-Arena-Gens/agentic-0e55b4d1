'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBrain, FaMicrophone, FaPaperPlane, FaArrowLeft } from 'react-icons/fa'

export default function VivaPage() {
  const [isStarted, setIsStarted] = useState(false)
  const [subject, setSubject] = useState('')
  const [difficulty, setDifficulty] = useState('medium')
  const [isRecording, setIsRecording] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [messages, setMessages] = useState<Array<{role: 'ai' | 'user', text: string}>>([])
  const [questionCount, setQuestionCount] = useState(0)

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English']

  const handleStart = () => {
    if (subject) {
      setIsStarted(true)
      askQuestion()
    }
  }

  const askQuestion = () => {
    const questions = [
      'Can you explain the concept of derivatives in calculus?',
      'What is Newton\'s second law of motion?',
      'How does photosynthesis work in plants?',
      'Explain the difference between arrays and linked lists.',
      'What is the Pythagorean theorem and when is it used?'
    ]
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    setCurrentQuestion(randomQuestion)
    setMessages(prev => [...prev, { role: 'ai', text: randomQuestion }])
    setQuestionCount(prev => prev + 1)
  }

  const handleSubmitAnswer = () => {
    if (answer.trim()) {
      setMessages(prev => [...prev, { role: 'user', text: answer }])

      // Simulate AI feedback
      setTimeout(() => {
        const feedbacks = [
          'Good answer! Let me ask you a follow-up question.',
          'That\'s partially correct. Can you elaborate more?',
          'Excellent explanation! Moving to the next topic.',
          'Interesting perspective. Let\'s explore this further.'
        ]
        const feedback = feedbacks[Math.floor(Math.random() * feedbacks.length)]
        setMessages(prev => [...prev, { role: 'ai', text: feedback }])

        if (questionCount < 5) {
          setTimeout(() => askQuestion(), 1500)
        } else {
          setMessages(prev => [...prev, {
            role: 'ai',
            text: 'Great job! You\'ve completed the viva. Your score: 85/100'
          }])
        }
      }, 1000)

      setAnswer('')
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setAnswer('This is a sample transcribed answer from voice input.')
      }, 3000)
    }
  }

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/student/dashboard">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
              <FaArrowLeft />
              Back to Dashboard
            </button>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FaBrain className="text-3xl text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Start AI Viva</h1>
              <p className="text-gray-600">Configure your viva examination</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Choose a subject...</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setDifficulty('easy')}
                    className={`px-4 py-3 rounded-lg font-medium transition ${
                      difficulty === 'easy'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Easy
                  </button>
                  <button
                    onClick={() => setDifficulty('medium')}
                    className={`px-4 py-3 rounded-lg font-medium transition ${
                      difficulty === 'medium'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => setDifficulty('hard')}
                    className={`px-4 py-3 rounded-lg font-medium transition ${
                      difficulty === 'hard'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Hard
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">What to expect:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• You'll be asked 5-10 questions</li>
                  <li>• Answer using text or voice</li>
                  <li>• AI will provide instant feedback</li>
                  <li>• Session typically lasts 10-15 minutes</li>
                </ul>
              </div>

              <button
                onClick={handleStart}
                disabled={!subject}
                className="w-full py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Viva Examination
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{subject} Viva</h2>
                <p className="text-primary-100">Question {questionCount} of 5</p>
              </div>
              <div className="text-right">
                <div className="text-sm">Difficulty</div>
                <div className="text-lg font-bold capitalize">{difficulty}</div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
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
                      <FaBrain className="text-primary-600" />
                      <span className="text-xs font-semibold text-primary-600">AI Examiner</span>
                    </div>
                  )}
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-6 bg-white">
            <div className="flex gap-3">
              <button
                onClick={toggleRecording}
                className={`p-4 rounded-lg transition ${
                  isRecording
                    ? 'bg-red-600 text-white animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <FaMicrophone className="text-xl" />
              </button>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                placeholder={isRecording ? 'Listening...' : 'Type your answer or use voice...'}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isRecording}
              />
              <button
                onClick={handleSubmitAnswer}
                disabled={!answer.trim() || isRecording}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {questionCount >= 5 && (
          <div className="mt-6 text-center">
            <Link href="/student/dashboard">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                View Results
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
