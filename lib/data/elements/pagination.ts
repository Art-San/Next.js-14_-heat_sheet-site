export const pagination = `import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { IRoot } from './product.types'

const isAuth = true

async function getData(skip: number = 0): Promise<{ data: IRoot }> {
  return axios.get("https://dummyjson.com/products/?limit=10&skip={skip}")
}

function App() {
  const [page, setPage] = useState(0)
  const { data, isLoading, isSuccess, isError, isFetched } = useQuery({
    queryKey: ['post', page],
    queryFn: () => getData(page),
    select: (data) => data.data, // Избавляемся от лишней data
    enabled: isAuth, // отключает включает запросник
    placeholderData: keepPreviousData, // показываются предыдущие данные пока не появятся новые
    staleTime: 1 * 60 * 1000, // срок устаревания данных, по умолчанию 0
    gcTime: 1000 * 60 * 5, // 5 минут по умолчанию, хранение кеша
    retry: 1, // (0) при ошибке один запрос и успокоился, если (1) то будет 2
    refetchOnWindowFocus: false // откл запросов при смене фокусе
  })

  // isLoading срабатывает когда идет первый раз запрос
  // isFetched срабатывает когда данные обновляются из кэша

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
        {data.products.map((product) => (
          <h3 key={product.id}>{product.title}</h3>
        ))}

        <button onClick={() => setPage((p: number) => p - 1)} disabled={!page}>
          Назад
        </button>
        <button onClick={() => setPage((p: number) => p + 1)}>Далее</button>
      </div>
    </>
  )
}

export default App`

// import './App.css'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import { useEffect, useState } from 'react'
// import { IRoot } from './product.types'

// const isAuth = true

// async function getData(skip: number = 0): Promise<{ data: IRoot }> {
//   return axios.get("https://dummyjson.com/products/?limit=10&skip=${skip}")
// }

// function App() {
//   const [page, setPage] = useState(0)
//   const { data, isLoading, isSuccess, isError, isFetched } = useQuery({
//     queryKey: ['post', page],
//     queryFn: () => getData(page),
//     select: (data) => data.data, // избавляемся от лишней data
//     enabled: isAuth, // отключает включает запросник
//     retry: 1, // (0) при ошибке один запрос и успокоился, если (1) то будет 2
//     refetchOnWindowFocus: false // запрос при фокусе
//   })

//   // isLoading срабатывает когда идет первый раз запрос
//   // isFetched срабатывает когда данные обновляются из кэша

//   useEffect(() => {
//     if (isSuccess) console.log('получено успешно')
//   }, [isSuccess])
//   useEffect(() => {
//     if (isError) console.log('получено ошибка')
//   }, [isError])

//   if (isLoading) {
//     return <div className=" ">loading...</div>
//   }
//   if (isError) {
//     return <div className=" ">Ошибка</div>
//   }
//   if (!data) {
//     return <div className=" ">Нет данных</div>
//   }

//   console.log(data.products)

//   return (
//     <>
//       <div>
//         {data.products.map((product) => (
//           <h3 key={product.id}>{product.title}</h3>
//         ))}

//         <button onClick={() => setPage((p: number) => p - 1)} disabled={!page}>
//           Назад
//         </button>
//         <button onClick={() => setPage((p: number) => p + 1)}>Далее</button>
//       </div>
//     </>
//   )
// }

// export default App
