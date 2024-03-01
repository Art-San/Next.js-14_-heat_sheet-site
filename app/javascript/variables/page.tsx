import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import { variables, dataVariables } from '@/lib/data/javascript/dataJavascript'
import CompTable from '@/components/CompTable'

const Variables = () => {
  return (
    <>
      <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2">
          <CardWrapper>
            <SmallTitle>{variables.title}</SmallTitle>
            <h3 className=" text-base ">{variables.desc1}</h3>
            <h3 className=" text-base ">{variables.desc2}</h3>
            <Separator className="mt-4  bg-slate-300" />
          </CardWrapper>
        </div>
        <div>
          <CodeHighlighting data={variables.code1} variant={'small'} />
        </div>
      </div>
      <CompTable arr={dataVariables} />
    </>
  )
}
export default Variables
