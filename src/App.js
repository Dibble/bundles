import { useState } from 'react'

import Counter from './Counter'
import Todo from './Todo'

function App () {
  const [currentApp, setCurrentApp] = useState('none')

  return (
    <>
      <h1>Select App</h1>
      <select value={currentApp} onChange={e => setCurrentApp(e.target.value)}>
        <option value='none' selected={currentApp === 'none'}>none</option>
        <option value='counter' selected={currentApp === 'counter'}>counter</option>
        <option value='todo' selected={currentApp === 'todo'}>todo</option>
      </select>
      {currentApp === 'counter' && <Counter />}
      {currentApp === 'todo' && <Todo />}
    </>
  )
}

export default App
