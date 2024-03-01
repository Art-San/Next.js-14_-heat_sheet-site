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
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IDataVariable {
  id: number
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
  arr: IDataVariable[]
}

const CompTable = ({ arr }: ICompTableProps) => {
  const [data, setData] = useState<IDataVariable[]>([])
  useEffect(() => {
    setData(arr)
  }, [arr])

  return (
    <Table className=" w-[80%] lg:w-2/3 mx-auto mt-8">
      <TableCaption>Список {data[0].tags}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Description</TableHead>
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
  )
}
export default CompTable
