import React from 'react'
import TopicsSlider from '../Homepage/TopicsSlider'
import { Star } from 'lucide-react'
import { Button } from '../ui/button'

function MoreCourses() {


    const courses = [
        {
            name: "Advanced CSS and Sass: Flexbox, Grid, Animations",
            author: "Jonas Schmedtmann",
            stars: 4.9,
            peopleBought: 90000,
            price: "$69.99",
            lastUpdated: "July 2024",
            totalDuration: 22,
            description:
              "Dive deep into advanced CSS concepts like Flexbox, Grid, and animations. Learn how to style modern, responsive websites with best practices.",
            image: "mern.png",
          },
          {
            name: "The Complete React Developer Course",
            author: "Andrew Mead",
            stars: 4.8,
            peopleBought: 150000,
            price: "$79.99",
            lastUpdated: "June 2024",
            totalDuration: 40,
            description:
              "Master React development by building real-world projects. Learn hooks, routing, Redux, and more while developing apps that scale.",
            image: "reactRedux.png",
          },
          {
            name: "The Complete Web Developer in 2024: Zero to Mastery",
            author: "Andrei Neagoie",
            stars: 4.8,
            peopleBought: 130000,
            price: "$99.99",
            lastUpdated: "May 2024",
            totalDuration: 45,
            description:
              "A comprehensive web development course that covers HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and land your dream job.",
            image: "webDev.png",
          },
    ]

    const courses1 = [
        {
            name: "The Complete Node.js Developer Course",
            author: "Andrew Mead",
            stars: 4.9,
            peopleBought: 130000,
            price: "$79.99",
            lastUpdated: "December 2024",
            totalDuration: 34,
            description:
              "Learn Node.js from scratch, covering Express.js, MongoDB, and REST APIs. This course includes real-world projects such as creating a complete e-commerce app and a task manager.",
            image: "mern.png",
          },
          {
            name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
            author: "Jose Portilla",
            stars: 4.8,
            peopleBought: 110000,
            price: "$89.99",
            lastUpdated: "November 2024",
            totalDuration: 45,
            description:
              "A deep dive into backend development with Node.js, Express, and MongoDB. Learn how to build scalable REST APIs, manage data with MongoDB, and deploy apps with Heroku.",
            image: "mern.png",
          },
          {
            name: "Learn Node.js From Scratch",
            author: "Ryan Dhungel",
            stars: 4.7,
            peopleBought: 80000,
            price: "$69.99",
            lastUpdated: "October 2024",
            totalDuration: 20,
            description:
              "Start from the basics of Node.js and progress to build real-world applications. The course covers asynchronous programming, HTTP, and file system modules.",
            image: "mern.png",
          },
    ]

  return (
    <div className='mt-8'>
      <div>
        <p className='font-extrabold text-2xl'>More Courses by <span className='text-violet-800'>Andrew Mead</span></p>
        <div className='flex flex-row gap-4 mt-4'>
        {courses.map((course, idex)=>(
            
                <div className='h-[300px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out '>
                <img src={course.image} className='h-[130px] w-[300px]'></img>
                <div className='p-2'>
                    <p className='font-extrabold'>{course.name}</p>
                    <p className='text-xs text-gray-600'>{course.author}</p>
                    <div className=''>
                        <p className='flex gap-1 font-extrabold'>{course.stars}<Star className='h-4 mt-1'/></p>
                        <div className='flex gap-2'>
                        <p className='font-extrabold flex gap-1'>{course.price}</p>
                        <p className='text-sm text-gray-700'>({course.peopleBought})</p>
                        </div>
                        <p className='bg-yellow-200 text-sm w-[65px]'>Bestseller</p>
                    </div>
                </div>
                </div>
        ))}
        </div>
      </div>
      <div>
        <p className='font-extrabold text-2xl'>More Courses by <span className='text-violet-800'>Rob Percival</span></p>
        <div className='flex flex-row gap-4 mt-4'>
        {courses1.map((course, idex)=>(
            
                <div className='h-[300px] w-[300px] hover:scale-105 transition-transform duration-300 ease-in-out '>
                <img src={course.image} className='h-[130px] w-[300px]'></img>
                <div className='p-2'>
                    <p className='font-extrabold'>{course.name}</p>
                    <p className='text-xs text-gray-600'>{course.author}</p>
                    <div className=''>
                        <p className='flex gap-1 font-extrabold'>{course.stars}<Star className='h-4 mt-1'/></p>
                        <div className='flex gap-2'>
                        <p className='font-extrabold flex gap-1'>{course.price}</p>
                        <p className='text-sm text-gray-700'>({course.peopleBought})</p>
                        </div>
                        <p className='bg-yellow-200 text-sm w-[65px]'>Bestseller</p>
                    </div>
                </div>
                </div>
        ))}
        </div>
        <Button className='mb-4 rounded-none hover:bg-slate-300 bg-white border-black text-black w-[730px] hover:scale-105 transition-transform duration-300 ease-in-out '>Report Abuse</Button>
      </div>
    </div>
  )
}

export default MoreCourses
