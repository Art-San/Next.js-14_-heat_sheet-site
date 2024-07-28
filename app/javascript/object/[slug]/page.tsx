// import CompTable, { IData } from '@/components/CompTable'
import CompTable from '@/components/CompTable'
import NavigationButtons from '@/components/buttons/NavigationButtons'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'

import { dataObjExamples } from '@/lib/data/javascript/objects/data.bjects-examples'

interface IProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return dataObjExamples.map((el) => ({
    slug: el.slug
  }))
}

const ObjectPage = ({ params }: IProps) => {
  const { slug } = params
  console.log(12, slug)
  const currentIndex = dataObjExamples.findIndex((item) => item.slug === slug)
  const nextMethod = dataObjExamples[currentIndex + 1]

  const noCurrent = dataObjExamples.filter((el) => el.slug !== slug)

  const type = dataObjExamples.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center gap-2">
      <NavigationButtons path={nextMethod?.slug} />
      {/* <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row"> */}
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col mb-auto w-[100%] lg:w-1/2">
          <CardWrapper>
            <SmallTitle>{type?.title}</SmallTitle>
            <h3 className=" text-base ">{type?.desc1}</h3>
            <h3 className=" text-base ">{type?.desc2}</h3>
            <h3 className=" text-base ">{type?.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="">
          <CodeHighlighting data={type?.code1 ?? ''} variant={'medium'} />
        </div>
      </div>

      <div className=" w-fit">
        <CodeHighlighting data={type?.code2 ?? ''} variant={'medium'} />
      </div>
      {/* <CompTable arr={noCurrent} /> */}
    </div>
  )
}

export default ObjectPage
