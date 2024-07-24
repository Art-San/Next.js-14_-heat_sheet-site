'use client'
import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
import ImageModal from '@/components/ImageModal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { prevState_1 } from '@/lib/data/hooks/useEffect/data'
import { prevStateExample } from '@/lib/data/hooks/useRef/data'

const PrevStateExample = () => {
  const prevState = useRef('')
  const [otherState, setOtherState] = useState('false')
  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === 'false' ? 'true' : 'false'))
  }

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex gap-5 items-center">
        <CardWrapper>
          <SmallTitle>Предыдущее состояние</SmallTitle>
          <div className=" flex flex-col gap-1 m-2 items-center">
            <p className="font-bold text-gray-800">
              Prev State:{' '}
              <span className=" text-red-700">{prevState.current}</span>
            </p>
            <p className="font-bold text-gray-800">
              Corrent State: <span className="text-blue-700">{otherState}</span>
            </p>
            <Button variant={'positive'} size={'sm'} onClick={toggleOtherState}>
              жми
            </Button>
            <h6 className=" text-orange-600">работает совмемтно с useRef</h6>
          </div>
        </CardWrapper>
        <div>
          <ImageModal
            path="/images/useEffect_PrevStateExample.png"
            path500="/images/useState_500.png"
          />
        </div>
      </div>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={prevStateExample} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default PrevStateExample
