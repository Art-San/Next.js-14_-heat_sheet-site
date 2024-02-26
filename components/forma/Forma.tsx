// 'use client'
import React from 'react'

const Forma: React.FC = () => {
  return (
    <>
      <div className="flex w-1000px justify-center">
        <form action=" ">
          <div className="flex flex-col w-[400px] ml-auto mr-auto mt-10">
            {/* <div className="flex flex-col md:flex-row md:items-center gap-2 md:space-x-4"> */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                className="border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Почта</label>
              <input
                type="email"
                id="email"
                className="border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="flex  space-y-2 gap-2">
              <input
                type="checkbox"
                id="checkbox"
                className="border border-gray-400 p-2 rounded"
              />
              <label htmlFor="checkbox">Чек-бокс</label>
            </div>
            <div className=" flex flex-col">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Forma
