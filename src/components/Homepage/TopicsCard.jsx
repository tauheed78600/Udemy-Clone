import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TopicsCard({ course }) {
    const [hover, setHover] = useState(false);
    const [hoverPosition, setHoverPosition] = useState('right');
    const cardRef = useRef(null);

    const navigate = useNavigate();

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

    const handleClick = () => {
        navigate('/coursecontent');
    };

    return (
        <div
            ref={cardRef}
            className="relative flex-shrink-0 w-[250px] h-[260px] p-2 "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
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
                  hover ? 'left-[250px] hidden lg:block' : '-left-[350px] hidden'
                } w-[350px] h-auto bg-white border border-gray-300 shadow-xl p-4 z-30`}
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

export default TopicsCard;
