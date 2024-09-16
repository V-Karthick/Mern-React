import React from 'react'

const Navbar = ({login, signin}) => {
  return (
    <div className='h-14 w-screen flex items-center justify-end rounded-md '>
        <div className='py-1 px-3 border-purple-800 border-2 rounded-xl mx-2 text-lg'>{login}</div>
        <div className='py-1 px-3 border-purple-800 border-2 rounded-xl mx-2 text-lg' >{signin}</div>
    </div>
  )
}

export default Navbar