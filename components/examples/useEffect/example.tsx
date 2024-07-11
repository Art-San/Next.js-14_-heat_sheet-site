'use client'
import { Button } from '@/components/ui/button'
import { FC, useEffect, useLayoutEffect, useState } from 'react'
import Button1 from './Button'
import React from 'react'

// function But(): React.ReactElement {
//    const [counter, setCounter] = useState(1)
//   const increment = () => setCounter((p) => p + 1)

//   useEffect(() => {
//     console.log(`effect ${counter}`)
//     return () => {
//     console.log(`clear effect ${counter}`)
//     }
//   }, [counter])

//   useLayoutEffect(() => {
//         console.log(` before paint effect ${counter}`)

//   }, [counter])

//   console.log(`render ${counter}`)
// }

const Example = () => {
  const [showButton, setShowButton] = useState(true)
  return (
    <div className=" flex gap-2">
      <Button onClick={() => setShowButton((s) => !s)}>toggle</Button>
      {showButton && <Button1 />}
    </div>
  )
}

export default Example
