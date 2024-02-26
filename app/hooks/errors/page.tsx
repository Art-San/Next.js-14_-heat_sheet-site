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
        <div className=" flex flex-col mt-5">
          {/* <Counter /> */}

          {/* <Count /> */}
          {/* <Click /> */}
          {/* <ExampleBad /> */}
          {/* <ExampleColor /> */}
          {/* <Example4 /> */}
        </div>
      </div>
    </>
  )
}

export default errorHooks
