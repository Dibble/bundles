import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter
