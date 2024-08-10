import { useState } from 'react'
import {Bar} from './Start/Bar/Bar'
import {Home} from './Start/Pages/Home'
import logo from './assets/logo.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* there needs to be two serperate conatiners for two pretty much applications, one to be thew discovery application and the other to be the actual app*/}
    <div className="StarterBar">
      <Bar />
    </div>
    <div className='StarterLinks'>
      <Home />
    </div>
      
    </>
  )
}

export default App
