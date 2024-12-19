import { Star } from 'lucide-react'
import React from 'react'

function TopPicks() {
    return (
        <div className='lg:ml-[100px] ml-2 mt-20'>
            <div className='border-2 lg:h-[270px] lg:w-[1280px] max-w-[95%]'>
                <div className='lg:grid lg:grid-cols-[40%_60%] gap-3 p-3'>
                    <img src="jsTopPick.jpeg" className='mt-2 lg:h-[220px] lg:w-[480px] w-full'></img>
                    <div>
                        <b className='text-3xl mt-4'>The Complete JavaScript Course 2025: From Zero to Expert</b>
                        <div>
                            <p>The modern Javascript course for everyone! Master Javascript with projects, challenges and theory. Many courses in one!</p>
                            <p className='text-xs text-gray-700'>By Jonas Schmedtmann</p>
                            <p className='text-xs font-bold text-green-500 mt-1'>Updated: <span className='text-green-800'>December 2024</span>
                                <span className='text-gray-700'>  71 Total hours.  330 lectures   All levels</span>
                            </p>
                            <p className='text-sm'>4.7 </p>
                            <p className='bg-yellow-200 h-[23px] w-[75px]'>Bestseller</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPicks
