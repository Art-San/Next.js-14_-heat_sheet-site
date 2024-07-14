'use client'
import { Button } from '@/components/ui/button'
import { useEffect, useLayoutEffect, useState } from 'react'

import React from 'react'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { renderCount_1 } from '@/lib/data/hooks/useEffect/data'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

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

const RenderCountExample_1 = () => {
  const [showButton, setShowButton] = useState(true)
  return (
    <div className="flex flex-col gap-2 w-[35rem]">
      <h1 className=" text-lg font-semibold text-blue-400">Счетчик</h1>
      <div className="flex  justify-between gap-2">
        <Button onClick={() => setShowButton((s) => !s)}>toggle</Button>
        {showButton && <But />}
      </div>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={renderCount_1} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default RenderCountExample_1
