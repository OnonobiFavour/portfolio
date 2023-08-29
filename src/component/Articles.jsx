import React from 'react'
import { articles} from './JS/Writeups'

const Articles = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-[3rem]'>
      <h1 className='text-[40px] font-bold border-l-2 border-green-500 w-[100vw] py-5 text-center'>Articles <span className='text-green-500 text-[50px]'>.</span></h1>

      <article>
        {
          articles.map((item, index) =>{
            return(
              <div key={index} className='w-[300px] h-[370px]  bg-black shadow-xl rounded-md px-1 pt-1 my-[2rem] md:flex-col'>
                <img className='w-[300px] h-[200px] rounded-md pb-3' src={item.img} alt="" />
                <h1 className='text-[20px] pb-5'>{item.name}</h1>
                <h3>link: {item.link}</h3>
              </div>
            )
          })
        }
       
      </article>
    </div>
  )
}

export default Articles