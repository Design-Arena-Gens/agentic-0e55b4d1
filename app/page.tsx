'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBrain, FaChalkboardTeacher, FaChartLine, FaUsers, FaRobot, FaGraduationCap } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'AI Viva Exams',
      description: 'Intelligent oral examinations powered by advanced AI'
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: 'Smart Classroom',
      description: 'Complete classroom management for teachers and students'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Real-time Analytics',
      description: 'Track progress and performance with detailed insights'
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: 'AI Tutor',
      description: '24/7 AI-powered chat tutor for personalized learning'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Multi-Role System',
      description: 'Separate dashboards for students, teachers, and admins'
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: 'Study Materials',
      description: 'AI-generated notes and question banks'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <FaBrain className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">AI Viva</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>
            <div className="flex gap-4">
              <Link href="/login">
                <button className="px-4 py-2 text-primary-600 hover:text-primary-700 transition">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            AI-Powered Learning Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Experience the future of education with AI viva exams, smart classrooms,
            and personalized learning experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/signup">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg text-lg hover:bg-primary-700 transition shadow-lg">
                Get Started Free
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-lg text-lg hover:bg-gray-50 transition shadow-lg">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About AI Viva
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            AI Viva is a comprehensive learning and assessment platform that combines
            the power of artificial intelligence with modern classroom management.
            We provide AI-powered viva examinations, intelligent tutoring, real-time
            analytics, and a complete suite of tools for students, teachers, and administrators.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Viva Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? Want to learn more? Contact us today!
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
              <button className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg text-lg hover:bg-primary-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaBrain className="text-3xl text-primary-400" />
            <span className="text-2xl font-bold">AI Viva</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering education through artificial intelligence
          </p>
          <div className="text-sm text-gray-500">
            © 2025 AI Viva. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
