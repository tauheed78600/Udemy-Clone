import { EllipsisVertical, Star, ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'
import StartRating from './StartRating'

function UserReview() {
    return (
        <div className='mt-8 w-[90%]'>
            <div className='flex gap-2 w-[90%]'>
                <Star className='mt-1' />
                <p className='text-2xl font-extrabold'>4.6 Course Rating .  72k ratings</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4'>
                <div className='border border-t-black border-b-black border-white mb-4 p-3 '>
                    <div className='flex'>
                        <div className='h-12 w-12 border bg-black text-white p-3 rounded-full'>
                            <p className='font-semibold'>AR</p>
                        </div>
                        <div className="flex flex-col w-[400px]">
                            <div className="flex items-center justify-between">
                                <p className="font-extrabold ml-2">Ali. R</p>
                                <EllipsisVertical />
                            </div>
                            <div className="flex items-center gap-2">
                                <StartRating />
                                <p className="text-sm text-gray-800">5 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>The Best NodeJS course available online
                        </p>
                    </div>
                    <div className='flex gap-2'>
                    <div className='mt-4 text-xs text-gray-700'>
                        <p>Helpful?</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                            <ThumbsUp className='ml-1 h-5' />

                            <ThumbsDown className='ml-1 mt-1 h-5' />
                    </div>
                    </div>
                </div>
                <div className='border  border-t-black border-b-black border-white mb-4 p-3'>
                <div className='flex'>
                        <div className='h-12 w-12 border bg-black text-white p-3 rounded-full'>
                            <p className='font-semibold'>KO</p>
                        </div>
                        <div className="flex flex-col w-[400px]">
                            <div className="flex items-center justify-between">
                                <p className="font-extrabold ml-2">Karen O.</p>
                                <EllipsisVertical />
                            </div>
                            <div className="flex items-center gap-2">
                                <StartRating />
                                <p className="text-sm text-gray-800">5 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>Andrew does a great job of explaining the concepts and providing the fundamental knowledge about the software in use in each section. The course is well structured and easy to understand and follow.</p>
                    </div>
                    <div className='flex gap-2'>
                    <div className='mt-4 text-xs text-gray-700'>
                        <p>Helpful?</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                            <ThumbsUp className='ml-1 h-5' />

                            <ThumbsDown className='ml-1 mt-1 h-5' />
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4'>
                <div className='border border-t-black  border-b-black border-white mb-4 p-3'>
                    <div className='flex'>
                        <div className='h-12 w-12 border bg-black text-white p-3 rounded-full'>
                            <p className='font-semibold'>FM</p>
                        </div>
                        <div className="flex flex-col w-[90%]">
                            <div className="flex items-center justify-between">
                                <p className="font-extrabold ml-2">Felipe de Oliveira M.</p>
                                <EllipsisVertical />
                            </div>
                            <div className="flex items-center gap-2">
                                <StartRating />
                                <p className="text-sm text-gray-800">5 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>Amazing course. Taught all the nodejs basics and the sockets section really came in handy for my personal project. It is a little outdated so some packages and some sintax details (such as calling .exec() in a mongoose query)
                        </p>
                    </div>
                    <div className='flex gap-2'>
                    <div className='mt-4 text-xs text-gray-700'>
                        <p>Helpful?</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                            <ThumbsUp className='ml-1 h-5' />

                            <ThumbsDown className='ml-1 mt-1 h-5' />
                    </div>
                    </div>
                </div>
                <div className='border border-t-black border-b-black border-white mb-4 p-3'>
                <div className='flex'>
                        <div className='h-12 w-14 border bg-black text-white p-3 rounded-full'>
                            <p className='font-semibold ml-1'>TI</p>
                        </div>
                        <div className="flex flex-col w-[400px]">
                            <div className="flex items-center justify-between">
                                <p className="font-extrabold ml-2">Tyler I.</p>
                                <EllipsisVertical />
                            </div>
                            <div className="flex items-center gap-2">
                                <StartRating />
                                <p className="text-sm text-gray-800">5 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p>Andrew has been a great resource in learning NodeJS and the aspects needed to create some pretty fun projects. His teaching style is easy and fun and keeps me engaged all the time.</p>
                    </div>
                    <div className='flex gap-2'>
                    <div className='mt-4 text-xs text-gray-700'>
                        <p>Helpful?</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                            <ThumbsUp className='ml-1 h-5' />

                            <ThumbsDown className='ml-1 mt-1 h-5' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReview
