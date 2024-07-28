import CompTable from '@/components/CompTable'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import {
  dataObjExamples,
  object
} from '@/lib/data/javascript/objects/data.bjects-examples'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-col">
        <div className="w-full lg:w-[80%]">
          <CardWrapper>
            <SmallTitle>{object.title}</SmallTitle>
            <h3 className=" text-base ">{object.desc1}</h3>
            <h3 className=" text-base ">{object.desc2}</h3>
            <h3 className=" text-base ">{object.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="flex items-center flex-col xl:flex-row w-full">
          <CompTable arr={dataObjExamples} />

          <div className="">
            <CodeHighlighting data={object.code1} variant={'small'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
