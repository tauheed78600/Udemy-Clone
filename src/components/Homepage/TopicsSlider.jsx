import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TopicsCard from './TopicsCard';

function TopicsSlider({ course1 }) {
    const sliderRef = useRef(null);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3); // Default number of cards to show
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to update the number of visible cards based on screen size
    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width < 640) {
            setVisibleCards(2); // Mobile
        } else if (width < 1024) {
            setVisibleCards(4); // Tablet
        } else {
            setVisibleCards(5); // Desktop
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
        updateVisibleCards(); // Set initial visible cards
        updateScrollButtons(); // Update scroll buttons
        window.addEventListener('resize', updateVisibleCards); // Update on resize

        return () => {
            window.removeEventListener('resize', updateVisibleCards); // Cleanup
        };
    }, [currentStartIndex]);

    useEffect(() => {
        updateScrollButtons(); // Update scroll buttons when visible cards change
    }, [visibleCards, currentStartIndex]);

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