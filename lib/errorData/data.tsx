// 'use client'
// import { useEffect, useState } from 'react'

// export default function Fetch() {
//   const [loading, setLoading] = useState(true)
//   const [product, setProduct] = useState(undefined)

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/1')
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data)
//         setLoading(false)
//       })
//   }, [])

//   return (
//     <div className="">
//       {loading ? (
//         'Загрузка...'
//       ) : (
//         <>
//           <h1>{product?.title}</h1>
//           <h2>Описание</h2>
//           <p>{product?.description}</p>
//         </>
//       )}
//     </div>
//   )
// }
// 1. В product.title и product.description после product ставим "?" и первоначальое состояние должно быть "null", но не "undefined"
// 2. Можем добавить State для ЗАГРУЗКИ

export const errorData = `import { useEffect, useState } from "react";

export default function Fetch() {
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)
        })
    }, [])

    return(
        <div className="">
            <h1>{product.title}</h1> // Error
            <h2>Описание</h2>
            <p>{product.description}</p> // Error
        </div>
    )
}`

export const bugFixed = `export default function Fetch() {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="">
      {loading ? (
        'Загрузка...'
      ) : (
        <>
          <h1>{product?.title}</h1>
          <h2>Описание</h2>
          <p>{product?.description}</p>
        </>
      )}
    </div>
  )
}`
