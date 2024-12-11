import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

function TopicsCard({ course }) {
    const [hover, setHover] = useState(false);
    const [hoverPosition, setHoverPosition] = useState('right');
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        setHover(true);
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            const hoverContentWidth = 350;

            if (rect.right + hoverContentWidth > screenWidth) {
                setHoverPosition('left');
            } else {
                setHoverPosition('right');
            }
        }
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <div
            ref={cardRef}
            className="relative flex-shrink-0 w-[250px] h-[260px]  p-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="h-[120px] w-full object-cover"
                src={course.image}
                alt={course.name}
            />
            <div className="p-2">
                <b className="text-lg">{course.name}</b>
                <p className="text-xs text-gray-700">{course.author}</p>
                <div className="flex items-center gap-2 mt-1">
                    <p className="text-black font-bold">{course.stars} ★</p>
                    <span className="text-sm text-gray-700 font-light">
                        ({course.peopleBought})
                    </span>
                </div>
                <b className="block mt-2">{course.price}</b>
                <div className="border-2 border-yellow-200 bg-yellow-200 w-[80px] text-center text-sm mt-2">
                    Bestseller
                </div>
            </div>

            {hover && (
                <div
                    className={`absolute top-0 ${
                        hoverPosition === 'right' ? 'left-[300px]' : '-left-[350px]'
                    } w-[350px] h-[430px] bg-white border border-gray-300 shadow-xl p-4 z-30`}
                >
                    <b className="font-extrabold text-lg">{course.name}</b>
                    <div className="flex justify-start gap-3">
                        <div className="border-2 h-[20px] w-[70px] bg-yellow-200">
                            <p className="text-sm">Bestseller</p>
                        </div>
                        <div className="text-xs">
                            <p className="text-green-400 font-bold">
                                Updated: <b className="text-green-800">{course.lastUpdated}</b>
                            </p>
                            <p>{course.totalDuration} total hours</p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm">{course.description}</p>
                    <div className="flex justify-between mt-1">
                        <Button className="bg-violet-700 w-[250px]">Add to Cart</Button>
                        <div className="h-12 w-12 border-2 border-black rounded-full p-1">
                            <Heart className="h-9 ml-1" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function TopicsSlider({ course1 }) {
    const sliderRef = useRef(null);

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
                className="flex overflow-x-auto gap-4 p-4 h-[500px] scrollbar-hidden"
            >
                {course1.map((course, index) => (
                    <TopicsCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}

export default TopicsSlider;

