import { Award, PlayIcon, Star, Users } from 'lucide-react'
import React from 'react'

function Instructors() {
    return (
        <div className='mt-9'>
            <div>
                <p className='font-extrabold text-2xl'>Instructors</p>
                <div>
                    <p className='mt-4 font-extrabold text-xl text-violet-800 underline underline-offset-4'>Andrew Mead</p>
                    <p className='text-gray-700'>A Full-stack Developer & Teacher</p>
                    <div className='mt-4 ml-2 flex'>
                        <div className='h-28 w-28 border rounded-full border-black overflow-hidden'>
                            <img src='instructor.png' alt="Instructor" className='h-full w-full object-cover rounded-full' />
                        </div>
                        <div className='ml-4 text-gray-900 flex flex-col gap-2'>
                            <p className='flex gap-2 text-sm'><Star className='h-3 mt-1' />4.6 Instructor Rating</p>
                            <p className='flex gap-2 text-sm'><Award className='h-3 mt-1' />114,571 Reviews</p>
                            <p className='flex gap-2 text-sm'><Users className='h-3 mt-1' />433,885 Students</p>
                            <p className='flex gap-2 text-sm'><PlayIcon className='h-3 mt-1' />4 Courses</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-sm text-gray-800'>
                        <p className='mt-4'>I'm Andrew, a full-stack developer living in beautiful Philadelphia!</p>
                        <p>I launched my first Udemy course in 2014 and had a blast teaching and helping others. <span className='font-extrabold'>Since then, I've launched 3 courses with over 110,000 students and over 18,000 5-star reviews.</span></p>
                        <p>I currently teach JavaScript, React, and Node.</p>
                        <p>Before I ever heard about Udemy or thought about teaching, I created a web app development company. I've helped companies of all sizes launch production web applications to their customers. I've had the honor of working with awesome companies like Siemens, Mixergy, and Parkloco.</p>
                        <p>I have a Computer Science degree from Temple University, and I've been programming for just over a decade. I love creating, programming, launching, learning, teaching, and biking.</p>
                        <p>I can't wait to see you inside one of my courses!</p>
                    </div>
                </div>
                <div>
                    <p className='mt-4 font-extrabold text-xl text-violet-800 underline underline-offset-4'>Rob Percival</p>
                    <p className='text-gray-700'>Web Developer & Teacher</p>
                    <div className='mt-4 ml-2 flex'>
                        <div className='h-28 w-28 border rounded-full border-black overflow-hidden'>
                            <img src='Rob.png' alt="Instructor" className='h-full w-full object-cover rounded-full' />
                        </div>
                        <div className='ml-4 text-gray-900 flex flex-col gap-2'>
                            <p className='flex gap-2 text-sm'><Star className='h-3 mt-1' />4.5 Instructor Rating</p>
                            <p className='flex gap-2 text-sm'><Award className='h-3 mt-1' />491,841 Reviews</p>
                            <p className='flex gap-2 text-sm'><Users className='h-3 mt-1' />2,365,911 Students</p>
                            <p className='flex gap-2 text-sm'><PlayIcon className='h-3 mt-1' />36 Courses</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 text-sm text-gray-800'>
                        <p className='mt-4'>Hi! I'm Rob. I have a degree in Mathematics from Cambridge University and you might call me a bit of coding geek.</p>
                        <p>After building websites for friends and family for fun, I soon learned that web development was a very lucrative career choice. I gave up my successful (and sometimes stressful) job as a teacher to work part time and today, couldn't be happier.</p>
                        <p>I'm passionate about teaching kids to code, so every summer I run Code School in the beautiful city of Cambridge. I also run the popular web hosting and design service, Eco Web Hosting which leaves me free to share my secrets with people like you.</p>
                        <p>Before I ever heard about Udemy or thought about teaching, I created a web app development company. I've helped companies of all sizes launch production web applications to their customers. I've had the honor of working with awesome companies like Siemens, Mixergy, and Parkloco.</p>
                        <p><span className='font-extrabold'>You wouldn't believe the freedom that being a web developer offers.</span> Sign up and find out for yourself why so many people are taking and recommending this course. I genuinely believe it's the best on the market and if you don't agree, I'll happily refund your money.</p>
                        <p>Sign up to my courses and join me in this amazing adventure today.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructors
