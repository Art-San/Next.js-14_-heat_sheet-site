'use client'
import { useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { programmableActionsExample } from '@/lib/data/hooks/useRef/data'
import { Button } from '@/components/ui/button'

const ProgrammableActionsExample = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState(100) // Храним текущую ширину в состоянии

  const handleClick = () => {
    if (inputRef.current) {
      console.log('inputRef', inputRef.current)
      inputRef.current.focus()
    }
  }

  const handleClickWidth = () => {
    if (inputRef.current) {
      const newWidth = width === 100 ? 50 : 100 // Переключаем между 100px и 200px
      inputRef.current.style.width = `${newWidth}%` // Устанавливаем новую ширину на поле
      setWidth(newWidth) // Обновляем состояние текущей ширины
    }
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-1/2">
        <CardWrapper>
          <SmallTitle>Программируемые действия и свойства</SmallTitle>
          <p>в ProgrammableActionsExample три варианта, два от GPT</p>
          <label htmlFor="email" className=" text-xs">
            мыло
          </label>
          <input
            ref={inputRef}
            type="email"
            placeholder="Email"
            id="email"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <Button
            size={'sm'}
            variant={'positive'}
            onClick={handleClick}
            className=" w-1/3"
          >
            Фокус input
          </Button>
          <Button className="" onClick={handleClickWidth}>
            Изменить ширину объекта
          </Button>
        </CardWrapper>
      </div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting
              data={programmableActionsExample}
              variant={'medium'}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ProgrammableActionsExample

// 2
// const ProgrammableActionsExample = () => {
//     const inputRef = useRef()
//     const handleClick = () => {
//         console.log('inputRef', inputRef.current)
//         inputRef.current.focus()
//     }
//     console.log(inputRef)
//     const handleClickWidth = () => {
//         inputRef.current.style.width = '50%'
//         console.log(inputRef.current.style.width)
//     }
//     return (
//         <CardWrapper>
//             <SmallTitle className="card-title">
//                 Программируемые действия и свойства
//             </SmallTitle>
//             <Divider />
//             <label htmlFor="email" className="form-label">
//                 Мыло
//             </label>
//             <input
//                 ref={inputRef}
//                 type="email"
//                 className="form-control"
//                 id="email"
//             />
//             <button className="btn btn-primary m-2" onClick={handleClick}>
//                 Фокус input
//             </button>
//             <button
//                 className="btn btn-secondary m-2"
//                 onClick={handleClickWidth}
//             >
//                 Изменить ширину объекта
//             </button>
//         </CardWrapper>
//     )
// }

// 3
// const ProgrammableActionsExample = () => {
//     const inputRef = useRef()
//     const [width, setWidth] = useState(100)

//     const handleClick = () => {
//         inputRef.current.focus()
//     }

//     const handleClickWidth = () => {
//         // Изменение ширины в зависимости от текущего значения
//         setWidth((prevWidth) => (prevWidth === 100 ? 50 : 100))
//     }

//     return (
//         <CardWrapper>
//             <SmallTitle className="card-title">
//                 Программируемые действия и свойства
//             </SmallTitle>
//             <Divider />
//             <label htmlFor="email" className="form-label">
//                 Мыло
//             </label>
//             <input
//                 ref={inputRef}
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 style={{ width: `${width}%` }}
//             />
//             <button className="btn btn-primary m-2" onClick={handleClick}>
//                 Фокус input
//             </button>
//             <button
//                 className="btn btn-secondary m-2"
//                 onClick={handleClickWidth}
//             >
//                 Изменить ширину объекта
//             </button>
//         </CardWrapper>
//     )
// }
