'use client'
import { Button } from '@/components/ui/button'
import { FC, useEffect, useLayoutEffect, useState } from 'react'
import Button1 from './Button'
import React from 'react'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { first } from '@/lib/data/hooks/data'

function But(): React.ReactElement {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter((p) => p + 1)

  useEffect(() => {
    console.log(3, `effect ${counter}`)
    return () => {
      console.log(4, `clear effect ${counter}`)
    }
  }, [counter])

  // отслеживаем приблизительный момент рендера браузера
  useLayoutEffect(() => {
    console.log(2, `before paint effect ${counter}`)
  }, [counter])

  console.log(1, `render ${counter}`)

  return <Button onClick={increment}>increment {counter}</Button>
}

const Example = () => {
  const [showButton, setShowButton] = useState(true)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button onClick={() => setShowButton((s) => !s)}>toggle</Button>
        {showButton && <But />}
      </div>
      <div className="">
        <CodeHighlighting data={first} variant={'medium'} />
      </div>
    </div>
  )
}

export default Example
