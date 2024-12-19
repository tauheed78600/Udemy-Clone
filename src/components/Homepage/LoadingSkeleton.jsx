import React, { useState, useEffect } from 'react';

function LoadingSkeleton() {
    const [isLoading, setIsLoading] = useState(true);
    console.log("inside loading skeleton component")

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="animate-pulse space-y-4 p-4">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-32 bg-gray-300 rounded"></div>
            </div>
        );
    }

    return null;
}

export default LoadingSkeleton;