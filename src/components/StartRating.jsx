import React from 'react'
import { Star } from 'lucide-react'

function StartRating() {
    return (
        <div className="flex flex-row gap-0 ml-2">
            {/* Render 5 stars */}
            <Star className="text-yellow-500 h-4" />
            <Star className="text-yellow-500 h-4" />
            <Star className="text-yellow-500 h-4" />
            <Star className="text-yellow-500 h-4" />
            <Star className="text-yellow-500 h-4" />
        </div>
    )
}

export default StartRating
