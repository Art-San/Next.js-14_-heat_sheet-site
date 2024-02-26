const UseRefPage = () => {
  return <div>UseRefPage</div>
}
export default UseRefPage

// import React from 'react'
// import { Separator } from '@/components/ui/separator'
// import Subtitle from '@/components/typografy/Subtitle'
// import Title from '@/components/typografy/Title'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger
// } from '@/components/ui/accordion'
// import RenderCountExample from '@/components/examples/useRef/RenderCount'
// import PrevStateExample from '@/components/examples/useRef/PrevStateExample'

// const useRef = () => {
//   return (
//     <>
//       <div className=" flex flex-col">
//         <div className="flex justify-center">
//           <Title>useRef</Title>
//         </div>
//         <div className="flex justify-center mx-6 sm:mx-4 md:mx-20 lg:mx-32 xl:mx-64">
//           <Accordion type="single" collapsible className="w-full">
//             <AccordionItem value="item-1">
//               <AccordionTrigger className=" text-[24px]">
//                 Информация
//               </AccordionTrigger>
//               <AccordionContent className="text-[18px]">
//                 <p>
//                   <code>useRef</code> возвращает изменяемый ref-объект, свойство{' '}
//                   <code>.current</code> которого инициализируется переданным
//                   аргументом <code>(initialValue)</code>. Возвращённый объект
//                   будет сохраняться в течение всего времени жизни компонента.
//                 </p>
//                 <p className="mt-5">
//                   В useRef() можно сохранять любое значение и хранить/изменять
//                   его в течение всей жизни компонента. При изменении значения не
//                   произойдет повторный рендер.
//                 </p>
//                 <p className="mt-5">
//                   useRef— это React Hook, который позволяет вам ссылаться на
//                   значение, которое не требуется для рендеринга.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-[1120px] mx-auto">
//         <Subtitle>Примеры</Subtitle>
//         <div className=" flex flex-col">
//           <RenderCountExample />
//           <PrevStateExample />
//           <h5 className="text-danger">
//             в ProgrammableActionsExample три вариана, два от GPT
//           </h5>
//           {/* <ProgrammableActionsExample /> */}
//           {/* <ExampleFileInput /> */}
//         </div>
//       </div>

//       <div>
//         {/* <Subtitle>Упражнения</Subtitle> */}
//         {/* <UseRefExercise /> */}
//       </div>
//     </>
//   )
// }

// export default useRef
