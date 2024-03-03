import CompTable from '@/components/CompTable'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import {
  dataStringMethods,
  stringMethods
} from '@/lib/data/javascript/data.string-methods'

const StringMethods = () => {
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-col">
        <div className="w-full lg:w-[80%]">
          <CardWrapper>
            <SmallTitle>{stringMethods.title}</SmallTitle>
            <h3 className=" text-base ">{stringMethods.desc1}</h3>
            <h3 className=" text-base ">{stringMethods.desc2}</h3>
            <h3 className=" text-base ">{stringMethods.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="flex items-center flex-col xl:flex-row w-full">
          <CompTable arr={dataStringMethods} />

          <div className="">
            <CodeHighlighting data={stringMethods.code1} variant={'small'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default StringMethods
