'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { fixErrFitch } from '@/lib/data/errorData/data'
import FetchUser from './FetchUser'
interface IUser {
  id: number
  name: string
}

function ExampleBad() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center xl:flex-row">
      <div>
        <CodeHighlighting data={fixErrFitch} variant={'medium'} />
      </div>
      <div className="">
        <CardWrapper>
          <SmallTitle>Пример того как не надо делать</SmallTitle>
          <h3 className=" text-base text-orange-700">
            1. useState() не оставлять без начального значения <br />
          </h3>
          <h3 className=" text-base text-orange-700">
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
          <div className=" flex gap-6">
            <ImageModal
              path="/images/useState_ExampleBad.png"
              path500="/images/useState_500.png"
            />
            <FetchUser />
          </div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default ExampleBad
