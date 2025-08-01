import { useState } from 'react'
import React from 'react'
import HeaderComponent from './Component/Header.component'
import Herocomonent from './Component/Hero.comonent'

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
      <HeaderComponent/>
      <Herocomonent/>
      </>
    )
  }

export default App
