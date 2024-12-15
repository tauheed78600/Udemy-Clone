import { Star } from 'lucide-react'
import React from 'react'

function TopPicks() {
    return (
        <div className='ml-[100px] mt-9'>
            <div className='border-2  h-[270px] w-[1280px]'>
                <div className='grid grid-cols-[40%_60%] p-3'>
                    <img src="jsTopPick.jpeg" className='mt-4 h-[220px] w-[480px]'></img>
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
