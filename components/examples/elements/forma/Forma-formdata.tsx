import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import Example1 from './Example-1'
import { formaCode } from '@/lib/data/forma/forma'

const Forma = () => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col gap-1 h-full">
          <Example1 />
        </div>
        <CodeHighlighting data={formaCode} variant={'medium'} />
      </div>
    </>
  )
}

export default Forma
