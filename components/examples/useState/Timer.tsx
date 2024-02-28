'use client'

import { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1)
    }, 60000)
  }, [])

  return <p className="text-red-600 font-semibold">Count: {count}</p>
}
export default Timer
