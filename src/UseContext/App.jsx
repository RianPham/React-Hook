import React from 'react'
import Content from './Content'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import './App.scss'

 //  UseContext()
    //  Theme: Dark / Light
    //  compA => compC
    //  1. create context

    //  2. provider => cung cấp dữ liệu
    //  3. consumer => Nhận dữ liệu

function App() {
  const context = useContext(ThemeContext)
  return (
    <div className="App" style={{padding: '20px'}}>
      <button onClick={context.toggleTheme}>Toggle</button>
      <Content />
    </div>
  )
}

export default App