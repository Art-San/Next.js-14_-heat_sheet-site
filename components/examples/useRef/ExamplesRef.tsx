// import { useCallback, useEffect, useReducer, useRef, useState } from 'react'

// export default function ExamplesRef() {
//   return (
//     <div className="App">
//       <h2>Input ref</h2>
//       <InputRef />
//       <h2>Rerender counter</h2>
//       <RerenderCounter />
//       <h2>Interval example</h2>
//       <IntervalExample />
//     </div>
//   )
// }

// // Используем рефы для получения доступа к дом нодам
// function InputRef() {
//   const inputRef = useRef(null)

//   console.log(inputRef.current)
//   const handleClick = () => {
//     inputRef.current.focus()
//   }

//   useEffect(() => {
//     console.log(inputRef.current)
//   })

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   )
// }

// // Используем рефы для хранения мутабельной информации
// function RerenderCounter() {
//   const [counter, setCounter] = useState(0)
//   const [rerenderCount, setRerenderCount] = useState(0)
//   const renderCounterRef = useRef(0)

//   useEffect(() => {
//     setRerenderCount((r) => r + 1)
//   }, [counter])

//   renderCounterRef.current += 1
//   console.log('rerender')

//   return (
//     <>
//       <div>Counter: {counter}</div>
//       <div>{renderCounterRef.current}</div>
//       <button onClick={() => setCounter((s) => s + 1)}>increment</button>
//     </>
//   )
// }

// // Используем рефы для передачи коллбека в эффект
// const useEffectEvent = (callback) => {
//   const ref = useRef(callback)

//   ref.current = callback

//   return useCallback((...args) => {
//     ref.current(...args)
//   }, [])
// }

// function useInterval(interval, enabled, onTick) {
//   //const onTickEvent = useEffectEvent(onTick);
//   useEffect(() => {
//     if (!enabled) return
//     const i = setInterval(() => {
//       onTick()
//     }, interval)
//     return () => clearInterval(i)
//   }, [interval, enabled, onTick])
// }

// function IntervalExample() {
//   const [counter, setCounter] = useState(0)
//   const [, rerender] = useReducer((s) => s + 1, 0)
//   useInterval(1000, false, () => {
//     console.log(counter)
//     setCounter((s) => s + 1)
//   })

//   console.log('rerender')

//   return (
//     <>
//       <div>Counter: {counter}</div>
//       <button onClick={() => rerender()}>increment</button>
//     </>
//   )
// }
