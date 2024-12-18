import React, { useState } from "react";
import BoughtCourses from "./BoughtCourses";
import { Heart, IndianRupee, Star, Users } from "lucide-react";
import { Button } from "../ui/button";

function StudentsBought() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Determine the courses to display based on `showMore` state
  const coursesToShow = showMore ? BoughtCourses : BoughtCourses.slice(0, 8);

  return (
    <div className="mt-7">
      <div>
        <p className="text-2xl font-extrabold ">Students also bought</p>
        <div>
          {coursesToShow.map((course, idx) => (
            <div key={idx} className="mt-4">
              <div className="flex flex-row gap-2 mb-6">
                <div className="flex items-center w-[90%] gap-2 hover:scale-105 transition-transform duration-300 ease-in-out ">
                  <img
                    className="lg:h-[75px] h-[120px] w-[140px]"
                    src={course.image}
                    alt={`${course.topic} course`}
                  ></img>
                  <div className="text-xs">
                    <p className="font-extrabold text-xs">{course.topic}</p>
                    <div className="flex gap-2 text-xs">
                      <div>
                        <p className="bg-yellow-300 h-[20px] w-[65px] text-black">
                          Bestseller
                        </p>
                        <p className="text-green-900 text-xs font-extrabold">
                          {course.duration}
                        </p>
                        <p>Updated {course.lastUpdated}</p>
                        <div className="lg:hidden flex flex-row gap-2">
                          <p>{course.rating}</p>
                          <Star className="h-5 text-yellow-500" />
                          <Users className="h-5" />
                          {course.peopleBought}
                        </div>
                        <div className="lg:hidden">
                          <p className="flex font-extrabold">
                            {course.price}
                          </p>
                          <del>1999/-</del>
                        </div>
                      </div>
                      <div className="ml-24 hidden xs:block md:hidden gap-1">
                        {course.rating}

                      </div>
                      <div className="hidden lg:flex gap-1 ml-6">
                        <Users />
                        {course.peopleBought}
                      </div>
                      <div className="hidden lg:flex flex-col ml-9">
                        <p className="flex font-extrabold text-xl">{course.price}</p>
                        <del>1999/-</del>
                      </div>
                      <div className="hidden lg:block">
                        <div className="h-12 w-12 rounded-full border border-black p-2">
                          <Heart className="ml-1" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {BoughtCourses.length > 8 && !showMore && (
          <Button
            onClick={toggleShowMore}
            variant='outline'
            className="border-black mb-2 hover:scale-105 transition-transform duration-300 ease-in-out  bg-white lg:w-[730px] w-full text-black rounded-none"
          >
            <p className="font-extrabold">Show More</p>
          </Button>
        )}

        {/* Show Less Button */}
        {showMore && (
          <Button
            onClick={toggleShowMore}
            variant='outline'
            className="mb-2 border-black hover:scale-105 transition-transform duration-300 ease-in-out   bg-white w-[730px] text-black rounded-none"
          >
            <p className="font-extrabold">Show Less</p>
          </Button>
        )}
      </div>
    </div>
  );
}

export default StudentsBought;
