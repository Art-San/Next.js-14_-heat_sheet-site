'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const CounterButtons = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
    setCount((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div className=" flex flex-col">
      <p className="text-red-600 font-semibold">Count: {count}</p>
      <Button size={'costom'} className=" bg-red-600" onClick={handleIncrement}>
        плюс
      </Button>
      <Button size={'costom'} variant={'positive'} onClick={handleDecrement}>
        минус
      </Button>
    </div>
  )
}

export default CounterButtons
