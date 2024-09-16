import React from 'react'
import { Loader } from 'lucide-react'

const Login = () => {
  return (
    <div className="w-screen h-screen bg-purple-600 flex justify-center items-center">
      <div className='w-[30%] h-[50%] bg-purple-300 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-lg'> Form</h2>
        <form className='flex flex-col justify-center items-center'>
          <input className='p-2 rounded-md m-2 border-b-4 border-purple-800' type='text' placeholder='Name'></input>
          <input className='p-2 rounded-md m-2 border-b-4 border-purple-800' type='text' placeholder='Email'></input>
          <input className='p-2 rounded-md m-2 border-b-4 border-purple-800' type='text' placeholder='Password'></input>
          
          <button className='flex py-2 px-3 bg-purple-700 text-white m-2 rounded-md'><Loader className='animate-spin mr-3' /> Register</button>
        </form>
      </div>
    </div>
  )
}

export default Login