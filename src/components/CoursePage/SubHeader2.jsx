import React from 'react'
import StartRating from './StartRating'

function SubHeader2() {
    console.log("inside subheader2")
    return (
        <div className='w-full fixed top-0 h-auto p-2 bg-black text-white'>
            <div className='flex flex-col ml-4'>
                <p className=' font-extrabold'>The Complete Node.js Developer Course (3rd Edition)</p>
                <p className='text-yellow-500 font-extrabold flex items-center text-sm'>
                    4.6
                    <StartRating />
                <p className='text-violet-300 text-xs underline underline-offset-1'>72,499 ratings</p>
                <p className='text-white ml-2 text-xs'>306,151 students</p>
                </p>
            </div>
        </div>
    )
}

export default SubHeader2
