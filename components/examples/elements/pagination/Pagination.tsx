import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { pagination } from '@/lib/data/elements/pagination'

import ListProducts from './ListProducts'

const Pagination = () => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col gap-1 h-full">
          <ListProducts />
        </div>
        <CodeHighlighting data={pagination} variant={'medium'} />
      </div>
    </>
  )
}

export default Pagination
