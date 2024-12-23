
import { useState } from 'react'
const useCusMemo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("John")

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleName = () => {
    setName(name === "John" ? "Jane" : "John")
  }

  return { count, name, handleCount, handleName }
}

export default useCusMemo
