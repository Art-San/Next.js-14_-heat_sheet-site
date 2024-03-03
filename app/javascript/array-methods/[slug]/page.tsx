'use client'
import { useRouter } from 'next/navigation'
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

const ArrayMethodPage = ({ params }: IProps) => {
  const router = useRouter()
  const { slug } = params
  const currentIndex = dataArrayMethods.findIndex((item) => item.slug === slug)
  const nextMethod = dataArrayMethods[currentIndex + 1]

  const method = dataArrayMethods.find((el) => {
    return el.slug === slug
  })

  return (
    <div className="flex  flex-col items-center">
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

      <div className="flex justify-between w-full mt-4">
        <a
          href={`/path/to/your/method/page/${nextMethod.slug}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Назад
        </a>
        {nextMethod && (
          <a
            href={`/path/to/your/method/page/${nextMethod.slug}`}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Следующий
          </a>
        )}
      </div>
    </div>
  )
}

export default ArrayMethodPage
