import React from 'react'
import StartRating from './StartRating'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

function FrequentlyBought() {
    return (
        <div>
            <div className='border lg:w-[730px] w-auto h-auto mt-9 p-5 '>
                <div className=''>
                    <p className='text-2xl font-extrabold'>Frequently Bought Together</p>
                    <div className='flex flex-col justify-center'>
                        <div className='lg:w-[680px] w-[90%] h-auto mt-3 flex hover:scale-105 transition-transform duration-300 ease-in-out '>
                            <img src='mern.png' className='lg:w-[200px] w-[50%] h-[120px]'></img>

                            <div className='ml-3 grid grid-cols-[70%_30%] mt-2 '>
                                <div>
                                    <p className='font-extrabold text-sm'>The Complete Node.js Developer Course (3rd Edition)</p>
                                    <p className='text-xs text-gray-700'>Andrew Mead, Rob Percival</p>
                                    <p className='flex text-sm'>4.6<StartRating className='mt-4' /></p>
                                    <p className='font-extrabold lg:hidden'>₹3999</p> {/* Visible only on mobiles and tablets */}
                                </div>
                                <div className='flex justify-end md:block'>
                                    <p className='font-extrabold ml-7 hidden lg:block'>₹3999</p> {/* Visible only on laptops */}
                                </div>
                            </div>

                        </div>
                        <div className='w-[90%] h-auto mt-3 flex hover:scale-105 transition-transform duration-300 ease-in-out '>
                            <img src='mern.png' className='lg:w-[200px] w-[50%] h-[120px]'></img>
                            <div className='ml-3 grid grid-cols-[70%_30%] mt-2 '>
                                <div>
                                    <p className='font-extrabold text-sm'>The Complete Node.js Developer Course (3rd Edition)</p>
                                    <p className='text-xs text-gray-700'>Andrew Mead, Rob Percival</p>
                                    <p className='flex text-sm'>4.6<StartRating className='mt-4' /></p>
                                    <p className='font-extrabold lg:hidden'>₹3999</p>
                                </div>
                                <div className='flex justify-end'>
                                <p className='font-extrabold ml-7 hidden lg:block'>₹3999</p>
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
