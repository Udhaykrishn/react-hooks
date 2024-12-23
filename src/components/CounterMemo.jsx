import React,{memo} from 'react'
import useCusMemo from '../hooks/useCusMemo'

const CounterMemo = () => {
    const {count,handleCount} = useCusMemo()
    console.log(count + " counter")

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleCount}>Click Me</button>
    </div>
  )
}

export default memo(CounterMemo)
