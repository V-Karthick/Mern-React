import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='z-10'><Navbar login={"Login"} signin={"Sign In"}/></div>
      <div><Login/></div>
    </div>
  )
}

export default App