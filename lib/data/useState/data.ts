export const counter = `const Counter = () => {
    const [count, setCount] = useState(0)
  
    const handleIncrement = () => {
      // setCount(count + 1) // эти два
      // setCount(count + 1) // с хлопнутся
      setCount((prevState) => prevState + 1)
      setCount((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
      setCount((prevState) => prevState - 1)
    }
    return (
      <div>
        <p>Count: {count}</p>
        <button
        onClick={handleDecrement}>минус</button>
        <button
        onClick={handleIncrement}>плюс</button>
      </div>
    )
  }
  
  export default Counter`

export const timer = `'use client'
  import { useEffect, useState } from 'react'
  
  const Timer = () => {
  
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      setInterval(() => {
        setCount((prev) => prev + 1)
      }, 60000)
      
    }, [])
  
    return <p>Count: {count}</p>
  }
  export default Timer`

export const exampleColor = `const colors = [
    '#319452 Зеленый',
    '#ec3b3b Красный',
    '#2c6499 Синий'
  ]
  const ExampleColor = () => {
    return (
      <div className="">
        <div className="">
          <CardWrapper>
            <SmallTitle>
              Если данные не меняются
              </SmallTitle>
            <Separator className="" />
            <ul className="">
              {colors.map((color) => (
                <li key={color}>
                  <h3 
                    {className={text-[{color.split(' ')[0]}]}>}
                      {color}
                    </h3>
                </li>
              ))}
            </ul>
          </CardWrapper>
        </div>
      </div>
    )
  }`

export const example4 = `const Example4 = () => {
    const [tasks, setTasks] = useState<ITask[]>([
      { text: 'Тестовая задача #1' },
      { text: 'Тестовая задача #2' }
    ])
  
    const onClickAdd = () => {
      const text = prompt('Текст задачи')
      const trimmedText = text?.trim()
  
      if (trimmedText === '') {
        alert('пустую строку отправлять нельзя')
      } else {
        setTasks([...tasks, { text }])
      }
    }
  
    const onClickRemove = (index: number) => {
   
      setTasks(tasks.filter((_, i) => i !== index))
    }
  
    const onClickEdit = (index: number) => {
      const textTask = prompt('Новый Текст задачи')
      // хороший вариант похож на ПЕРВыЙ
      setTasks(
        tasks.map((obj, i) => {
          if (index === i) {
            return {
              ...obj,
              text: textTask
            }
          }
          return obj
        })
      )
    }`
