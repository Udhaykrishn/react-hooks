import React from 'react'
import useCusMemo from '../hooks/useCusMemo'
import CounterMemo from './CounterMemo'

const Memo = () => {
    console.log('parent')
    const {name,handleName} = useCusMemo()
  return (
    <div>
      <h2>Name:{name}</h2>
      <button onClick={handleName}>{name === "John"? "Jane" : "John"}</button>

      <CounterMemo />
    </div>
  )
}

export default Memo
