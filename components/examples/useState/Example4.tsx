'use client'
import React, { useState } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import { BsTrash } from 'react-icons/bs'
import ImageModal from '@/components/ImageModal'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { example4 } from '@/lib/data/useState/data'

interface ITask {
  text: string | null
}

// interface IExample4Props {
//   tasks: ITask[]
//   setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
// }
const Example4 = () => {
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
    // tasks.push(text)
  }

  const onClickRemove = (index: number) => {
    // tasks.splice(index, 1)
    setTasks(tasks.filter((_, i) => i !== index))
  }
  // вариант 3
  const onClickEdit = (index: number) => {
    const textTask = prompt('Новый Текст задачи')
    // ХОРОШИЙ вариант похож на ПЕРВыЙ
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

    // вариант 2 ПЛОХОЙ
    // const task = tasks[index]
    // task.text = textTask
    // setTasks([...tasks])

    // вариант 1 НЕ ОЧЕНЬ ХОРОШИЙ
    // setTasks(
    //     tasks.map((obj, i) => {
    //         if (index === i) {
    //             obj.text = textTask
    //         }
    //         return obj
    //     }))
  }
  return (
    <div className="flex flex-col w-[100%] justify-center items-center xl:flex-row">
      {/* <div className="flex justify-center"> */}
      <div>
        <CodeHighlighting data={example4} variant={'medium'} />
      </div>
      <div className="w-[100%] xl:w-1/2">
        <CardWrapper>
          <div className="">
            <SmallTitle>Добавить</SmallTitle>
            <h3 className=" text-lg text-green-700">1. Правильно</h3>
            <p>
              Чтобы добавить новую задачу в массив tasks, правильным способом
              будет использование синтаксиса setTasks([...tasks, text]), который
              создаст новый массив, содержащий все старые задачи и новую задачу,
              и обновит состояние.
            </p>
            <h3>2. Не правильно</h3>
            <p>
              Не рекомендуется использовать метод push для изменения состояния
              напрямую, так как это может привести к мутации оригинального
              массива
            </p>
          </div>

          <Separator className="mt-4  bg-slate-300" />
          <div className="">
            <SmallTitle>Удалить</SmallTitle>
            <h3>1. Правильно</h3>
            <p>
              При удалении задачи используй метод массивов filter
              setTasks(tasks.filter((_, i) =стрелка i !== index)). Фильтр
              возвращает новый массив
            </p>
            <h3>2. Не правильно</h3>
            <p>
              Плохой вариант // tasks.splice(index, 1) так же как и выше что-то
              мутирует, но реакт об этом не знает
            </p>
          </div>

          <Separator className="mt-4  bg-slate-300" />
          <div>
            <SmallTitle>Редактировать</SmallTitle>
            <p>
              1. Два плохих варианта внутри <br />
            </p>
            <h4>
              <strong>2. Один приемлемый</strong>
            </h4>
          </div>
          <div className="flex flex-col w-full items-center">
            <ul>
              {tasks.map((task, i) => (
                <li key={i} className="flex gap-5 text-orange-700 items-center">
                  <p className="p-4 text-lg ">{task.text}</p>
                  <button
                    onClick={() => onClickEdit(i)}
                    className=" bg-[#1c8f21] text-white font-semibold h-9 rounded-md px-3 "
                  >
                    Edit
                  </button>
                  <button onClick={() => onClickRemove(i)}>
                    <BsTrash size={5} color={'#ec3b3b'} />
                    <BsTrash size={25} color={'#0D6EFD'} />
                  </button>
                </li>
              ))}
            </ul>
            <button
              className=" bg-[#2d1c8f] text-white font-semibold h-9 rounded-md px-3 w-full"
              onClick={onClickAdd}
            >
              Добавить
            </button>
          </div>
          <ImageModal
            path="/images/useState_Exampler4.png"
            path500="/images/useState_500.png"
          />
        </CardWrapper>
      </div>
    </div>
  )
}

export default Example4
