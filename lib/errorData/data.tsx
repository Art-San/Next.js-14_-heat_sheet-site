// 'use client'
// import { useEffect, useState } from 'react'

// export default function Fetch() {
//   const [product, setProduct] = useState()

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/1')
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data)
//       })
//   }, [])

//   return (
//     <div className="">
//       <h1>{product?.title}</h1>

//       <h2>Описание</h2>

//       <p>{product?.description}</p>
//     </div>
//   )
// }

// 1. В product.title и product.description после product ставим "?".
// 2. const [product, setProduct] = useState() если мы предполагаем что product изначально пустой то использовать undefined не верно, использовать null
// 3. Можем добавить State для ЗАГРУЗКИ [loading, setLoading]

export const errorFitch = `import { useEffect, useState } from "react";

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

export const fixErrFitch = `interface IProduct {title: string, description: string}
// interface for TS
export default function Fetch() {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<IProduct | null>(null)
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((data: IProduct) => {
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

// 1. С useEffect все работает, но он тут попросту не нужен
export const errorPrice = `const PRICE_ITEM = 10
export default function Price() {
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleClick = () => {
    setQuantity((prev) => prev + 1)
  }
  useEffect(() => {
    setTotalPrice(quantity * PRICE_ITEM)
  }, [quantity])

  return (
    <div className="">
      <button
      onClick={handleClick}
      > Добавить 1 товар
      </button>
      <p>итоговая цена: {totalPrice}</p>
    </div>
  )
}`

export const fixErrorPrice = `const PRICE_ITEM = 10
export default function Price() {

  const [quantity, setQuantity] = useState(1)
  const totalPrice = quantity * PRICE_ITEM

  const handleClick = () => {

    setQuantity((prev) => prev + 1)
  }


  return (
    <div className="">
      <button
       onClick={handleClick}> 
          Добавить 1 товар
      </button>
      <p>итоговая цена: {totalPrice}</p>
    </div>
  )
}`

export const userError = `export default function User() {
  const [user, setUser] = useState({ 
    name: '', 
    age: '42', 
    counter: '' 
  })
 // ChangeEvent<HTMLInputElement> for TS
  const handleChance = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((user.name = e.target.value))
  }

  return (
    <form className="">
      <input onChange={handleChance}
      type="text" placeholder="Ваше имя" />
    </form>
  )
}`

export const fixUserError = `export default function User() {
  const [user, setUser] = useState({ 
    name: '', 
    age: '42', 
    counter: '' 
  })
 // ChangeEvent<HTMLInputElement> for TS
  const handleChance = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value })
  }

  return (
    <form className="">
      <input onChange={handleChance}
      type="text" placeholder="Ваше имя" />
    </form>
  )
}`

export const bigFormError = `export default function BigForm() {

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
 
  return (
    <form className="">
      <input
          onChange={handleChance}
          type="text"
          name="name"
          placeholder="Имя" />
      <input
          onChange={handleChance}
          type="email" 
          name="email" 
          placeholder="Почта" />
      <input
          onChange={handleChance}
          type="password"
          name="password"
          placeholder="Пароль" />
    </form>
  )
}`

export const fixBigFormError = `export default function BigForm() {
  const [data, setData] = useState({
    name: '', email: '', password: ''
  })
  const handleChance = (
    e: ChangeEvent<HTMLInputElement>
    ) => {
    setData({ 
      ...data, [e.target.name]: e.target.value })
  }
  return (
    <form className="">
      <input
          onChange={handleChance}
          type="text"
          name="name"
          placeholder="Имя" />
          
      <input
          onChange={handleChance}
          type="email" 
          name="email" 
          placeholder="Почта" />
      <input
          onChange={handleChance}
          type="password"
          name="password"
          placeholder="Пароль" />
    </form>
  )
}`

export const peculiarityUseState = `export default function ClickMe() {
  console.log('Рендер ') // Только раз
  // Так как "100" там и там,
  // react не рендерит одно и тоже повторно
  const [price, setPrice] = useState(100)

  const handleClick = () => {
    setPrice(100)
  }
  return (
    <div className="">
      <button onClick={handleClick}>Жми</button>
    </div>
  )
}`

export const useStateUseEffect = `export default function BigForm() {
  console.log('Рендер ') // Каждый раз при нажатии кнопки
  // { num: 100, price: true } так это ссылочный объект
  const [price, setPrice] = useState({ num: 100, price: true })

  const handleClick = () => {
    setPrice({ num: 100, price: true })
  }

  // чтоб не использовался useEffect
  // ссылаемся на элемент объекта "price.num"
  useEffect(() => {
    console.log('я использован')
  }, [price.num])
  return (
    <div className="">
      <button onClick={handleClick}>Жми</button>
    </div>
  )
}`
