import React from 'react'
import StartRating from './StartRating'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

function FeaturedReview() {
    return (
        <div className='mt-7'>
            <div className="border lg:h-[360px] h-auto lg:w-[95%] w-full p-4 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out ">
                <p className='text-2xl font-extrabold'>Featured review</p>
                <div className="flex flex-col mt-2">
                    <div className="flex items-center">
                        <img className="h-16 w-16 rounded-full border mr-4 " src="reviewImage.png" />
                        <div className='text-xs'>
                            <p className='font-extrabold text-xl'>Anupam K.</p>
                            <p>11 courses</p>
                            <p>3 reviews</p>
                        </div>
                    </div>
                    <div className='mt-2 text-sm flex flex-col'>
                        <p className='flex gap-2'><StartRating />4 years ago</p>
                        <p>I am a 2 year experienced PHP developer with expertise in frameworks like Laravel, CodeIgniter, Zend, etc. I was asked to build an application in Node. Initially, I had no idea about it. I found Andrew's course and started it. I surely can say he is the best instructor I have ever found. Now I proudly can say, I am a PHP developer as well as NodeJs developer. Thank you so much, Andrew. I now can build applications in Node and looking ahead to make my carrier more extensive.</p>
                    </div>
                    <div className='mt-4 text-sm text-gray-700'>
                        <p>Was this review helpful?</p>
                    </div>
                    <div className='flex gap-4'>
                        <div className='h-12 w-12 mt-3 rounded-full border border-black p-2'>
                            <ThumbsUp className='ml-1'/>
                        </div>
                        <div className='h-12 w-12 mt-3 rounded-full border border-black p-2'>
                            <ThumbsDown className='ml-1 mt-1'/>
                        </div>
                        <p className='underline underline-offset-1 mt-6'>Report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedReview
