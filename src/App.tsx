import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import {Bar} from './Start/Bar/Bar'
import {Home} from './Start/Pages/Home'
import {About} from './Start/Pages/About'
import {Pricing} from './Start/Pages/Pricing'
import {FAQ} from './Start/Pages/FAQ'
import {Contact} from './Start/Pages/Contact'
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
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
      
    </>
  )
}

export default App
