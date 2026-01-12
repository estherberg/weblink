import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebLinkDevelopment from './WebLinkDevelopment'

function App() {
  const [count, setCount] = useState(0)

  return <WebLinkDevelopment />
}

export default App
