'use client'
import { useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { childAccess } from '@/lib/data/hooks/useRef/data'
import { Button } from '@/components/ui/button'
import CardWrapper from '@/components/common/Card'

const ChildAccess = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isValueSet, setIsValueSet] = useState(false)

  const handleSend = () => {
    if (inputRef.current) {
      // Добавлена проверка на наличие ссылки
      const file = inputRef.current.files
      console.log(file)
    }
  }

  return (
    <div className=" flex flex-col items-center">
      <div className=" flex  w-1/2">
        <CardWrapper>
          <h2>Получения доступа к потомку Получения доступа к потомку</h2>
          <label htmlFor="file">Выберите файл</label>
          <input
            ref={inputRef}
            type="file"
            onChange={() => setIsValueSet(true)}
          />
          <Button
            className=" bg-green-400 "
            onClick={handleSend}
            disabled={!isValueSet}
          >
            Отправить файл
          </Button>
        </CardWrapper>
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={childAccess} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ChildAccess
