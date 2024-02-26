// 'use state'
import React from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'

const colors = ['#319452 Зеленый', '#ec3b3b Красный', '#2c6499 Синий']

const ExampleColor = () => {
  // const [colors] = useState(['#18C417 Зеленый', '#c41d17 Красный', '#31598f Синий'])
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Если данные не меняются</SmallTitle>
          <p className="text-[#2c6499]">
            или не рендерется, то не зачем их хранить useState, можешь хранить{' '}
            <br />в переменной хоть за пределами компоннета
          </p>
          <Separator className="mt-4  bg-slate-300" />
          <ul className="flex gap-5 mt-5">
            {colors.map((color) => (
              <li key={color}>
                <h3 className={`text-[${color.split(' ')[0]}]`}>{color}</h3>
              </li>
            ))}
          </ul>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useState_ExampleColor.png"
          path500="/images/useState_500.png"
        />
      </div>
      <div className=" text-[#319452]"></div>
    </div>
  )
}

export default ExampleColor
