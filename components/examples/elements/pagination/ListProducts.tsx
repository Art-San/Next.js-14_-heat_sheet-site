'use client'
import axios from 'axios'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { IResProducts } from '@/types/product.types'
import { Button } from '@/components/ui/button'
import { Spinner1 } from '@/components/ui/spinner-1'

const isAuth = true

async function getData(
  skip: number,
  limitItem: number,
  meta: any
): Promise<{ data: IResProducts }> {
  return axios.get(
    `https://dummyjson.com/products/?limit=${limitItem}&skip=${skip}`,
    { signal: meta.signal }
  )
}
const ListProducts = () => {
  const [page, setPage] = useState(0)
  const limitItem = 10
  // console.log(11, page)
  const { data, isLoading, isSuccess, isError, isPlaceholderData } = useQuery({
    queryKey: ['post', page],
    queryFn: (meta) => getData(page, limitItem, meta),
    select: (data) => data.data,
    placeholderData: keepPreviousData,
    staleTime: 1 * 60 * 1000,
    // gcTime: 1000 * 60 * 5,
    enabled: isAuth
    // retry: 1,
    // refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isSuccess) console.log('получено успешно')
  }, [isSuccess])
  useEffect(() => {
    if (isError) console.log('получено ошибка')
  }, [isError])

  if (isLoading) {
    return (
      <div className="flex h-full justify-center items-center">
        <Spinner1
          className="mr-2 h-4 w-4 animate-spin"
          aria-label="Получение продуктов"
        />
      </div>
    )
  }
  if (isError) {
    return <div className=" ">Ошибка</div>
  }
  if (!data) {
    return <div className=" ">Нет данных</div>
  }
  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber * limitItem)
  }

  const totalPages = Math.ceil(data?.total / limitItem)

  const showEllipsisBefore = totalPages > 3
  const showEllipsisAfter = totalPages > 3
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i)

  return (
    <>
      <div
        className={
          'flex flex-col gap-4' + (isPlaceholderData ? ' opacity-30' : '')
        }
      >
        {data &&
          data.products.map((product) => (
            <h3
              key={product.id}
              className={isPlaceholderData ? ' text-yellow-400' : ''}
            >
              {product.title} {''} {product.id}
            </h3>
          ))}
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setPage((p: number) => p - limitItem)}
          disabled={!page}
        >
          Назад
        </Button>
        {showEllipsisBefore && <span>...</span>}
        {pagesArray.slice(0, 3).map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            disabled={page === pageNumber}
          >
            {pageNumber + 1}
          </Button>
        ))}
        {showEllipsisAfter && <span>...</span>}
        {pagesArray.length > 3 && (
          <Button
            onClick={() => handlePageClick(pagesArray[pagesArray.length - 1])}
            disabled={
              Math.ceil((data.skip + limitItem) / limitItem) === totalPages
            }
          >
            {pagesArray[pagesArray.length - 1] + 1}
          </Button>
        )}
        <Button
          onClick={() => setPage((p) => p + limitItem)}
          disabled={
            Math.ceil((data.skip + limitItem) / limitItem) === totalPages
          }
        >
          Далее
        </Button>
      </div>
    </>
    // <>
    //   {data &&
    //     data.products.map((product) => (
    //       <h3 key={product.id}>
    //         {product.title}
    //         {''} {product.id}
    //       </h3>
    //     ))}
    //   <div className=" flex justify-between">
    //     <Button onClick={() => setPage((p: number) => p - 1)} disabled={!page}>
    //       Назад
    //     </Button>
    //     {pagesArray.map((pageNumber) => (
    //       <Button
    //         key={pageNumber}
    //         onClick={() => handlePageClick(pageNumber)}
    //         disabled={page === pageNumber}
    //       >
    //         {pageNumber + 1}
    //       </Button>
    //     ))}
    //     <Button onClick={() => setPage((p: number) => p + 1)}>Далее</Button>
    //   </div>
    // </>
  )
}

export default ListProducts
