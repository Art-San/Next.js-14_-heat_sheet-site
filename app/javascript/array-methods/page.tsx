import CompTable from '@/components/CompTable'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import {
  arrayMethods,
  dataArrayMethods
} from '@/lib/data/javascript/data.array-methods'

const ArrayMethods = () => {
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-col">
        <div className="w-full lg:w-[80%]">
          <CardWrapper>
            <SmallTitle>{arrayMethods.title}</SmallTitle>
            <h3 className=" text-base ">{arrayMethods.desc1}</h3>
            <h3 className=" text-base ">{arrayMethods.desc2}</h3>
            <h3 className=" text-base ">{arrayMethods.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="flex items-center flex-col xl:flex-row w-full">
          <CompTable arr={dataArrayMethods} />

          <div className="">
            <CodeHighlighting data={arrayMethods.code1} variant={'small'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default ArrayMethods

// push unshift // add
// shift pop // del
// forEach map filter find findIndex some every// iterate
// reduce sort //
// splice slice indexOf includes split join reverse//
// concat
