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
    <div className="flex justify-center">
      <div className=" w-1/3">
        <CardWrapper>
          <SmallTitle>Должен добавлять по 1, setInterval на 60 сек</SmallTitle>
          <p>
            Но хрен поими почему добавляет по 2, и вообще ломается setInterval
            (ускаряется)
          </p>
          <Separator className="mt-4  bg-slate-300" />
          <Timer />
          <ImageModal
            path="/images/useState_count.png"
            path500="/images/useState_500.png"
          />
        </CardWrapper>
      </div>
      <div>
        <CodeHighlighting data={timer} variant={'default'} />
      </div>
    </div>
  )
}

export default Count
