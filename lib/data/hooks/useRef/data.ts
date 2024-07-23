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
