import loadable from '@loadable/component'
import { useState } from 'react'
import Loading from './Loading'

const Counter = loadable(() => import(/* webpackPrefetch: true */ './Counter'))
const Todo = loadable(() => import(/* webpackPrefetch: true */ './Todo'))

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
      {currentApp === 'counter' && <Counter fallback={<Loading />} />}
      {currentApp === 'todo' && <Todo fallback={<Loading />} />}
    </>
  )
}

export default App
