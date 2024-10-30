import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { pagination } from '@/lib/data/elements/pagination'
import Example1 from './Example-1'

const Forma = () => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col gap-1 h-full">
          <Example1 />
        </div>
        {/* <CodeHighlighting data={pagination} variant={'medium'} /> */}
      </div>
    </>
  )
}

export default Forma
