import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'
import Title from '@/components/typografy/Title'
import Forma from '@/components/examples/elements/forma/Forma-formdata'
import Test from '@/components/examples/elements/forma/test'

const PaginationPage = () => {
  return (
    <div className=" flex flex-col w-full items-center">
      <Title>Форма</Title>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            Информация
          </AccordionTrigger>
          <AccordionContent className="text-[18px] w-2/3 mx-auto">
            <p className=" font-semibold">Простая форма</p>
            Использована new FormData
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col ">
        <Subtitle>Пример</Subtitle>
        <div className="flex flex-col items-center">
          <Forma />
        </div>
      </div>
    </div>
  )
}
export default PaginationPage
