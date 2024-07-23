'use client'
import { useState, useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { focusInputRef } from '@/lib/data/hooks/useRef/data'

const FocusInputRef = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const nameInputRef = useRef<HTMLInputElement>(null)
  const surnameInputRef = useRef<HTMLInputElement>(null)

  const handlerKeyUp1 = (e: any) => {
    if (e.key === 'Enter' && surnameInputRef.current) {
      surnameInputRef.current.focus()
    }
  }

  const handlerKeyUp2 = (e: any) => {
    if (e.key === 'Enter' && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }

  return (
    <div className=" flex flex-col gap-2">
      <p>При нажатии enter фокус меняет поле</p>
      <form className=" mt-1 flex gap-2">
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handlerKeyUp1}
          className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
        />

        <input
          ref={surnameInputRef}
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          onKeyUp={handlerKeyUp2}
          className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
      </form>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" flex text-[24px] justify-center">
            код
          </AccordionTrigger>
          <AccordionContent className="text-[18px] ">
            <CodeHighlighting data={focusInputRef} variant={'medium'} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FocusInputRef
