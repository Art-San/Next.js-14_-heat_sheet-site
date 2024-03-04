// import CompTable from '@/components/CompTable'
import NavigationButtons from '@/components/buttons/NavigationButtons'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataArrayMethods } from '@/lib/data/javascript/data.array-methods'

interface IProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return dataArrayMethods.map((el) => ({
    slug: el.slug
  }))
}

const ArrayMethodPage = ({ params }: IProps) => {
  const { slug } = params

  const currentIndex = dataArrayMethods.findIndex((item) => item.slug === slug)
  const nextMethod = dataArrayMethods[currentIndex + 1]

  const noCurrent = dataArrayMethods.filter((el) => el.slug !== slug)

  const method = dataArrayMethods.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center">
      <NavigationButtons path={nextMethod?.slug} />
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col mb-auto w-[100%] lg:w-1/2">
          <CardWrapper>
            <SmallTitle>{method?.title}</SmallTitle>
            <h3 className=" text-base ">{method?.desc1}</h3>
            <h3 className=" text-base ">{method?.desc2}</h3>
            <h3 className=" text-base ">{method?.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="">
          <CodeHighlighting data={method?.code1 ?? ''} variant={'medium'} />
        </div>
      </div>

      <div className=" w-fit">
        <CodeHighlighting data={method?.code2 ?? ''} variant={'medium'} />
      </div>
      {/* <CompTable arr={noCurrent} /> */}
    </div>
  )
}

export default ArrayMethodPage
