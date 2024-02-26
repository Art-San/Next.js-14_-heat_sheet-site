export const codeUseState = `const Counter = () => {
    const [count, setCount] = useState(0)
  
    const handleIncrement = () => {
      // setCount(count + 1) // эти два
      // setCount(count + 1) // с хлопнутся
      setCount((prevState) => prevState + 1)
      setCount((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
      setCount((prevState) => prevState - 1)
    }
    return (
      <div>
        <p>Count: {count}</p>
        <button
        onClick={handleDecrement}>минус</button>
        <button
        onClick={handleIncrement}>плюс</button>
      </div>
    )
  }
  
  export default Counter`
