import React from 'react'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'

const Home = () => {
  return (
    <section className='h-full w-full bg-[#00100d] text-violet-50'>
      <Nav/>
      <header className='flex justify-center items-center flex-wrap mt-[5rem] md: justiify-around ml-6'>
        <div className='flex flex-col '>
          <span className='text-[30px] font-[500] py-3'>Crafting Creativity: The journey..</span>
          <h1 className='text-[20px] w-[320px] font-[100] pb-5'>Welcome to my creative universe! i'm Ononobi Favour, a frontend developer and a technical writer</h1>
        </div>
        <div className='w-[200px] ml-5 h-[200px] border-green-600 border-2 rounded-full mr-[2.5rem]'>
          <img className='rounded-full' src="../src/assets/profilePics.jpg" alt="" />
        </div>
      </header>

      <About />
      <Projects />
    </section> 
  )
}

export default Home