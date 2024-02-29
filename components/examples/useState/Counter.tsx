import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import CardWrapper from '../../common/Card'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { counter } from '@/lib/data/useState/data'
import CounterButtons from './CounterButtons'
import ImageModal from '@/components/ImageModal'

const Counter = () => {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center md:flex-row  ">
      <div>
        <CodeHighlighting data={counter} variant={'default'} />
      </div>
      <div className=" w-full lg:w-1/3">
        <CardWrapper>
          <div className="flex  md:flex-col">
            <div className="w-[70%] md:w-[100%]">
              <SmallTitle>Подсчет количества рендеров</SmallTitle>
              <Separator className="mt-4  bg-slate-300" />
              <CounterButtons />
            </div>
            <ImageModal
              path="/images/useState.png"
              path500="/images/useState_500.png"
            />
          </div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Counter
