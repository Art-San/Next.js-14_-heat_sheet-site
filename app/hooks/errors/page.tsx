// const page = () => {
//   return <div>Use State</div>
// }
// export default page
'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'

import Title from '@/components/typografy/Title'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { items } from '@/lib/errorData/objData'
import CodeTitle from '@/components/codeHighlighting/CodeTitle'

const errorHooks = () => {
  const { fetch, price, user, form } = items
  // console.log('itemsError', items.fetch)
  return (
    <>
      <Title>UseState</Title>

      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-2">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            Информация
          </AccordionTrigger>
          <AccordionContent className="text-[18px]">
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
    </>
  )
}

export default errorHooks
