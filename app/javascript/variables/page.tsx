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

console.log('dataVariables', dataVariables[1].name)

const Variables = () => {
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
      <Table>
        <TableCaption>Список {variables.title}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Slag</TableHead>
            <TableHead>Desc1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <Link href={`javascript/variables/${dataVariables[1].slag}`}>
              <TableCell className="font-medium text-blue-600">
                {dataVariables[1].name}
              </TableCell>
            </Link>
            <TableCell>{dataVariables[1].slag}</TableCell>
            <TableCell>{dataVariables[1].desc1}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
export default Variables
