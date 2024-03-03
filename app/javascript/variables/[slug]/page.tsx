import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataVariables } from '@/lib/data/javascript/dataJavascript'

interface IProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return dataVariables.map((el) => ({
    slug: el.slug
  }))
}

const VariablesPage = ({ params }: IProps) => {
  const { slug } = params
  const variable = dataVariables.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center">
      {/* <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row"> */}
      <div className="flex  items-center justify-center">
        <div className=" w-1/2">
          <CardWrapper>
            <SmallTitle>{variable?.title}</SmallTitle>
            <h3 className=" text-base ">{variable?.desc1}</h3>
            <h3 className=" text-base ">{variable?.desc2}</h3>
            <h3 className=" text-base ">{variable?.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="">
          <CodeHighlighting data={variable?.code1 ?? ''} variant={'small'} />
        </div>
      </div>

      <div className=" w-fit">
        <CodeHighlighting data={variable?.code2 ?? ''} variant={'medium'} />
      </div>
    </div>
  )
}

export default VariablesPage
