import React from 'react'

const Nav = () => {
  const pdfOpener = ()=>{
    window.open('')
  }
  return (
    <div className='w-[100vw] h-[50px] flex justify-around '>
      <h1 className='text-white-500 text-[30px] m-3 font-extrabold text-xl md:text-[30px]'>Phenyl</h1>
      <button className='w-[100px] h-[30px] mt-2 mr-1 border-2 border-none rounded-md bg-green-500 text-white-500 md:mr-4 md:w-[200px] md:h-[60px] md:text-[20px]'>RESUME</button>
    </div>
  )
}

export default Nav