import React from 'react'
import { Globe, SquareArrowOutUpRight } from 'lucide-react'

function ProfileComponent() {
    return (
        <div>
            <div className='absolute top-full right-1 w-[310px] h-[740px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                <div className='flex justify-between'>
                    <div className='border-2 h-16 w-16 mr-7 border-black rounded-full bg-black'>
                        <p className='text-white p-3 text-2xl'>TD</p>
                    </div>
                    <div>
                        <p className='font-extrabold text-xl mr-4'>Tauheed Darekar</p>
                        <p className='text-xs text-gray-800'>tdarekar@parkar.digital</p>
                    </div>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm '>
                    <p className='hover:text-violet-900'>My Learning</p>
                    <p className='hover:text-violet-900'>My Cart</p>
                    <p className='hover:text-violet-900'>WishList</p>
                    <p className='hover:text-violet-900'>Teach on Udemy</p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <p className='hover:text-violet-900'>Notifications</p>
                    <p className='hover:text-violet-900'>Messages</p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <p className='hover:text-violet-900'>Account Settings</p>
                    <p className='hover:text-violet-900'>Payment Methods</p>
                    <p className='hover:text-violet-900'>Subscriptions</p>
                    <p className='hover:text-violet-900'>Udemy Credits</p>
                    <p className='hover:text-violet-900'>Purchase History</p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <div className='flex justify-between'>
                        <p className='hover:text-violet-900'>Language</p>
                        <div className='flex items-center gap-1'>
                            <Globe className='h-5' />
                            <p className='text-sm'>English</p>
                        </div>
                    </div>
                </div>

                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <p className='hover:text-violet-900'>Public Profile</p>
                    <p className='hover:text-violet-900'>Edit Profile</p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <p className='hover:text-violet-900'>Help and Support</p>
                    <p className='hover:text-violet-900'>Logout</p>
                </div>
                <hr className='mt-3' />
                <div className='flex flex-col gap-3 mt-2 text-sm'>
                    <div className='flex justify-between'>
                        <p className='hover:text-violet-900 font-extrabold text-xl'>Udemy Business</p>
                        <SquareArrowOutUpRight />
                    </div>
                    <p className='hover:text-violet-900 text-gray-800'>Bring Learning to your company</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
