// import CompTable from '@/components/CompTable'
import NavigationButtons from '@/components/buttons/NavigationButtons'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataStringMethods } from '@/lib/data/javascript/data.string-methods'

interface IProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return dataStringMethods.map((el) => ({
    slug: el.slug
  }))
}

const StringMethodPage = ({ params }: IProps) => {
  const { slug } = params

  const currentIndex = dataStringMethods.findIndex((item) => item.slug === slug)
  const nextMethod = dataStringMethods[currentIndex + 1]

  const noCurrent = dataStringMethods.filter((el) => el.slug !== slug)

  const method = dataStringMethods.find((el) => {
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

export default StringMethodPage
