'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import Title from '@/components/typografy/Title'
import { items } from '@/lib/data/errorData/objData'
import CodeTitle from '@/components/codeHighlighting/CodeTitle'

const errorHooks = () => {
  const { fetch, price, user, form } = items
  return (
    <div className=" flex flex-col items-center">
      <Title>UseState & UseEffect</Title>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            Информация
          </AccordionTrigger>
          <AccordionContent className="text-[18px] w-2/3 mx-auto">
            Подходы, которые приводят к ошибкам и вариант исправления. Нe
            которые примеры из видео{' '}
            <a
              href="https://www.youtube.com/watch?v=-7-M82_Nh_M"
              className=" text-blue-700"
            >
              ссылка
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <CodeTitle data={fetch} />
      <CodeTitle data={price} />
      <CodeTitle data={user} />
      <CodeTitle data={form} />
    </div>
  )
}

export default errorHooks
