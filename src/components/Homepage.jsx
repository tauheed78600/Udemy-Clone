import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeBelow1 from './HomeBelow1'
import LearnNext from './LearnNext'
import TopPicks from './TopPicks'
import LearnersView from './LearnersView'
import Ratings from './Ratings'
import ShortCourses from './ShortCourses'
import NewMlCourses from './NewMlCourses'
import AICourses from './AICourses'
import NodeJSCourses from './NodeJSCourses'
import WebDevCourses from './WebDevCourses'
import Footer from './Footer'

function Homepage() {
  return (
    <div className="min-h-screen overflow-auto flex flex-col bg-white">
      <div className='flex justify-start'>
      <div className='ml-[100px] h-16 w-16 border-2 rounded-full bg-black mt-8'>
        <p className='text-white p-3 text-2xl'>TD</p>
      </div>
      <div>
        <p className='mt-8 ml-4 font-extrabold text-2xl'>Welcome Back, Tauheed</p>
        <p className='ml-4 mt-3 text-violet-900 font-bold underline underline-offset-1 text-sm'>Add Occupation and Interests</p>
      </div>
      </div>

      <HomeCarousel/>
      <HomeBelow1/>
      <LearnNext/>
      <TopPicks/>
      <LearnersView/>
      <Ratings/>
      <ShortCourses/>
      <NewMlCourses/>
      <AICourses/>
      <NodeJSCourses/>
      <WebDevCourses/>
      <Footer/>
    </div>
  )
}

export default Homepage
