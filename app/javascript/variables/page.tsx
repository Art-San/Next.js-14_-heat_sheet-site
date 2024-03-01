'use client'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { variables, dataVariables } from '@/lib/data/javascript/dataJavascript'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface DataVariable {
  id: number
  slug: string
  name: string
  title: string
  like: boolean
  desc1: string
  desc2: string
  desc3: string
  code1: string
  code2: string
  code3: string
}

const Variables = () => {
  const [data, setData] = useState<DataVariable[]>([])
  useEffect(() => {
    setData(dataVariables)
  }, [])

  console.log('data', data)
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2">
          <CardWrapper>
            <SmallTitle>{variables.title}</SmallTitle>
            <h3 className=" text-base ">{variables.desc1}</h3>
            <h3 className=" text-base ">{variables.desc2}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div>
          <CodeHighlighting data={variables.code1} variant={'small'} />
        </div>
      </div>
      <Table className=" w-[80%] lg:w-2/3 mx-auto mt-8">
        <TableCaption>Список {variables.title}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Desc1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((el) => (
            <TableRow key={el.id} className=" hover:bg-slate-300">
              <TableCell className="font-medium text-blue-600">
                <Link href={`variables/${el.slug}`}>{el.name}</Link>
              </TableCell>
              <TableCell>{el.slug}</TableCell>
              <TableCell>
                <Link href={`variables/${el.slug}`}>
                  {el.desc1.slice(0, 50) + '...'}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
export default Variables
