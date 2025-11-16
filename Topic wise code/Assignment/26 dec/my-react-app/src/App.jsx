import { useState } from 'react'
import FormValidation from './component/form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormValidation/>
    </>
  )
}

export default App
