import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TopicsCard from './TopicsCard';

function TopicsSlider({ course1 }) {
    const sliderRef = useRef(null);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setVisibleCards(2);
        } else if (width < 1024) {
            setVisibleCards(4);
        } else {
            setVisibleCards(5);
        }
    };

    const updateScrollButtons = () => {
        setCanScrollLeft(currentStartIndex > 0);
        setCanScrollRight(currentStartIndex + visibleCards < course1.length);
    };

    const scrollLeft = () => {
        if (currentStartIndex > 0) {
            setCurrentStartIndex(prev => Math.max(prev - 1, 0));
        }
    };

    const scrollRight = () => {
        if (currentStartIndex + visibleCards < course1.length) {
            setCurrentStartIndex(prev => Math.min(prev + 1, course1.length - visibleCards));
        }
    };

    useEffect(() => {
        updateVisibleCards();
        updateScrollButtons();
        window.addEventListener('resize', updateVisibleCards);

        return () => {
            window.removeEventListener('resize', updateVisibleCards);
        };
    }, [currentStartIndex]);

    useEffect(() => {
        updateScrollButtons();
    }, [visibleCards, currentStartIndex]);

    return (
        <div className="relative w-[95%]">
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
                className="flex overflow-x-hidden gap-4 p-4 h-[350px] scrollbar-hidden"
            >
                {course1.slice(currentStartIndex, currentStartIndex + visibleCards).map((course, index) => (
                    <TopicsCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}

export default TopicsSlider;