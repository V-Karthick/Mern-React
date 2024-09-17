import React from 'react'
// import Login from './pages/Login'
import Navbar from './components/Navbar'
import Display from './pages/Display'

const App = () => {
  const data = [{
    user:"John",
    message:"Hello",
    time:"12.13"
  },
  {
    user:"Kenny",
    message:"World",
    time:"12.13"
  },
  {
    user:"Ram",
    message:"HelloWorld",
    time:"12.13"
  },
  {
    user:"Raj",
    message:"Hii",
    time:"12.13"
  }
]
  return (
    <div className='h-screen w-screen'>
      <div className='z-10'><Navbar login={"Login"} signin={"Sign In"}/></div>
      <div><Display data={data}/></div>
    </div>
  )
}

export default App