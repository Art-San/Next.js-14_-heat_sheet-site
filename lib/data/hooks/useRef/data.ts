export const renderCountRef = `import { useEffect, useRef, useState } from 'react'

// Определение типа для объекта, который будет храниться в ref
interface CounterState {
  counter: number
}

const RenderCountRef = () => {
  const [counter, setCounter] = useState(0)

  // Использование MutableRefObject с указанием начального значения
  const ref = useRef<CounterState | null>(null)

  useEffect(() => {
    if (!ref.current) {
      ref.current = { counter: 0 }
    }
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          if (ref.current) {
            ref.current.counter++
          }
        }}
      >
        На меня нажали {counter} раз.
      </button>
      <br />
      <button onClick={() => setCounter(ref.current?.counter || 0)}>
        Обновить
      </button>
    </div>
  )
}

export default RenderCountRef`

export const focusInputRef = `import { useState, useRef } from 'react'

const FocusInputRef = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const nameInputRef = useRef<HTMLInputElement>(null)
  const surnameInputRef = useRef<HTMLInputElement>(null)

  console.log(nameInputRef.current) // null
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

  useEffect(() => {
    console.log(nameInputRef.current)
    // <input type="text" placeholder="Имя" class=" ........">
  })

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
          className=" px-3 py-1 border border-blue-300 rounded-sm "
        />

        <input
          ref={surnameInputRef}
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          onKeyUp={handlerKeyUp2}
          className=" px-3 py-1"
        />
      </form>
    </div>
  )
}

export default FocusInputRef`

export const renderCountExample = `import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'


const RenderCountExample = () => {
  const renderCount = useRef(0)
  const [otherState, setOtherState] = useState(false)
  const toggleOtherState = () => {
    setOtherState(!otherState)
  }
  useEffect(() => {
    renderCount.current++
  })  // нет массива
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
          <p className="text-red-600 font-semibold">
            Render count: {renderCount.current}
          </p>
          <Button
            size={'custom'}
            variant={'positive'}
            onClick={toggleOtherState}
          >
            жми
          </Button>
       
      </div>
    </div>
  )
}

export default RenderCountExample`

export const prevStateExample = `import { useRef, useState, useEffect } from 'react'

const PrevStateExample = () => {
  const prevState = useRef('')
  const [otherState, setOtherState] = useState('false')

  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === 'false' ? 'true' : 
    'false'))
  }

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  return (
    <div>
      <div>
        <p>
          Prev State: <span>{prevState.current}</span>
        </p>
        <p>
          Current State: <span>{otherState}</span>
        </p>
        <button onClick={toggleOtherState}>жми</button>
        <h6>Работает совместно useEffect и useRef</h6>
      </div>
    </div>
  )
}

export default PrevStateExample`

export const programmableActionsExample = `'use client'
import { useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'

// 1
const ProgrammableActionsExample = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState(100) 
  // Храним текущую ширину в состоянии

  const handleClick = () => {
    if (inputRef.current) {
      console.log('inputRef', inputRef.current)
      // <input type="email" class="" id="email">
      inputRef.current.focus()
    }
  }

  const handleClickWidth = () => {
    if (inputRef.current) {
      const newWidth = width === 100 ? 50 : 100 
      // Переключаем между 100px и 200px
      inputRef.current.style.width = {newWidth}% 
      // Устанавливаем новую ширину на поле
      setWidth(newWidth) // Обновляем состояние текущей ширины
    }
  }
  return (
    <CardWrapper>
      <SmallTitle>Программируемые действия и свойства</SmallTitle>

      <label htmlFor="email" className="">
        Мыло
      </label>
      <input ref={inputRef} type="email" className="" id="email" />
      <button className="" onClick={handleClick}>
        Фокус input
      </button>
      <button className="" onClick={handleClickWidth}>
        Изменить ширину объекта
      </button>
    </CardWrapper>
  )
}

// 2
const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const handleClick = () => {
        console.log('inputRef', inputRef.current)
        inputRef.current.focus()
    }
    console.log(inputRef)
    const handleClickWidth = () => {
        inputRef.current.style.width = '50%'
        console.log(inputRef.current.style.width)
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Мыло
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    )
}


// 3
const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const [width, setWidth] = useState(100)

    const handleClick = () => {
        inputRef.current.focus()
    }

    const handleClickWidth = () => {
        // Изменение ширины в зависимости от текущего значения
        setWidth((prevWidth) => (prevWidth === 100 ? 50 : 100))
    }

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Мыло
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
                style={{ width: {width}% }}
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    )
}

export default ProgrammableActionsExample`

export const childAccess = `import { useRef, useState } from 'react'

const ChildAccess = () => {
  const inputRef = useRef<HTMLInputElement>(null) 
  
  const [isValueSet, setIsValueSet] = useState(false)

  const handleSend = () => {
    if (inputRef.current) {
      // Добавлена проверка на наличие ссылки
      const file = inputRef.current.files
      console.log(file)
    }
  }

  return (
    <div>
      <h2>Получения доступа к потомку</h2>
      <label htmlFor="file">Выберите файл</label>
      <input ref={inputRef} type="file" onChange={() => setIsValueSet(true)} 
      />
      <button
        className=""
        onClick={handleSend}
        disabled={!isValueSet}
      >
        Отправить файл
      </button>
    </div>
  )
}

export default ChildAccess`

export const exerciseUseRef = `'use client'
import { useRef } from 'react'

const ExerciseUseRef = () => {
  const blockRef = useRef<HTMLDivElement>(null)
  console.log('blokRef', blockRef)
  const handleClick = () => {
    if (blockRef.current) {
      // Приведение типа к HTMLElement для доступа к свойству innerText
      const secondChild = blockRef.current.children[1] as HTMLElement

      secondChild.innerText = 'Text-2'
      blockRef.current.style.width = '150px'
      blockRef.current.style.height = '80px'
    }
  }
  return (
    <div>
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота.
        Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={blockRef}
        className="bg-red-400  rounded"
        style={{
          height: 40,
          width: 60,
          color: 'white'
        }}
      >
        <small className=" mx-1">Блок-1</small>
        <small>Блок-2</small>
      </div>
      <button className="" onClick={handleClick}>
        Жми
      </button>
    </div>
  )
}

export default ExerciseUseRef`

export const examplesRef = `import CardWrapper from '@/components/common/Card'
import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useReducer, useRef, useState } from 'react'

export default function ExamplesRef() {
  return (
    <div className="App">
      <h2>Interval example</h2>
      <IntervalExample />
    </div>
  )
}

// Используем рефы для передачи коллбека в эффект
const useEffectEvent = (callback: any) => {
  const ref = useRef(callback)

  ref.current = callback

  return useCallback((...args: any) => {
    ref.current(...args)
  }, [])
}

const useRefValue = (value: any) => {
  const ref = useRef(value)
  ref.current = value
  return ref
}

function useInterval(interval: any, enabled: any, onTick: any) {
  const onTickEvent = useEffectEvent(onTick)
  useEffect(() => {
    if (!enabled) return
    const i = setInterval(() => {
      // onTick()
      onTickEvent()
    }, interval)
    return () => clearInterval(i)
  }, [interval, enabled, onTickEvent])
}

function IntervalExample() {
  const [counter, setCounter] = useState(0)
  const [, rerender] = useReducer((s) => s + 1, 0)
  useInterval(1000, false, () => { // true работает интервал
    console.log(counter)
    setCounter((s) => s + 1)
  })

  console.log('rerender')

  return (
    <CardWrapper>
      <div>Counter: {counter}</div>
      <Button
        size={'custom'}
        variant={'positive'}
        onClick={() => rerender()}>
        increment
      </Button>
    </CardWrapper>
  )
}`
