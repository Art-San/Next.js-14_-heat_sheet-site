import React from 'react'
import { Separator } from '@/components/ui/separator'
import Subtitle from '@/components/typografy/Subtitle'
import Title from '@/components/typografy/Title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import RenderCountExample from '@/components/examples/useRef/RenderCount'
import PrevStateExample from '@/components/examples/useRef/PrevStateExample'
import RenderCountRef from '@/components/examples/useRef/RenderCountRef'
import FocusInputRef from '@/components/examples/useRef/FocusInputRef'
import ProgrammableActionsExample from '@/components/examples/useRef/ProgrammableActions'
import ChildAccess from '@/components/examples/useRef/ChildAccess'
import ExerciseUseRef from '@/components/examples/useRef/ExerciseUseRef'
import ExamplesRef from '@/components/examples/useRef/ExamplesRef'

const useRef = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <Title>useRef</Title>
        </div>

        <div className="flex justify-center mx-6 sm:mx-4 md:mx-20 lg:mx-32 xl:mx-64">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[24px]">
                Информация
              </AccordionTrigger>
              <AccordionContent className="text-[18px]">
                <p>
                  <code>useRef</code> это хук, который возвращает объект, объект
                  этот одинаков между всеми ререндерами, у него есть поле{' '}
                  <code>.current</code> в которое передается дефолтное значение
                  из первого аргумента
                </p>
                <p className="mt-5">
                  <code>useRef</code> возвращает изменяемый ref-объект, свойство{' '}
                  <code>.current</code> которого инициализируется переданным
                  аргументом <code>(initialValue)</code>. Возвращённый объект
                  будет сохраняться в течение всего времени жизни компонента.
                </p>
                <p className="mt-5">
                  В useRef() можно сохранять любое значение и хранить/изменять
                  его в течение всей жизни компонента. При изменении значения не
                  произойдет повторный рендер.
                </p>
                <p className="mt-5">
                  useRef— это React Hook, который позволяет вам ссылаться на
                  значение, которое не требуется для рендеринга.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col items-center w-[1120px] mx-auto">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex flex-col gap-2">
          <ExamplesRef />
          <RenderCountRef />
          <FocusInputRef />
          <RenderCountExample />
          <PrevStateExample />
          <ProgrammableActionsExample />
          <ChildAccess />
          <ExerciseUseRef />
        </div>
      </div>
    </>
  )
}

export default useRef
