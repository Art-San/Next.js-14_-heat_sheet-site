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
import CardWrapper from '@/components/common/Card'

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
    <div className="flex flex-col items-center ">
      <div className="flex w-1/2">
        <CardWrapper>
          <p className=" text-center">
            Переменная которая не приводит к обновлению компонента
          </p>
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
        </CardWrapper>
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
