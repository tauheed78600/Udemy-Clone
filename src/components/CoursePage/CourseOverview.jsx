import React from 'react'
import { Check, SquarePlay, Download, TabletSmartphone, Captions, Trophy } from 'lucide-react'
import { Button } from '../ui/button'
import ContentCourse from './ContentCourse'

function CourseOverview() {
    return (
        <div
        className={`ml-6 md:ml-12 w-[90%] ${
          window.innerWidth >= 1024 ? 'lg:ml-[200px] lg:w-[730px]' : 'lg:w-full'
        }`}
      >      
            <div className='border-2 lg:w-[90%] mt-8 px-4 lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out'>
                <div className="lg:h-[215px] lg:flex lg:items-center lg:justify-between flex flex-col items-center">
                    <p className='text-2xl font-extrabold w-full text-center lg:w-72 lg:text-left mb-4 lg:mb-0'>What You'll Learn</p> 
                    <div className='flex flex-col lg:flex-row lg:gap-20 md:w-auto md:flex-col w-full lg:w-auto'>
                        <div className='text-sm flex flex-col gap-3 w-full lg:w-auto mb-4 lg:mb-0 items-center lg:items-start'> 
                            <p className='flex items-center gap-2'><Check />Completely refilmed for 3rd edition</p>
                            <p className='flex items-center gap-2'><Check />Create Express web servers and APIs</p>
                            <p className='flex items-center gap-2'><Check />Use cutting-edge ES6/ES7 JavaScript</p>
                            <p className='flex items-center gap-2'><Check />Create real-time web apps with SocketIO</p>
                        </div>
                        <div className='text-sm flex flex-col gap-3 w-full lg:w-auto items-center lg:items-start'>
                            <p className='flex items-center gap-2'><Check />Build, test, and launch Node apps</p>
                            <p className='flex items-center gap-2'><Check />Store data with Mongoose and MongoDB</p>
                            <p className='flex items-center gap-2'><Check />Deploy your Node apps to production</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <p className='font-extrabold text-xl'>Explore Related Topics</p>
                <div className='flex lg:justify-start flex-wrap mt-4 gap-5'>
                    <Button className='rounded-3xl h-[50px] w-[120px] text-xl font-extrabold text-black bg-white border border-black hover:bg-gray-200 hover:scale-110 transition-transform duration-300 ease-in-out'>NodeJs</Button>
                    <Button className='rounded-3xl h-[50px] hover:scale-110 transition-transform duration-300 ease-in-out text-xl w-[270px] hover:bg-white bg-white border-black text-black font-extrabold'>Programming Languages</Button>
                    <Button className=' rounded-3xl h-[50px] hover:scale-110 transition-transform duration-300 ease-in-out text-xl w-[170px] hover:bg-white bg-white border-black text-black font-extrabold'>Development</Button>
                </div>
            </div>
            <div className='mt-6 font-extrabold text-xl'>
                <p>This Course Includes</p>
                <div className='grid grid-cols-2 lg:w-[650px] w-[90%] gap-5'>
                    <div className='text-sm font-semibold mt-3 flex flex-col gap-4'>
                        <p className='flex justify-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'><SquarePlay />35 Hours on-demand video</p>
                        <p className='flex justify-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'><Download />143 Downloadable resources</p>
                        <p className='flex justify-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'><TabletSmartphone />Access on Mobile and TV</p>
                    </div>
                    <div className='text-sm font-semibold mt-3 flex flex-col gap-4'>
                        <p className='flex justify-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'><Captions />Closed captions</p>
                        <p className='flex justify-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out'><Trophy />Certificate of completion
                        </p>
                    </div>
                </div>
            </div>
            <div className='border lg:h-[150px] h-auto lg:w-[90%] w-[90%] mt-6 p-4 text-sm lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out'>
                <p className='text-xl font-extrabold'>Top companies offer this course to their employees</p>
                <p className='mt-1'>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <span className='text-violet-800 underline underline-offset-1'>Learn more</span></p>
                <div className='flex lg:justify-around flex-wrap gap-3 mt-4'>
                    <img src='NasdaqDark.png'></img>
                    <img src='VolkswagenDark.png'></img>
                    <img src='BoxDark.png'></img>
                    <img src='NetAppDark.png'></img>
                    <img src='EventbriteDark.png'></img>
                </div>
            </div>
            <ContentCourse />
        </div>
    )
}

export default CourseOverview
