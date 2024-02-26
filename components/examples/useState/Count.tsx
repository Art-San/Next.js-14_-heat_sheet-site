'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'

const Count = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1)
    }, 60000)
  }, [])
  console.log(count)
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Должен добавлять по 1, setInterval на 60 сек</SmallTitle>
          <p>
            Но хрен поими почему добавляет по 2, и вообще ломается setInterval
            (ускаряется)
          </p>
          <Separator />
          <p className=" text-red-600 font-semibold">Count: {count}</p>
        </CardWrapper>
      </div>
      <div className="">
        <ImageModal
          path="/images/useState_count.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}

export default Count
