import React, { useState } from 'react';
import courseSections from './CourseSections';
import { ChevronDown, ChevronUp, MonitorPlay, Video } from 'lucide-react'
import FeaturedReview from './FeaturedReview';
import StudentsBought from './StudentsBought';
import FrequentlyBought from './FrequentlyBought';
import Instructors from './Instructors';
import UserReview from './UserReview';
import MoreCourses from './MoreCourses';

function ContentCourse() {
    const [openSections, setOpenSections] = useState([]);
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const toggleSection = (idx) => {
        setOpenSections((prev) =>
            prev.includes(idx)
                ? prev.filter((section) => section !== idx)
                : [...prev, idx]
        );
    };

    const openAllSections = () => {
        setOpenSections(courseSections.map((_, idx) => idx));
        setOpen(true)

        if (!open) {
            setOpenSections(courseSections.map((_, idx) => idx));
            setOpen(!open)
        } else {
            setOpenSections([])
            setOpen(!open)
        }

    }

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className="mt-6 w-[90%]">
            <div className="text-2xl font-extrabold ">
                <p className=''>Course content</p>
                <div className='flex justify-between'>
                    <p className="text-xs text-gray-800 mt-6 mb-1">
                        18 sections. 177 lectures. 35h 3m total length
                    </p>
                    <p onClick={openAllSections} className='text-violet-900 mr-20 text-sm mt-5 cursor-pointer'>{open ? 'Collapse' : 'Expand'} all sections</p>
                </div>
                <div className="border border-gray-200 lg:w-[730px] w-full">
                    {courseSections.map((sect, idx) => (
                        <div key={idx}>
                            <div
                                className="hover:scale-105 transition-transform duration-300 ease-in-out p-3 border-b text-sm bg-gray-100 cursor-pointer font-bold flex justify-start gap-4 items-center"
                                onClick={() => toggleSection(idx)}
                            >
                                <span>{openSections.includes(idx) ? <ChevronUp className='h-3' /> : <ChevronDown className='h-3' />}</span>
                                <p>{sect.sectionTitle}</p>

                            </div>

                            {openSections.includes(idx) && (
                                <div
                                    className="bg-white transition-all duration-300 overflow-hidden ml-4"
                                >
                                    {sect.subsections.map((sub, subIdx) => (
                                        <div
                                            key={subIdx}
                                            className="p-3 pl-6 border-b text-sm font-semibold flex justify-between"
                                        >
                                            <p className='flex justify-start gap-2'><MonitorPlay className='h-4' />{sub}</p>
                                            <p>14min</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-7 text-2xl lg:w-full w-[90%]'>
                <p className='font-extrabold '>Requirements</p>
                <ul className='text-sm mt-4 flex flex-col list-disc ml-4 gap-2'>
                    <li className=''>A computer on which you can install software (Windows, MacOS, or Linux)</li>
                    <li>A basic understanding of JavaScript (variables, functions, objects, arrays, if statements)</li>
                </ul>
            </div>
            <div className='mt-7 text-2xl lg:w-full w-[90%]'>
                <p className='font-extrabold '>Description</p>
                <div className='text-sm mt-4 flex flex-col gap-2'>
                    <p className='text-sm'>Have you tried to learn Node before? You start a new course, and the instructor has you installing a bunch of libraries before you even know what Node is or how it works. You eventually get stuck and reach out to the instructor, but you get no reply. You then close the course and never open it again.</p>
                    <p className=''>Sound familiar?</p>
                    <p className='font-bold text-gray-800 mt-2'>I created this course to be what I wanted when I was learning Node.</p>
                    <p className=''>The Complete Node Developer Course covers the fundamentals of Node before diving deep into great tools like Express, Mongoose, and MongoDB.</p>
                    <p className=''>The entire course is based around a single goal: Turning you into a professional Node developer capable of developing, testing, and deploying real-world production applications.</p>
                    {show ? 
                    <div>
                        <p className='font-bold text-gray-800 mt-2'>The best way to learn Node is by building Node apps.</p>
                    <p>From the very start you’ll be programming every project and working through challenges that I’ve designed to reinforce what you’ve learned. This will give you the hands-on experience necessary to be able to create and launch your own project once you’re done.</p>
                    <p>You’ll be building four projects:</p>
                    <ol className='list-decimal ml-4 flex flex-col gap-2'>
                        <li> A note-taking app to get your feet wet</li>
                        <li> A weather application that interacts with the MapBox and Dark Sky APIs</li>
                        <li> A task manager REST API complete with user accounts and authentication</li>
                        <li> A real-time chat app with a client-side companion</li>
                    </ol>
                    <p>By the end, you’ll be able to take what you’ve learned and launch your own Node application.</p>
                    <p className='font-bold text-gray-800 mt-2'>When learning, learn the latest.</p>
                    <p>I work to keep this course full of the most up-to-date Node material out there. This course is compatible with the latest Node version.</p>
                    <p>You’re getting access to hot-off-the-press features.</p>
                    <p className='font-bold text-gray-800 mt-2'>Everything you need comes in one easy-to-use package.</p>
                    <p>You can stop worrying if you're learning the right skills to build an app or land a new job. I've curated all the tech that's essential to building real-world apps. I've mapped out everything in a comprehensive, easy-to-follow package designed to get you up and running in a few weeks.</p>
                    <p className='font-bold text-gray-800 mt-2'>There’s no better time to learn Node.</p>
                    <p>According to the 2016 Stack Overflow Survey, Node is in the top ten for back-end popularity and back-end salary, with an average salary of $85k. This means more jobs and more opportunities for you.</p>
                    <p className='font-bold text-gray-800 mt-2'>You might get stuck. But I’m here to help.</p>
                    <p>There’s nothing worse than getting five hours into a course, getting stuck, and not getting the help you need to continue.</p>
                    <p>I’m in the Q&A everyday to help you get unstuck. I reply to every question to get you back on track.</p>
                    <p className='font-bold text-gray-800 mt-2'>Don’t take my word for it. Check the reviews and see what other students are saying.</p>
                    <blockquote>“Any questions people seem to have are answered swiftly, clearly, and often with examples posted on GitHub. Even when the questions asked are out of the scope of the course Andrew seems to come up trumps." - Adam Tait</blockquote>
                    <blockquote>"This is amazing. What's even better is the instructor answered all the questions I asked." - Pak Chu</blockquote>
                    <blockquote>"The real value in this course is Andrew; he is not just a great teacher, but also he's quick to answer questions and provide feedback." - Nick Hester</blockquote>
                    <p>I guarantee this is the most up-to-date and engaging Node course available, and it comes with a 30-day money-back guarantee.</p>
                    <p className='font-bold text-gray-800 mt-2'>During eight chapters you'll learn:</p>
                    <ol className='list-decimal ml-4 flex flex-col gap-2'>
                        <li>Node.js</li>
                        <li>Npm</li>
                        <li>Asynchronous programming</li>
                        <li>ES6/ES7</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Socket.IO</li>
                        <li>JWT Authentication</li>
                        <li>Mongoose</li>
                        <li>File and image uploads</li>
                        <li>Email sending</li>
                        <li>Application deployment with Heroku</li>
                        <li>Version control with Git</li>
                        <li>GitHub</li>
                        <li>REST API Design</li>
                        <li>Code testing</li>
                        <li>Debugging</li>
                        <li>Jest</li>
                        <li>Many more tools</li>
                    </ol>
                    <p>I can’t wait to see you on the inside!</p>
                    <p>- Andrew</p>
                    <div className='mt-8'>
                        <p className='font-extrabold text-2xl'>Who this course is for:</p>
                        <ul className='list-disc ml-4 mt-3'>
                            <li>Anyone looking to launch their own Node applications, switch careers, or freelance as a Node developer</li>
                        </ul>
                    </div>
                    </div>:null
                }
                    <p onClick={handleShow} className='cursor-pointer font-extrabold text-violet-800'>Show {show ? 'Less' : 'More'}</p>
                </div>
            </div>
            <FeaturedReview/>
            <StudentsBought/>
            <FrequentlyBought/>
            <Instructors/>
            <UserReview/>
            <MoreCourses/>
        </div>
    );
}

export default ContentCourse;
