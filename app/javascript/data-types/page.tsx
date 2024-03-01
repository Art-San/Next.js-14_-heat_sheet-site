import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'

const dataTypes = {
  id: 3,
  slag: 'data-types',
  name: 'Введение',
  title: 'Введение',
  like: false,
  desc1:
    'JavaScript — это высокоуровневый, динамический и интерпретируемый язык программирования, который широко используется для веб-разработки и других приложений.',
  desc2:
    'В основном он используется для добавления интерактивности и других динамических функций на веб-сайты, но его также можно использовать для серверного программирования, настольных приложений и многого другого.',
  desc3: '',
  code1: `console.log('Javascript is a Great Language!')`,
  code2: '',
  code3: ''
}

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
