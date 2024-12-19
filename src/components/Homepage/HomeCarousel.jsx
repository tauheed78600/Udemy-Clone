import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../ui/button';

function HomeCarousel() {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="max-w-full lg:w-[1325px] md:w-[750px] p-4">

                <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                    <div className='relative'>
                        <img src="slide1.png" className='lg:h-[400px] h-[200px] object-cover w-full' />
                        <div className='text-center mt-4 flex flex-wrap'>
                            <p className='text-black text-left text-3xl ml-6 font-extrabold'>Prep for your IT certification</p>
                            <p className='text-black text-left p-2 ml-6'><span className='text-violet-900 underline underline-offset-1'>Explore a future in IT.</span> Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="slide2.png" className='lg:h-[400px] h-[200px] object-cover w-[120px]' />
                        <div className='text-center mt-4 p-4'>
                            <p className='text-black text-3xl ml-6 text-left p-2 font-extrabold'>Go Further in Web Development</p>
                            <p className='text-black text-left ml-6 p-2 text-sm'>Subscribe to a collection of our top courses in Javascript, CSS, React, and more with Personal Plan.</p>
                            <Button className='flex justify-start ml-6'>Learn More</Button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="slide3.png" className='lg:h-[400px] h-[200px] object-cover w-full' />
                        <div className='text-center mt-4'>
                            <p className='text-black text-3xl text-left ml-6 p-2 font-extrabold'>Slow and Steady</p>
                            <p className='text-black text-left ml-6 p-2'>Try learning just 5–10 minutes a day. <span className='text-violet-900 underline underline-offset-1'>Continue your course</span> and reach your peak potential.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HomeCarousel
