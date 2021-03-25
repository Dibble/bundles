import loadable from '@loadable/component'
import { useState } from 'react'

const Counter = loadable(() => import('./Counter'))
const Todo = loadable(() => import('./Todo'))

const App = () => {
  const [currentApp, setCurrentApp] = useState('none')

  return (
    <>
      <h1>Select App</h1>
      <select value={currentApp} onChange={e => setCurrentApp(e.target.value)}>
        <option value='none'>none</option>
        <option value='counter'>counter</option>
        <option value='todo'>todo</option>
      </select>
      {currentApp === 'counter' && <Counter />}
      {currentApp === 'todo' && <Todo />}
    </>
  )
}

export default App
