'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'
interface IUser {
  id: number
  name: string
}

function ExampleBad() {
  const [users, setUsers] = useState<IUser[]>()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json))
  }, [])
  if (!users) {
    return <h1 className=" text-lg text-orange-700">Loading...</h1>
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Пример того как не надо делать</SmallTitle>
          <h3 className=" text-lg text-orange-700">
            1. useState() не оставлять без начального значения <br />
          </h3>
          <h3 className=" text-lg text-orange-700">
            2. useState(Array) или другой тип данных который ожидаем <br />
            если не знаеш что придет, то сделай проверку <br />
            {''}
            <code className=" text-green-700">
              if (!users) {<h6>Loading...</h6>}
            </code>
            А если не хочешь указывать данные или писать проверку <br />
            Можно поставить вопрос users?.map(() стрелка, фигурные скобки)
          </h3>
          <Separator className="mt-4  bg-slate-300" />
          <p>
            <a>https://jsonplaceholder.typicode.com/users</a>
          </p>
          <ul>
            {users?.map((user: IUser) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useState_ExampleBad.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}

export default ExampleBad
