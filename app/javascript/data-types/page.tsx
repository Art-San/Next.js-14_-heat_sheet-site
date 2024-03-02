import CompTable from '@/components/CompTable'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'

import { dataTypes, types } from '@/lib/data/javascript/dataTypes'

const DataTypes = () => {
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-col">
        <div className="w-full lg:w-[80%]">
          <CardWrapper>
            <SmallTitle>{types.title}</SmallTitle>
            <h3 className=" text-base ">{types.desc1}</h3>
            <h3 className=" text-base ">{types.desc2}</h3>
            <h3 className=" text-base ">{types.desc3}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div className="flex items-center flex-col xl:flex-row w-full">
          <CompTable arr={dataTypes} />

          <div className="">
            <CodeHighlighting data={types.code1} variant={'small'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default DataTypes
