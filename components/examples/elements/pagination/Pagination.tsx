'use client'
import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import { pagination } from '@/lib/data/elements/pagination'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const isAuth = true

async function getData(skip: number = 0): Promise<{ data: any }> {
  return axios.get(`https://dummyjson.com/products/?limit=10&skip=${skip}`)
}
const Pagination = () => {
  const [page, setPage] = useState(0)
  const { data, isLoading, isSuccess, isError, isFetched } = useQuery({
    queryKey: ['post', page],
    queryFn: () => getData(page),
    select: (data) => data.data, // избавляемся от лишней data
    enabled: isAuth, // отключает включает запросник
    retry: 1, // (0) при ошибке один запрос и успокоился, если (1) то будет 2
    refetchOnWindowFocus: false // запрос при фокусе
  })

  useEffect(() => {
    if (isSuccess) console.log('получено успешно')
  }, [isSuccess])
  useEffect(() => {
    if (isError) console.log('получено ошибка')
  }, [isError])

  if (isLoading) {
    return <div className=" ">loading...</div>
  }
  if (isError) {
    return <div className=" ">Ошибка</div>
  }
  if (!data) {
    return <div className=" ">Нет данных</div>
  }

  console.log(data.products)
  return (
    <>
      <div>
        {/* <div>
          {data.products.map((product) => (
            <h3 key={product.id}>{product.title}</h3>
          ))}

          <button
            onClick={() => setPage((p: number) => p - 1)}
            disabled={!page}
          >
            Назад
          </button>
          <button onClick={() => setPage((p: number) => p + 1)}>Далее</button>
        </div> */}
        <CodeHighlighting data={pagination} variant={'medium'} />
      </div>
    </>
  )
}

export default Pagination
