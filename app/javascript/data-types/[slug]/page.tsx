import { IData } from '@/components/CompTable'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataTypes } from '@/lib/data/javascript/dataTypes'

interface IProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return dataTypes.map((el) => ({
    slug: el.slug
  }))
}

const DatatypePage = ({ params }: IProps) => {
  const { slug } = params
  const variable = dataTypes.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center">
      {/* <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row"> */}
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col mb-auto w-[100%] lg:w-1/2">
          <CardWrapper>
            <SmallTitle>{variable?.title}</SmallTitle>
            <h3 className=" text-base ">{variable?.desc1}</h3>
            <h3 className=" text-base ">{variable?.desc2}</h3>
            <h3 className=" text-base ">{variable?.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="">
          <CodeHighlighting data={variable?.code1 ?? ''} variant={'medium'} />
        </div>
      </div>

      <div className=" w-fit">
        <CodeHighlighting data={variable?.code2 ?? ''} variant={'medium'} />
      </div>
    </div>
  )
}

export default DatatypePage
