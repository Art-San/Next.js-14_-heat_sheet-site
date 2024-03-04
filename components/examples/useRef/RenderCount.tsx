'use client'
import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
import ImageModal from '@/components/ImageModal'

const RenderCountExample = () => {
  const renderCount = useRef(0)
  const [otherState, setOtherState] = useState(false)
  const toggleOtherState = () => {
    setOtherState(!otherState)
  }
  useEffect(() => {
    renderCount.current++
  })
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <Separator className="mt-4  bg-slate-300" />
          <p className="text-red-600 font-semibold">
            Render count: {renderCount.current}
          </p>
          <Button
            size={'custom'}
            variant={'positive'}
            onClick={toggleOtherState}
          >
            жми
          </Button>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useRef_RenderCount.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}

export default RenderCountExample
