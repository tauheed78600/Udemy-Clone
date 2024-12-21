import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

function MoreCourses() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', updateScrollButtons);
      }
    };
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

  const courses = [
    {
      name: 'Advanced CSS and Sass: Flexbox, Grid, Animations',
      author: 'Jonas Schmedtmann',
      stars: 4.9,
      peopleBought: 90000,
      price: '$69.99',
      lastUpdated: 'July 2024',
      totalDuration: 22,
      description:
        'Dive deep into advanced CSS concepts like Flexbox, Grid, and animations. Learn how to style modern, responsive websites with best practices.',
      image: 'mern.png',
    },
    {
      name: 'The Complete React Developer Course',
      author: 'Andrew Mead',
      stars: 4.8,
      peopleBought: 150000,
      price: '$79.99',
      lastUpdated: 'June 2024',
      totalDuration: 40,
      description:
        'Master React development by building real-world projects. Learn hooks, routing, Redux, and more while developing apps that scale.',
      image: 'reactRedux.png',
    },
    {
      name: 'The Complete Web Developer in 2024: Zero to Mastery',
      author: 'Andrei Neagoie',
      stars: 4.8,
      peopleBought: 130000,
      price: '$99.99',
      lastUpdated: 'May 2024',
      totalDuration: 45,
      description:
        'A comprehensive web development course that covers HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and land your dream job.',
      image: 'webDev.png',
    },
  ];

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const renderCourses = (courseList) =>
    courseList.map((course, index) => (
      <div
        key={index}
        className="h-[300px] w-[300px]"
      >
        <img src={course.image} className="h-[130px] w-[300px]" alt={course.name} />
        <div className="p-2">
          <p className="font-extrabold">{course.name}</p>
          <p className="text-xs text-gray-600">{course.author}</p>
          <div>
            <p className="flex gap-1 font-extrabold">
              {course.stars}
              <Star className="h-4 mt-1" />
            </p>
            <div className="flex gap-2">
              <p className="font-extrabold flex gap-1">{course.price}</p>
              <p className="text-sm text-gray-700">({course.peopleBought})</p>
            </div>
            <p className="bg-yellow-200 text-sm w-[65px]">Bestseller</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="mt-4">
      <div className='z-50'>
        <p className="font-extrabold text-2xl">
          More Courses by <span className="text-violet-800">Andrew Mead</span>
        </p>
        {isMobile ? (
          <div className="relative w-full mt-4">
            {canScrollLeft && <button
              onClick={scrollLeft}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>}
            {canScrollRight && <button
              onClick={scrollRight}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scrollbar-hidden"
            >
              {renderCourses(courses)}
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-4 mt-4">{renderCourses(courses)}</div>
        )}
      </div>
      <Button className="mb-4 rounded-none w-full hover:bg-slate-300 bg-white border-black text-black">
        Report Abuse
      </Button>
    </div>
  );
}




export default MoreCourses;