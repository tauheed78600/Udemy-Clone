import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from './ui/button';

function HomeCarousel() {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='w-4/5'>
                <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showThumbs={false}>
                    <div className='relative'>
                        <img src="slide1.png" className='h-[400px] object-cover' />
                        <div className='absolute h-[240px] w-[350px] left-0 top-1/2 transform -translate-y-1/2 ml-12 bg-white text-white p-4 shadow-lg'>
                        <p className='text-black text-3xl text-left p-2 font-extrabold'>Prep for your IT certificate</p>
                        <p className='text-black text-left p-2'><span className='text-violet-900 underline underline-offset-1'>Explore a future in IT.</span> Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="slide2.png" className='h-[400px] object-cover' />
                        <div className='absolute h-[240px] w-[350px] left-0 top-1/2 transform -translate-y-1/2 ml-12 bg-white text-white p-4 shadow-lg'>
                            <p className='text-black text-3xl text-left p-2 font-extrabold'>Go Further in Web Development</p>
                            <p className='text-black text-left p-2 text-sm'>Subscribe to a collection of our top courses in Javascript, CSS, React, and more with Personal Plan.</p>
                            <Button className='flex justify-start'>Learn More</Button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="slide3.png" className='h-[400px] object-cover' />
                        <div className='absolute h-[200px] w-[390px] left-0 top-1/2 transform -translate-y-1/2 ml-12 bg-white text-white p-4 shadow-lg'>
                            <p className='text-black text-3xl text-left p-2 font-extrabold'>Slow and Steady</p>
                            <p className='text-black text-left p-2'>Try learning just 5–10 minutes a day. <span className='text-violet-900 underline underline-offset-1'>Continue your course</span> and reach your peak potential.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default HomeCarousel
