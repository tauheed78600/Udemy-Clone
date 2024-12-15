import React, { useState, useRef, useEffect } from 'react'
import { CircleAlert, Globe, Keyboard, AlarmClock, Heart, Check } from 'lucide-react'
import StartRating from './StartRating'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CourseOverview from './CourseOverview'
import CourseBuyCard from './CourseBuyCard'
import SubHeader2 from './SubHeader2'

function CourseContent() {


    const [toggle, setToggle] = useState(true)
    const [height, setHeight] = useState(false)
    const [showCard, setShowCard] = useState(false)
    const [subHeader, setSubHeader] = useState(false)
    const [isSticky, setIsSticky] = useState(true);


    const blackDivRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                setShowCard(true)
                setSubHeader(true)
                console.log("div black is out of the viewport");
            } else {
                setShowCard(false)
                setSubHeader(false)
                console.log("div black is back in the viewport");
            }
        });

        if (blackDivRef.current) {
            observer.observe(blackDivRef.current);
        }

        return () => {
            if (observer && blackDivRef.current) {
                observer.unobserve(blackDivRef.current);
            }
        };
    }, [blackDivRef]);


    useEffect(() => {
        const handleScroll = () => {
            const footerHeight = 1000;
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            const distanceToBottom = document.body.scrollHeight - scrollTop - windowHeight;

            if (distanceToBottom < footerHeight) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className=''>
            {subHeader ? <SubHeader2 /> : null}
            <div className='w-full h-[400px] bg-black text-white' ref={blackDivRef}>
                <div className='grid grid-cols-[60%_40%] gap-24 h-[400px] ml-[200px] w-[1200px] p-3'>
                    <div className='mt-7 h-[400px]'>
                        <p className='text-sm text-violet-300 font-extrabold'>Development &gt; Programming Languages &gt; Nodejs</p>
                        <p className='text-3xl mt-6 font-extrabold'>The Complete Node.js Developer Course (3rd Edition)</p>
                        <p className='mt-5'>Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!</p>
                        <p className='text-yellow-500 mt-6 font-extrabold flex items-center'>
                            4.6
                            <StartRating />
                            <span className='text-sm ml-2 text-violet-300 underline underline-offset-1'>(72984 Ratings)</span>
                            <span className='text-sm text-white ml-3'>306,120 students</span>
                        </p>
                        <div>
                            <p className='mt-3 text-sm font-semibold'>Created By<span className='text-sm ml-2 text-violet-300 underline underline-offset-1'>Andrew Mead, Rob Percival</span></p>
                        </div>
                        <div className='mt-3 h-4 flex flex-row gap-2 text-sm'>
                            <CircleAlert />
                            <p className=''>Last Updated 03/2021</p>
                            <div className='flex justify-end gap-1'>
                                <Globe className='h-5' />
                                <p className='text-sm'>English</p>
                            </div>
                            <div className='flex justify-end gap-1'>
                                <Keyboard className='h-5' />
                                <p>English [CC], Arabic [Auto], <span className='text-sm ml-2 text-violet-300 underline underline-offset-1'>11 more</span></p>
                            </div>
                        </div>
                    </div>

                    {/* The Right Card */}
                    {showCard && isSticky ?
                        <div>
                            <div className='h-[60px] fixed left-[1011px] top-[4px] w-[350px] bg-white z-10 text-black border'>
                                <div className='flex justify-around font-extrabold mt-4'>
                                    <div>
                                        <p onClick={() => setToggle(true)} >Personal</p>
                                    </div>
                                    <div>
                                        <p onClick={() => setToggle(false)}>Teams</p>
                                    </div>
                                </div>

                                {/* <hr className='' /> */}

                                {toggle ?
                                    <div className='p-5 border-2 shadow-xl mt-4'>
                                        <div>
                                            <p className='text-2xl font-extrabold'>$29.99 <del className='text-sm text-gray-600'>$59.99</del><span className='text-gray-600 text-sm'>  84% off</span></p>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-red-600 flex items-center gap-1 text-sm'><AlarmClock className='h-5 b' /><span className='font-bold'>1 day </span>left at this price!</p>
                                        </div>
                                        <div className='mt-3 flex items-center gap-3'>
                                            <Button className='rounded-none hover:scale-105 transition-transform duration-300 ease-in-out  w-[240px] h-[50px] bg-violet-600 hover:bg-violet-800'>Add to Cart</Button>
                                            <div className='border border-black h-[50px] w-[55px] hover:scale-110 transition-transform duration-300 ease-in-out  p-3'>
                                                <Heart className='h-7' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center text-gray-700 text-xs mt-3'>
                                            <p>30-Day Money-Back Guarantee</p>
                                            <p className=''>Full Lifetime Access</p>
                                        </div>
                                        <div className='flex justify-around text-sm mt-5 font-extrabold underline underline-offset-1'>
                                            <p>Share</p>
                                            <p>Gift this Course</p>
                                            <p>Apply Coupon</p>
                                        </div>
                                        <div className='border h-[70px] mt-3 p-3 text-gray-600 text-sm'>
                                            <p><span className='font-extrabold'>ST19MT121224</span> is applied</p>
                                            <p>Udemy Coupon</p>
                                        </div>
                                        <div className='flex items-center mt-3'>
                                            <Input placeholder='Enter Coupon' className='w-[240px] h-[50px] rounded-none'></Input>
                                            <Button className='w-[80px] h-[50px] rounded-none text-white font-semibold'>Apply</Button>
                                        </div>
                                        <div className="flex items-center justify-center my-4">
                                            <div className="flex-grow border-t border-gray-300"></div>
                                            <span className="px-3 text-gray-500 text-xs">or</span>
                                            <div className="flex-grow border-t border-gray-300"></div>
                                        </div>
                                        <div className=''>
                                            <p className='mt-2 font-bold text-xl'>Subscribe to Udemy’s top courses</p>
                                            <p className='text-sm mt-2'>Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.<span className='text-sm ml-2 text-violet-800 font-extrabold underline underline-offset-1'>Learn more</span></p>
                                            <Button className='bg-white hover:scale-105 transition-transform duration-300 ease-in-out  rounded-none hover:bg-gray-200 mt-2 text-black border-black w-[295px] h-[55px] font-extrabold'>Start Subscription</Button>
                                            <div className='flex flex-col items-center'>
                                                <p className='text-xs mt-2'>Starting at ₹850 per month</p>
                                                <p className='text-xs mt-1'>Cancel Anytime</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='border w-[350px] mt-4 shadow-xl p-4'>
                                        <div>
                                            <img src='udemyBus.png' className='h-[30px] w-[170px] mt-7'></img>
                                            <p className='text-sm mt-3 font-semibold'>Subscribe to this course and 27,000+ top‑rated Udemy courses for your organization.</p>
                                            <Button className='rounded-none h-[55px] mt-4 w-[310px] bg-violet-500 text-xl hover:bg-violet-700 font-extrabold'>Try Udemy Business</Button>
                                        </div>
                                        <div className='flex flex-col mt-7 gap-4 text-sm'>
                                            <p className='flex items-center gap-2'><Check />For teams of 2 or more users</p>
                                            <p className='flex items-center gap-2'><Check />27,000+ fresh & in-demand courses</p>
                                            <p className='flex items-center gap-2'> <Check />Learning Engagement tools</p>
                                            <p className='flex items-center gap-2'><Check /> SSO and LMS Integrations</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        : <CourseBuyCard />}
                </div>
            </div>
            <div className='bg-white '>
                <CourseOverview />
            </div>
        </div>
    )
}

export default CourseContent
