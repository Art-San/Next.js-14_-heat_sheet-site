'use client'
import React, { FormEvent, useState } from 'react'
import { Send, User, Mail, CheckSquare } from 'lucide-react'

function Test() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subscribe = formData.get('subscribe')

    if (name && email) {
      setStatus('success')
      setMessage(
        `Form submitted successfully! ${
          subscribe ? 'You are subscribed to newsletter.' : ''
        }`
      )
      e.currentTarget.reset()
    } else {
      setStatus('error')
      setMessage('Please fill in all fields')
    }
  }

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {/* <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4"> */}
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Contact Form</h1>
            <p className="text-gray-500 mt-2">Please fill in your details</p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="relative">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="w-5 h-5 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <CheckSquare className="absolute left-0 top-0 text-blue-600 h-5 w-5 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <label
                htmlFor="subscribe"
                className="text-sm text-gray-600 cursor-pointer select-none"
              >
                Subscribe to our newsletter
              </label>
            </div>
          </div>

          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                status === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Submit
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Test
