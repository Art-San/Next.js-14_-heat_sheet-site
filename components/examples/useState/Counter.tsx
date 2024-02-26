'use client'
// import Screens from '@/components/common/Screens'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import CardWrapper from '../../common/Card'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { codeUseState } from '@/lib/data/useState/data'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    // setCount(count + 1) // эти два
    // setCount(count + 1) // с хлопнутся
    setCount((prevState) => prevState + 1)
    setCount((prevState) => prevState + 1)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <CodeHighlighting data={codeUseState} />
      </div>
      <div className=" flex">
        <CardWrapper>
          <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <Separator className="mt-4  bg-slate-300" />
          <p className="text-red-600 font-semibold">Count: {count}</p>

          <div className=" flex flex-col">
            <Button
              size={'costom'}
              variant={'positive'}
              onClick={handleDecrement}
            >
              минус
            </Button>
            <Button
              size={'costom'}
              variant={'warning'}
              onClick={handleIncrement}
            >
              плюс
            </Button>
          </div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Counter
