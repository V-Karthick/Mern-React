import React from 'react'

const Display = ({data}) => {
  return (
    <div className='h-screen w-screen bg-purple-600 flex flex-col justify-center'>
        <h1 className='text-xl text-white'>Messages</h1>
        <div className='flex h-[50%] w-[90%]'>
        {
            data.map((item, index)=>(
                <div key={index} className='h-[30%] w-[20%] bg-purple-300 m-2 p-2 rounded-md   flex flex-col justify-between'>
                    <h2 className='text-white font-bold'>{item.user}</h2>
                    <p>{item.message}</p>
                    <h3 className='text-gray-500'>{item.time}</h3>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Display