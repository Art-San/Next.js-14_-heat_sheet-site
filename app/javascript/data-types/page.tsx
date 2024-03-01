import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { dataTypes } from '@/lib/data/javascript/dataTypes'

console.log(dataTypes)

const DataTypes = () => {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row">
      <div className="w-full lg:w-1/2">
        <CardWrapper>
          <SmallTitle>{dataTypes.title}</SmallTitle>
          <h3 className=" text-base ">{dataTypes.desc1}</h3>
          <h3 className=" text-base ">{dataTypes.desc2}</h3>
          <Separator className="mt-4  bg-slate-300" />
        </CardWrapper>
      </div>
      <div>
        <CodeHighlighting data={dataTypes.code1} variant={'small'} />
      </div>
    </div>
  )
}
export default DataTypes
