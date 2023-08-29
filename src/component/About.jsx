import React from 'react'
import {Skills} from './JS/Skills'

const About = () => {
  return (
    <section className='h-full flex flex-col items-center justify-center w-[100vw]'>
        <h1 className='text-[40px] font-bold border-l-2 border-green-500 w-[100vw] py-5 text-center mt-[9rem] '>About Me</h1>
        <article className='flex items-center justify-center'>
            <p className='text-center py-[3rem] px-2 md:w-[900px] text-[20px]'>
             <span className='text-[40px] font-bold'>P</span>assionate Frontend developer with expertise in HTML, CSS, and JavaScript. With the knowledge of their frameworks like React, Vue, NextJs, and tailwind Css. Skilled in technical writing, effectively communicating complex concepts.Knowledgable on the backend technologies like NodeJs.Commited to creating visually appealing and user-friendly websites. Goal-driven and continous learning to deliver innovative solutions.
            </p>
        </article>
        <span className='font-bold text-[30px] ml-4 mt-[2rem] mb-10'>Skills:</span>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-4 ml-4 md:w-[900px]'>
          {
            Skills.map((item) =>{
              return(
                <div className='bg-[#020a09d1] pl-5 w-[100px] h-[30px] user-select-none border-none text-white-500 mb-2 rounded-md hover: bg-green-900 md:w-[150px] md:h-[50px] md:text-center md:pt-2 md:text-[20px]'>{item.name}</div>
              )
            })
          }
        </div>
    </section>
  )
}

export default About