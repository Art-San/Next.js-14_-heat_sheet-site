import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataVariables } from '@/lib/data/javascript/dataJavascript'
import NavigationButtons from '@/components/buttons/NavigationButtons'
// import CompTable from '@/components/CompTable'

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

  const currentIndex = dataVariables.findIndex((item) => item.slug === slug)
  const nextMethod = dataVariables[currentIndex + 1]

  const noCurrent = dataVariables.filter((el) => el.slug !== slug)

  const variable = dataVariables.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center gap-6">
      <NavigationButtons path={nextMethod?.slug} />
      {/* <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row"> */}
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className=" w-[90%] lg:w-1/2">
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
      {/* <CompTable arr={noCurrent} /> */}
    </div>
  )
}

export default VariablesPage
