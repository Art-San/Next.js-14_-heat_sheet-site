// 'use state'
import React from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { exampleColor } from '@/lib/data/useState/data'

const colors = ['#319452 Зеленый', '#ec3b3b Красный', '#2c6499 Синий']

const ExampleColor = () => {
  // const [colors] = useState(['#18C417 Зеленый', '#c41d17 Красный', '#31598f Синий'])
  return (
    <div className="flex  flex-col-reverse w-[90%] justify-center items-center md:w-full md:flex-row">
      <div className="w-full md:w-1/3">
        <CardWrapper>
          <div className="flex  md:flex-col">
            <div className="w-[70%] md:w-[100%]">
              <SmallTitle>Если данные не меняются</SmallTitle>
              <p className="text-[#2c6499]">
                или не рендерется, то незачем их хранить useState, можешь
                хранить <br />в переменной хоть за пределами компонента
              </p>
              <Separator className="mt-4  bg-slate-300" />
              <ul className="flex gap-5 mt-5">
                {colors.map((color) => (
                  <li key={color}>
                    <h3 className={`text-[${color.split(' ')[0]}]`}>{color}</h3>
                  </li>
                ))}
              </ul>
            </div>
            <ImageModal
              path="/images/useState_ExampleColor.png"
              path500="/images/useState_500.png"
            />
          </div>
        </CardWrapper>
      </div>
      <div>
        <CodeHighlighting data={exampleColor} variant={'medium'} />
      </div>
    </div>
  )
}

export default ExampleColor
