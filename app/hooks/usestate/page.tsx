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
import Count from '@/components/examples/useState/Count'

import ExampleBad from '@/components/examples/useState/ExampleBad'
import ExampleColor from '@/components/examples/useState/ExampleColor'
import Example4 from '@/components/examples/useState/Example4'

const useState = () => {
  return (
    <div className=" flex flex-col w-full items-center">
      <Title>UseState</Title>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            Информация
          </AccordionTrigger>
          <AccordionContent className="text-[18px] w-2/3 mx-auto">
            <code>useState</code> возвращает кортеж (массив), в котором
            содержится значение состояния и функция для его изменения. По
            соглашению название функции изменения состояния начинается с{' '}
            <code>set</code>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col ">
        <Subtitle>Примеры</Subtitle>
        <div className="flex flex-col items-center gap-20">
          <Counter />
          <Count />
          <ExampleBad />
          <ExampleColor />
          <Example4 />
        </div>
      </div>
    </div>
  )
}

export default useState
