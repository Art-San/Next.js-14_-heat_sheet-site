'use client'
import CardWrapper from '@/components/common/Card'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { exerciseUseRef } from '@/lib/data/hooks/useRef/data'
import Subtitle from '@/components/typografy/Subtitle'

const ExerciseUseRef = () => {
  const blockRef = useRef<HTMLDivElement>(null)
  console.log('blokRef', blockRef)
  const handleClick = () => {
    if (blockRef.current) {
      // Приведение типа к HTMLElement для доступа к свойству innerText
      const secondChild = blockRef.current.children[1] as HTMLElement

      secondChild.innerText = 'Text-2'
      blockRef.current.style.width = '150px'
      blockRef.current.style.height = '80px'
    }
  }
  return (
    <div className="flex flex-col items-center ">
      <Subtitle>Упражнение</Subtitle>
      <div className="flex w-1/2">
        <CardWrapper>
          <p className="mt-3">
            У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку,
            при нажатии которой изменятся следующие свойства:
          </p>
          <ul>
            <li>Изменится содержимое блока на &quot;text&quot;</li>
            <li>высота и ширина станут равны 150 и 80 соответственно</li>
          </ul>
          <div
            ref={blockRef}
            className="bg-red-400  rounded"
            style={{
              height: 40,
              width: 60,
              color: 'white'
            }}
          >
            <small className=" mx-1">Блок-1</small>
            <small>Блок-2</small>
          </div>
          <Button
            size={'custom'}
            variant={'positive'}
            className=""
            onClick={handleClick}
          >
            Жми
          </Button>
        </CardWrapper>
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={exerciseUseRef} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ExerciseUseRef
