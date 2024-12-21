import React, { useState } from "react";
import BoughtCourses from "./BoughtCourses";
import { Heart, Star, Users } from "lucide-react";
import { Button } from "../ui/button";

function StudentsBought() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const coursesToShow = showMore ? BoughtCourses : BoughtCourses.slice(0, 8);

  return (
    <div className="mt-7 w-[90%]">
      <p className="text-2xl font-extrabold">Students also bought</p>
      <div>
        {coursesToShow.map((course, idx) => (
          <div key={idx} className="mt-4">
            <div className="flex flex-row md:flex-row gap-4 items-start mb-6 lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out">
              <img
                className="lg:h-[75px] h-[120px] w-[140px] object-cover"
                src={course.image}
                alt={`${course.topic} course`}
              />
              <div className="flex-1">
                <p className="font-extrabold">{course.topic}</p>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-2 text-xs">
                  <p className="text-green-900 font-extrabold">{course.duration}</p>
                  
                  <p>Updated {course.lastUpdated}</p>
                  <div className="flex items-center gap-2">
                    <p>{course.rating}</p>
                    <Star className="h-4 text-yellow-500" />
                    <div className="flex flex-row">
                    <Users className="h-4" />
                    <p>{course.peopleBought}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-extrabold">{course.price}</p>
                    <del className="text-gray-500">1999/-</del>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="h-12 w-12 rounded-full border border-black p-2 flex items-center justify-center">
                  <Heart />
                </div>
              </div>
              
            </div>

            <hr className="mb-4" />
          </div>
        ))}
      </div>

      {BoughtCourses.length > 8 && (
        <Button
          onClick={toggleShowMore}
          variant="outline"
          className="border-black mb-2 lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out bg-white lg:w-[730px] w-full text-black rounded-none"
        >
          <p className="font-extrabold">{showMore ? "Show Less" : "Show More"}</p>
        </Button>
      )}
    </div>
  );
}

export default StudentsBought;
