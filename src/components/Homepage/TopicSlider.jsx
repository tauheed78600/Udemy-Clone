import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TopicSlider({ courses }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Automatically scroll the slider continuously
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
    }, 10); // Slow speed for animation
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollRight}
          className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div
        ref={sliderRef}
        className="relative flex flex-col gap-4 p-4 h-[200px] overflow-x-auto scrollbar-hidden animate-scroll"
      >
        <div className="flex gap-4 flex-shrink-0">
          {courses.slice(0, Math.ceil(courses.length / 2)).map((course, index) => (
            <div
              key={index}
              className="border-2 h-[50px] w-[200px] flex-shrink-0"
            >
              <p className="p-3 text-center font-extrabold">{course}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-shrink-0">
          {courses.slice(Math.ceil(courses.length / 2)).map((course, index) => (
            <div
              key={index}
              className="border-2 h-[50px] w-[200px] flex-shrink-0"
            >
              <p className="p-3 text-center font-extrabold">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicSlider;
