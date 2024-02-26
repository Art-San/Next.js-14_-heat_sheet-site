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
import Counter from '@/components/examples/useState/Counter'

// import Count from '@/components/examples/useState/Count'
// import Click from '@/components/examples/useState/Click'
// import ExampleBad from '@/components/examples/useState/ExampleBad'
// import ExampleColor from '@/components/examples/useState/ExampleColor'
// import Example4 from '@/components/examples/useState/Example4'

const useState = () => {
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
                <code>useState</code> возвращает кортеж (массив), в котором
                содержится значение состояния и функция для его изменения. По
                соглашению название функции изменения состояния начинается с{' '}
                <code>set</code>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex flex-col mt-5">
          <Counter />

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

export default useState
