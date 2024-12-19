import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import TopicsCard from './TopicsCard';
import { Link, useNavigate } from 'react-router-dom';

function TopicsSlider({ course1 }) {
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
    

    return (
        <div className="relative w-full">
            {canScrollLeft && (
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                    <button
                        onClick={scrollLeft}
                        className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                </div>
            )}
            {canScrollRight && (
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                    <button
                        onClick={scrollRight}
                        className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            )}

            <div
                ref={sliderRef}
                className="flex overflow-x-auto gap-4 p-4 h-[350px] scrollbar-hidden"
                
            >
                {course1.map((course, index) => (
                    <TopicsCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}

export default TopicsSlider;

