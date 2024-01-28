import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    
      
        <a onClick={() => setCount( count * 2)}>
          count is {count}
        </a>
      
   
  )
}

export default App
