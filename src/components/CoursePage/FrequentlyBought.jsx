import React from 'react'
import StartRating from './StartRating'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

function FrequentlyBought() {
    return (
        <div>
            <div className='border w-[730px] h-[510px] mt-9 p-5 '>
                <div className=''>
                    <p className='text-2xl font-extrabold'>Frequently Bought Together</p>
                    <div className='flex flex-col justify-center'>
                        <div className='w-[680px] h-[120px] mt-3 flex hover:scale-105 transition-transform duration-300 ease-in-out '>
                            <img src='mern.png' className='w-[200px] h-[120px]'></img>
                            
                            <div className='ml-3 grid grid-cols-[70%_30%] mt-2 '>
                                <div>
                                    <p className='font-extrabold text-sm'>The Complete Node.js Developer Course (3rd Edition)</p>
                                    <p className='text-xs text-gray-700'>Andrew Mead, Rob Percival</p>
                                    <p className='flex text-sm'>4.6<StartRating className='mt-4' /></p>
                                </div>
                                <div className='flex justify-end'>
                                    <p className='font-extrabold ml-7'>₹3999</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-[680px] h-[120px] mt-3 flex hover:scale-105 transition-transform duration-300 ease-in-out '>
                            <img src='mern.png' className='w-[200px] h-[120px]'></img>
                            <div className='ml-3 grid grid-cols-[70%_30%] mt-2'>
                                <div>
                                    <p className='font-extrabold text-sm'>The Complete Node.js Developer Course (3rd Edition)</p>
                                    <p className='text-xs text-gray-700'>Andrew Mead, Rob Percival</p>
                                    <p className='flex text-sm'>4.6<StartRating className='mt-4' /></p>
                                </div>
                                <div className='flex justify-end'>
                                    <p className='font-extrabold ml-7'>₹3999</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[680px] h-[120px] mt-3 flex hover:scale-105 transition-transform duration-300 ease-in-out '>
                            <img src='mern.png' className='w-[200px] h-[120px]'></img>
                            <div className='ml-3 grid grid-cols-[70%_30%] mt-2'>
                                <div>
                                    <p className='font-extrabold text-sm'>The Complete Node.js Developer Course (3rd Edition)</p>
                                    <p className='text-xs text-gray-700'>Andrew Mead, Rob Percival</p>
                                    <p className='flex text-sm'>4.6<StartRating className='mt-4' /></p>
                                </div>
                                <div className='flex justify-end'>
                                    <p className='font-extrabold ml-7'>₹3999</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-extrabold mt-4'>Total ₹10,997/-</p>
                            <Button className='rounded-none bg-violet-800 text-white w-[150px] h-[50px] font-extrabold hover:scale-105 transition-transform duration-300 ease-in-out '>Add All to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyBought
