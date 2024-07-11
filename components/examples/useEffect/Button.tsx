'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const Button1 = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter((p) => p + 1)

  useEffect(() => {
    console.log(3, `effect ${counter}`)
    return () => {
      console.log(4, `clear effect ${counter}`)
    }
  }, [counter])

  useLayoutEffect(() => {
    console.log(2, `before paint effect ${counter}`)
  }, [counter])

  console.log(1, `render ${counter}`)
  return <Button onClick={increment}>increment {counter}</Button>
}

export default Button1
