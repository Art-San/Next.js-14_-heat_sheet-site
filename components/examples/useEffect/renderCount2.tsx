'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
import ImageModal from '@/components/ImageModal'

const RenderCountExample2 = () => {
  const [renderCount, setRenderCount] = useState(0)
  useEffect(() => {
    setRenderCount((prevState) => prevState + 1)
  }, [])
  const handleRender = () => {
    console.log('someRef')
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <div className=" flex flex-col gap-1 m-2 items-center">
            <p className="text-red-600 font-semibold">
              render count: {renderCount}
            </p>
            <Button
              className=" tracking-tight"
              size={'custom'}
              variant={'positive'}
              onClick={handleRender}
            >
              жмык
            </Button>
            <h6 className=" text-orange-600">
              Жмык и ни чего, так как в useEffect стоят пустые [ ]{' '}
            </h6>
          </div>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useEffect_RenderCountExample2.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}

export default RenderCountExample2
