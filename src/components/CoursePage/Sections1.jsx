import React from 'react'

function Sections1({topics}) {
  return (
    <div className='fixed top-[75px] mt-12 left-0 w-screen h-[50px] bg-black border border-gray-300 shadow-lg p-4 z-30'>
        <div className='flex items-center justify-center gap-9 text-sm text-white'>
            {topics.map((topic, index) => (
                <p className='text-white hover:text-violet-300' key={index}>{topic}</p>
            ))}
        </div>
    </div>
  )
}

export default Sections1
