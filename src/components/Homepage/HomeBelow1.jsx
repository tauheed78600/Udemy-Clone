import React from 'react'
import { Button } from '../ui/button'

function HomeBelow1() {
  return (
    <div className=''>
      <div className="overflow-auto flex flex-col lg:ml-[100px] ml-4 mt-9">
        {/* Header Section */}
        <div className="flex justify-between">
          <div> 
            <p className="font-extrabold text-4xl">Let's start Learning</p>
          </div>
          <div className="mr-[100px] md:hidden sm:block hidden font-extrabold text-violet-600 underline underline-offset-1">
            <p>My Learning</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-8">
          <div className="grid gap-3 lg:grid-cols-2 grid-cols-1 lg:w-[88%] md:w-[90%] max-w-[95%]">
            {/* Card 1 */}
            <div className="border-2 h-[103px] sm:h-[152px] max-w-full md:full border-black hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="grid grid-cols-[36%_64%] h-auto">
                <div className="sm:w-[100%] h-20">
                  <img
                    className="h-[100px] sm:h-[150px] w-full sm:w-[220px] md:w-[690px]"
                    src="reactImage.jpeg"
                    alt="React Course"
                  />
                </div>
                <div className="sm:w-[64%] h-20">
                  <div className="sm:w-full">
                    <p className="text-sm text-gray-700 p-2">
                      React the complete Guide 2024 (Incl. NextJS and Redux)
                    </p>
                    <b className="hidden sm:block px-2">
                      260. Validating Input via Built in{" "}
                      <span className="ml-2">Validation</span> Props
                    </b>
                    <p className="hidden sm:block text-sm p-2">Lecture 1m left</p>
                    <div
                      className="hidden sm:block top-0 left-0 h-[10px] bg-violet-800"
                      style={{ width: "57%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-2 h-[103px] sm:h-[152px] md:w-full border-black hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="grid grid-cols-[36%_64%] h-[150px]">
                <div className="sm:w-[100%] h-20">
                  <img
                    className="h-[100px] sm:h-[150px] w-full sm:w-[180px] md:w-[690px]"
                    src="reactImage.jpeg"
                    alt="Angular Course"
                  />
                </div>
                <div className="sm:w-[64%]">
                  <div className="sm:w-full">
                    <p className="text-sm p-2 text-gray-700">
                      Angular The complete Guide (2024 Edition)
                    </p>
                    <b className="hidden sm:block mb-4">
                      332. Understanding the role of{" "}
                      <span className="">Module</span> Declaration
                    </b>
                    <p className="hidden sm:block text-sm ml-2">Lecture 1m left</p>
                    <div
                      className="hidden sm:block top-0 left-0 h-[10px] bg-violet-800"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 ">
          <div className="border-2 bg-black border-black lg:h-[130px] lg:w-[1320px] md:w-[90%] max-w-[95%] p-4">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start h-full">
              <p className="text-white text-left">
                <b>Training 2 or more people?</b> Get your team access to Udemy's top
                27,000+ courses
              </p>
              <div className="flex flex-col items-center gap-2 lg:w-auto w-full">
                <Button className="bg-white text-black rounded-none w-full lg:w-[300px] hover:bg-gray-200 hover:text-black hover:border-black">
                  Get Udemy Business
                </Button>
                <Button className="bg-black text-white rounded-none w-full lg:w-[300px] border-white hover:border-white">
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBelow1
