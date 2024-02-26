'use client'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@radix-ui/react-separator'
import React, { useState } from 'react'
import CardWrapper from '../../common/Card'
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu'
import ImageModal from '@/components/ImageModal'

const Click = () => {
  const [count, setCount] = useState(20)

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
    setCount((prev) => prev - 1)
  }
  const handeleIncrement = () => {
    setCount(count + 1)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>При нажатие минус 2 или плюс 1</SmallTitle>
          <p>Вроде работае</p>
          <Separator className="mt-4  bg-slate-300" />
          <div className="flex gap-10">
            <LuMinusCircle size={40} color={'red'} onClick={handleDecrement} />
            <h1 className="text-2xl text-red-800 font-bold">{count}</h1>
            <LuPlusCircle
              size={40}
              color={'green'}
              onClick={handeleIncrement}
            />
          </div>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useState_click.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}
export default Click
