import React from 'react'
import './App.css'
import { MyBalance } from './components/Balance/MyBalance'
import { Spending } from './components/Spending/Spending'

function App() {
  return (
    <div className='expensesApp'>
      <MyBalance />
      <Spending />
    </div>
  )
}

export default App
