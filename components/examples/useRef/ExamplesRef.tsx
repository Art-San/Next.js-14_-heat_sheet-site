'use client'
import CardWrapper from '@/components/common/Card'
import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { examplesRef } from '@/lib/data/hooks/useRef/data'

export default function ExamplesRef() {
  return (
    <div className="flex flex-col items-center">
      <h2>Interval example</h2>
      <p>IntervalExample: false</p>
      <p>если true, то будет идти счетчик</p>
      <IntervalExample />
    </div>
  )
}

// Используем рефы для передачи коллбека в эффект
const useEffectEvent = (callback: any) => {
  const ref = useRef(callback)

  ref.current = callback

  return useCallback((...args: any) => {
    ref.current(...args)
  }, [])
}

const useRefValue = (value: any) => {
  const ref = useRef(value)
  ref.current = value
  return ref
}

function useInterval(interval: any, enabled: any, onTick: any) {
  const onTickEvent = useEffectEvent(onTick)
  useEffect(() => {
    if (!enabled) return
    const i = setInterval(() => {
      // onTick()
      onTickEvent()
    }, interval)
    return () => clearInterval(i)
  }, [interval, enabled, onTickEvent])
}

function IntervalExample() {
  const [counter, setCounter] = useState(0)
  const [, rerender] = useReducer((s) => s + 1, 0)
  useInterval(1000, false, () => {
    console.log(counter)
    setCounter((s) => s + 1)
  })

  console.log('rerender')

  return (
    <div className="flex flex-col w-1/2">
      <CardWrapper>
        <div>Counter: {counter}</div>
        <Button size={'custom'} variant={'positive'} onClick={() => rerender()}>
          increment
        </Button>
      </CardWrapper>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={examplesRef} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
