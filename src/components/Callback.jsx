import React, { useCallback } from 'react'
import { useState } from 'react'

const ChildCallback = ({ onClick }) => {
    console.log("Child callback is rendered")
    return <><button onClick={onClick}>Click</button></>
}

const Callback = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        alert("Button clicked")
    }, [])
    return (
        <div>
            <h2>Count:{count}</h2>
            <ChildCallback onClick={handleClick} />
            <button onClick={() => setCount((prev) => prev + 1)}>Inc count</button>
        </div>
    )
}

export default Callback
