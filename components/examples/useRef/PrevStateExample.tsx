'use client'
import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Button } from '@/components/ui/button'
import ImageModal from '@/components/ImageModal'

const PrevStateExample = () => {
  const prevState = useRef('')
  const [otherState, setOtherState] = useState('false')
  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === 'false' ? 'true' : 'false'))
  }

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  return (
    <div className="flex items-center justify-center">
      <div className="flex px-[50px] py-[10px] w-full justify-center">
        <CardWrapper>
          <SmallTitle>Предыдущее состояние</SmallTitle>
          <div className=" flex flex-row gap-10 m-8 items-center">
            <p className="font-bold text-gray-800">
              Prev State:{' '}
              <span className=" text-red-700">{prevState.current}</span>
            </p>
            <p className="font-bold text-gray-800">
              Corrent State: <span className="text-blue-700">{otherState}</span>
            </p>
            <Button variant={'positive'} size={'sm'} onClick={toggleOtherState}>
              жми
            </Button>
          </div>
          <h6 className=" text-orange-600">работает совмемтно с useRef</h6>
        </CardWrapper>
      </div>
      <div>
        <ImageModal
          path="/images/useEffect_PrevStateExample.png"
          path500="/images/useState_500.png"
        />
      </div>
    </div>
  )
}

export default PrevStateExample
