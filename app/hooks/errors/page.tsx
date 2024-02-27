// const page = () => {
//   return <div>Use State</div>
// }
// export default page

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
import {
  bugFixed,
  errorData,
  errorPrice,
  fixErrorPrice
} from '@/lib/errorData/data'

const errorHooks = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Title>UseState</Title>
        </div>

        <div className="">
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[24px]">
                Информация
              </AccordionTrigger>
              <AccordionContent className="text-[18px]">
                <code>Error</code> Подходы, которые приводят к ошибкам и вариант
                исправления <code>set</code>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex gap-4 mt-5">
          <div className=" ">
            <CodeHighlighting data={errorData} variant="error" />
          </div>
          <div className="">
            <CodeHighlighting data={bugFixed} variant="first" />
          </div>
          {/* <CodeHighlighting data={errorPrice} variant="error" /> */}
          {/* <CodeHighlighting data={fixErrorPrice} variant="first" /> */}
        </div>
      </div>
    </>
  )
}

export default errorHooks
