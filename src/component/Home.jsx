import React from 'react'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import Articles from './Articles'

const Home = () => {
  return (
    <section className='h-full w-[100vw] bg-[#00100d] text-violet-50'>
      <Nav/>
      <header className='flex justify-center items-center md:h-[40vh] flex-wrap md:mt-[9rem] md:justify-around sm:w-[100vw] justiify-between'>
        <div className='flex flex-col pl-[2rem] py-[3rem] w-[800px]'>
          <span className='text-[40px] font-[500] py-3'>Crafting Creativity: The journey..</span>
          <h1 className='text-[20px] w-[320px] font-[100] pb-5'>Welcome to my creative universe! i'm Ononobi Favour, a frontend developer and a technical writer.</h1>
          <p className='py-5'>1+ year of experience.Goal-driven and continous learning to deliver innovative solutions.       
           Goal-driven and continous learning to deliver innovative solutions.</p>
          <p>With the use of nice tools, I get to create nice User interfaces, and experience-performance and scalability are top objective on my rador.</p>
        </div>
        <div className='w-[300px] ml-5 h-[300px] border-green-600 border-2 rounded-full mr-[2.5rem]'>
          <img className='rounded-full' src="../src/assets/profilePics.jpg" alt="profile picture" />
        </div>
      </header>

      <About />
      <Projects />
      <Articles />
    </section> 
  )
}

export default Home