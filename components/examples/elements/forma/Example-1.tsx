'use client'
import React from 'react'

const Example1: React.FC = () => {
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // const text = String(formData.get('text') ?? '')

    const name = formData.get('name')
    const email = formData.get('email')
    const subscribe = formData.get('subscribe')

    console.log(12, name, email, subscribe)

    e.currentTarget.reset()
  }

  return (
    <>
      <div className="flex w-1000px justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[400px] ml-auto mr-auto mt-10">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Почта</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-400 p-2 rounded"
                required
              />
            </div>
            <div className="flex  space-y-2 gap-2">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
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

export default Example1
