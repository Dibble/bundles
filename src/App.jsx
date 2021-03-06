import React, { useState } from 'react'
import loadable from '@loadable/component'
import Loading from './Loading'

// import Counter from './Counter'
// import Todo from './Todo'

const Counter = loadable(() => import(/* webpackPrefetch: true */ './Counter'), {
  fallback: <Loading />
})
const Todo = loadable(() => import(/* webpackPrefetch: true */ './Todo'), {
  fallback: <Loading />
})

const App = () => {
  const [currentApp, setCurrentApp] = useState('none')

  return (
    <>
      <h1>Select An App</h1>
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
