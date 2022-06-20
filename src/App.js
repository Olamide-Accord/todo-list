import React from 'react'
import Header from './components/Header'
import ToDo from './components/Todo';
import { useGlobalContext } from './context'

const App = () => {
  const {theme} = useGlobalContext();
  return (
    <div className="App" id={theme}>
      <Header/>
      <ToDo/>
    </div>
  )
}

export default App
