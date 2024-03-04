'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface IData {
  id: number
  subject: string // 👍
  chapter: string
  slug: string
  name: string
  tags: string[]
  title: string
  like: boolean
  desc1: string
  desc2: string
  desc3: string
  code1: string
  code2: string
  code3: string
}

interface ICompTableProps {
  arr: IData[]
}

const CompTable = ({ arr }: ICompTableProps) => {
  const [data, setData] = useState<IData[]>([])
  useEffect(() => {
    setData(arr)
  }, [arr])

  return (
    <Table className=" w-[80%] lg:w-2/3 mx-auto mt-8">
      {data.length > 0 && <TableCaption>Список {data[0].chapter}</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>ok</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((el) => (
          <TableRow key={el.id} className=" hover:bg-slate-200">
            <TableCell className="font-medium text-blue-600">
              <Link href={`${el.chapter}/${el.slug}`}>{el.name}</Link>
            </TableCell>
            <TableCell>{el.slug}</TableCell>
            <TableCell>
              <Link href={`${el.chapter}/${el.slug}`}>
                {el.desc1.slice(0, 50) + '...'}
              </Link>
            </TableCell>
            <TableCell>
              {el.like ? (
                <ThumbsUp size={20} strokeWidth={1} />
              ) : (
                <ThumbsDown size={20} strokeWidth={1} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default CompTable
