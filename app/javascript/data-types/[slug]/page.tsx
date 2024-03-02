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

const DatatypePage = ({ params }: IProps) => {
  const { slug } = params
  console.log('DatatypePage slug', slug)
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
