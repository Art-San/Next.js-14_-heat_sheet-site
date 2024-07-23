import { useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'

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
    <CardWrapper>
      <SmallTitle>Программируемые действия и свойства</SmallTitle>

      <label htmlFor="email" className="form-label">
        Мыло
      </label>
      <input ref={inputRef} type="email" className="form-control" id="email" />
      <button className="" onClick={handleClick}>
        Фокус input
      </button>
      <button className="" onClick={handleClickWidth}>
        Изменить ширину объекта
      </button>
    </CardWrapper>
  )
}

export default ProgrammableActionsExample
