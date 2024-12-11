import React from 'react'
import { Button } from './ui/button'

function HomeBelow1() {
    return (
        <div>
            <div className='overflow-auto flex flex-col ml-[100px] mt-16'>
                <div className='flex justify-between'>
                    <div>
                    <p className='font-extrabold text-4xl'>Let's start Learning</p>
                    </div>
                    <div className='mr-[100px] font-extrabold text-violet-600 underline underline-offset-1'>
                        <p>My Learning</p>
                    </div>
                </div>
                
                <div className='mt-8'>
                    <div className='flex justify-start gap-4'>
                    <div className='border-2 h-[152px] w-[500px] border-black'>
                    <div className='grid grid-cols-[36%_64%]'>
                        <div>
                        <img className='h-[150px] w-[180px]' src='reactImage.jpeg'></img>
                        </div>
                        <div>
                        <p className='text-sm p-2 text-gray-700'>React the complete Guide 2024 (Incl. NextJS and Redux)</p>
                        <b className='p-2'>260. Validating Input via Built in <span className='ml-2'>Validation</span> Props</b>
                        <p className='text-sm p-2'>Lecture 1m left</p>
                        <div
                            className=" top-0 left-0 h-[10px] bg-violet-800"
                            style={{ width: '57%' }}
                        ></div>
                        </div>
                        
                    </div>
                    
                    </div>

                    <div className='border-2 h-[152px] w-[500px] border-black'>
                    <div className='grid grid-cols-[36%_64%]'>
                        <div>
                        <img className='h-[150px] w-[180px]' src='reactImage.jpeg'></img>
                        </div>
                        <div>
                        <p className='text-sm p-2 text-gray-700'>Angular The complete and ultimate Guide (2024 Edition)</p>
                        <b className='p-2'>332. Understanding the role of App <span className='ml-2'>Module</span> and Conponent Declaration</b>
                        <p className='text-sm p-2'>Lecture 1m left</p>
                        <div
                            className=" top-0 left-0 h-[10px] bg-violet-800"
                            style={{ width: '57%' }}
                        ></div>
                        </div>
                        
                    </div>
                    
                    </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <div className='border-2 bg-black border-black h-[100px] w-[1280px]'>
                    <div className='flex justify-between'>
                        <p className='text-white text-left mt-7 p-2'><b>Training 2 or more people?</b> Get your team access to Udemy's top 27,000+ courses
                        </p>
                        <div className='mt-6 mr-6 flex gap-5'>
                        <Button className='bg-white text-black hover:text-white'>Get Udemy Business</Button>
                        <Button className='bg-black text-white border-white'>Dismiss</Button>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomeBelow1
