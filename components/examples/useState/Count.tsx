'use client'
import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import { Separator } from '@/components/ui/separator'
import SmallTitle from '@/components/typografy/SmallTitle'
import ImageModal from '@/components/ImageModal'
import Timer from './Timer'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { timer } from '@/lib/data/useState/data'

const Count = () => {
  return (
    <div className="flex  flex-col-reverse w-[90%] justify-center items-center md:w-full md:flex-row">
      <div className=" w-full md:w-1/3 ">
        <CardWrapper>
          <div className="flex  md:flex-col">
            <div className="w-[70%] md:w-[100%]">
              <SmallTitle>
                Должен добавлять по 1, setInterval на 60 сек
              </SmallTitle>
              <p>
                Но хрен поими почему добавляет по 2, и вообще ломается
                setInterval (ускаряется)
              </p>
              <Separator className="mt-4  bg-slate-300" />
              <Timer />
            </div>
            <ImageModal
              path="/images/useState_count.png"
              path500="/images/useState_500.png"
            />
          </div>
        </CardWrapper>
      </div>
      <div className="">
        {/* <div className=" flex w-[80%] md:w-full"> */}
        <CodeHighlighting data={timer} variant={'medium'} />
      </div>
    </div>
  )
}

export default Count
