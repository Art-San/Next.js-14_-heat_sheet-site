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
import { items } from '@/lib/errorData/objData'

const errorHooks = () => {
  const { fetch, form, price } = items
  console.log('itemsError', fetch[0])
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
            <CodeHighlighting data={fetch[0].code} variant="error" />
            <div className="ml-[20px] w-[350px]">
              <p>{fetch[0]?.desc1}</p>
              <p>{fetch[0]?.desc2}</p>
              <p>{fetch[0]?.desc3}</p>
            </div>
          </div>
          <div className="">
            <CodeHighlighting data={fetch[1].code} variant="first" />
            <div className="ml-[20px] w-[350px]">
              <p>{fetch[1]?.desc1}</p>
              <p>{fetch[1]?.desc2}</p>
              <p>{fetch[1]?.desc3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default errorHooks

{
  /* <div className="">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex gap-4 mt-5">

          <div className=" ">
            <CodeHighlighting data={fetch[0].code} variant="error" />
            <div className="ml-[20px] w-[350px]">
              <p>{fetch[0]?.desc1}</p>
              <p>{fetch[0]?.desc2}</p>
              <p>{fetch[0]?.desc3}</p>
            </div>
          </div>
          <div className="">
            <CodeHighlighting data={fetch[1].code} variant="first" />
            <div className="ml-[20px] w-[350px]">
              <p>{fetch[1]?.desc1}</p>
              <p>{fetch[1]?.desc2}</p>
              <p>{fetch[1]?.desc3}</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 mt-5">
          <div className=" ">
            <CodeHighlighting data={price[0].code} variant="error" />
            <div className="ml-[20px] w-[350px]">
              <p>{price[0]?.desc1}</p>
              <p>{price[0]?.desc2}</p>
              <p>{price[0]?.desc3}</p>
            </div>
          </div>
          <div className="">
            <CodeHighlighting data={price[1].code} variant="first" />
            <div className="ml-[20px] w-[350px]">
              <p>{price[1]?.desc1}</p>
              <p>{price[1]?.desc2}</p>
              <p>{price[1]?.desc3}</p>
            </div>
          </div>
        </div>
      </div> */
}
