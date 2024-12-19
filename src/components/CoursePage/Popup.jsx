import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

function Popup() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        isVisible && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white h-[300px] p-6 shadow-lg w-[550px] text-center -z-10" style={{backgroundImage: 'url(splashBG.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                   
                    <h2 className="text-xl font-bold mt-20">Welcome!</h2>
                    <p className='font-extrabold'>Get 50% discount on this course if you buy before the day ends</p>
                    <Button
                        className="mt-4 bg-violet-500 text-white px-4 py-2 rounded-none"
                        onClick={() => setIsVisible(false)}
                    >
                        Close
                    </Button>
                </div>
            </div>
        )
    );
}

export default Popup;
