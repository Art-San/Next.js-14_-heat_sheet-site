'use client'
import React, { useState } from 'react'

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      <div className="z-10">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 fixed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[200px] "
        >
          Открыть меню
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 p-5 shadow-md overflow-y-auto">
          <ul className="list-none">
            <li className="py-2 border-b border-gray-300">Пункт 1</li>
            <li className="py-2 border-b border-gray-300">Пункт 2</li>
            <li className="py-2 border-b border-gray-300">Пункт 3</li>
            <li className="py-2 border-b border-gray-300">Пункт 4</li>
            <li className="py-2 border-b border-gray-300">Пункт 5</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SidebarMenu
