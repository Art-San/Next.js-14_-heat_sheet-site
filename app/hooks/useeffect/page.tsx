// const UseEffectPage = () => {
//   return <div>UseEffectPage</div>
// }
// export default UseEffectPage

import Title from '@/components/typografy/Title'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import Subtitle from '@/components/typografy/Subtitle'
import UsersList from '@/components/examples/useEffect/UsersList'

// import RenderCountExample2 from '@/components/examples/useEffect/RenderCount2'
// import PrevStateExample from '@/components/examples/useRef/PrevStateExample'
// import Example from '@/components/examples/useEffect/Example'

const text = `useEffect(() => {})`
const text1 = `useEffect(() => {}, [])`
const text2 = `useEffect(() => {}, [dev1, dev2])`
const text3 = `useEffect(() => {
  return () => {}
}, [dev1, dev2])`

const useEffect = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <Title>UseEffect</Title>
        </div>

        <div className="flex justify-center mx-6 sm:mx-4 md:mx-20 lg:mx-32 xl:mx-64">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-[24px]">
                Информация
              </AccordionTrigger>
              <AccordionContent className="text-[18px]">
                <div className=" flex flex-col gap-3">
                  <p>
                    Первым параметром useEffect принимается функцию Effect-а,
                    которая вызывается после монтирования компонента и каждый
                    раз после изменения в массиве зависимостей.
                  </p>
                  <p>
                    Функция эффекта может вернуть функцию очистки, которая
                    сработает перед следующим срабатыванием эффекта и толь в
                    самом конце, перед тем как компонент размонтируется
                  </p>

                  <p>
                    <code>useEffect</code> помогает отслеживать рендеры нашего
                    приложения. В момент рендера он вызовет переданный ему{' '}
                    <code>callback</code>. useEffect() может срабатывать при:
                    каждом ререндере компонента. первом рендере. изменении
                    какой-то зависимости. Демонтаже компонента.
                  </p>

                  <p>
                    <code className=" text-orange-700 text-xl">{text}</code> При
                    каждом ререндере
                  </p>
                  <p>
                    <code className=" text-orange-700 text-xl">{text1}</code>{' '}
                    При первом рендере
                  </p>
                  <p>
                    <code className=" text-orange-700 text-xl">{text2}</code>{' '}
                    При изменении зависимостей dev1, dev2
                  </p>
                  <p>
                    <code className=" text-orange-700 text-xl">{text3}</code>{' '}
                    вызовется при демонтаже компонента
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col items-center w-[1120px] mx-auto">
        <Subtitle>Примеры</Subtitle>
        <div className=" flex flex-col">
          <UsersList />
          {/* <Example /> */}
          {/* <RenderCountExample2 /> */}
          {/* <PrevStateExample /> */}
        </div>
      </div>
    </>
  )
}

export default useEffect
