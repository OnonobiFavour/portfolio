import React from 'react'

const Nav = () => {
  return (
    <div className='w-[100vw] h-[50px] flex justify-between'>
      <h1 className='text-white-500 text-[30px] m-3 font-extrabold text-xl'>Portfolio</h1>
      <button className='w-[100px] h-[30px] mt-2 mr-1 border-2 border-none rounded-md bg-green-500 text-white-500'>RESUME</button>
    </div>
  )
}

export default Nav