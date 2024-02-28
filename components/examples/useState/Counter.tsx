import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'
import CardWrapper from '../../common/Card'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { codeUseState } from '@/lib/data/useState/data'
import CounterButtons from './CounterButtons'
import ImageModal from '@/components/ImageModal'

const Counter = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <CodeHighlighting data={codeUseState} variant={'default'} />
      </div>
      <div className=" flex flex-col">
        <CardWrapper>
          <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <Separator className="mt-4  bg-slate-300" />
          <CounterButtons />
          <ImageModal
            path="/images/useState.png"
            path500="/images/useState_500.png"
          />
        </CardWrapper>
      </div>
    </div>
  )
}

export default Counter
