import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'
import Title from '@/components/typografy/Title'
import Pagination from '@/components/examples/elements/pagination/Pagination'
const PaginationPage = () => {
  return (
    <div className=" flex flex-col w-full items-center">
      <Title>Pagination</Title>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            Информация
          </AccordionTrigger>
          <AccordionContent className="text-[18px] w-2/3 mx-auto">
            <p className=" font-semibold">Пагинация простая</p>
            Использована библиотека axios и tanstack react-query
            <code>set</code>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col ">
        <Subtitle>Пример</Subtitle>
        <div className="flex flex-col items-center">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
export default PaginationPage
