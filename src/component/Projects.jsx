import React from 'react'
import {project} from './Js/Projects'

const Projects = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-[3rem]'>
        <h1 className='text-[40px] font-bold border-r-2 border-green-500 w-[100vw] py-5 text-center'>Projects</h1>
        <main>
            {
                project.map((item, index) =>{
                    return(
                        <div key={index} className='w-[300px] h-[200px] bg-black shadow-xl rounded-md px-5 pt-4 my-[2rem]'>
                            <h1 className='text-[20px] pb-3'>{item.head}</h1>
                            <span>{item.msg}</span> <br />
                            <a href={item.code} className='text-green-500 pt-2'>Browse Code{'>>'}</a>
                        </div>
                    )
                })
            }
        </main>
    </div>
  )
}

export default Projects