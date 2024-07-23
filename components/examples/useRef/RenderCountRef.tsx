'use client'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { renderCountRef } from '@/lib/data/hooks/useRef/data'

interface CounterState {
  counter: number
}

const RenderCountRef = () => {
  const [counter, setCounter] = useState(0)

  const ref = useRef<CounterState | null>(null)

  useEffect(() => {
    if (!ref.current) {
      ref.current = { counter: 0 }
    }
  }, [])

  return (
    <div className="flex flex-col justify-center ">
      <p className=" text-center">
        Переменная которая не приводит к обновлению компонента
      </p>
      <div className="flex flex-col items-center gap-1">
        <Button
          size={'custom'}
          variant={'positive'}
          onClick={() => {
            if (ref.current) {
              ref.current.counter++
            }
          }}
        >
          На меня нажали {counter} раз.
        </Button>

        <Button
          className=" bg-orange-500"
          size={'custom'}
          onClick={() => setCounter(ref.current?.counter || 0)}
        >
          Обновить
        </Button>
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={renderCountRef} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default RenderCountRef
