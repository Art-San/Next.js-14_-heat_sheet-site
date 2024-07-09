'use client'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { IResProducts } from '@/types/product.types'
import { Button } from '@/components/ui/button'
import { Spinner1 } from '@/components/ui/spinner-1'

const isAuth = true

async function getData(skip: number = 0): Promise<{ data: IResProducts }> {
  return axios.get(`https://dummyjson.com/products/?limit=10&skip=${skip}`)
}
const ListProducts = () => {
  const [page, setPage] = useState(0)
  const { data, isLoading, isSuccess, isError, isFetched } = useQuery({
    queryKey: ['post', page],
    queryFn: () => getData(page),
    select: (data) => data.data,
    enabled: isAuth,
    retry: 1,
    refetchOnWindowFocus: false
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

  console.log(123, data)
  return (
    <>
      {data &&
        data.products.map((product) => (
          <h3 key={product.id}>{product.title}</h3>
        ))}
      <div className=" flex justify-between">
        <Button onClick={() => setPage((p: number) => p - 1)} disabled={!page}>
          Назад
        </Button>
        <Button onClick={() => setPage((p: number) => p + 1)}>Далее</Button>
      </div>
    </>
  )
}

export default ListProducts
