import React, { useEffect, useState, useRef } from 'react';
import TopicsSlider from './TopicsSlider';
import LoadingSkeleton from './LoadingSkeleton';

function NodeJSCourses() {
    const [isLoading, setIsLoading] = useState(true);
    const nodeJSCoursesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && isLoading) {
                    const timer = setTimeout(() => {
                        setIsLoading(false);
                    }, 5000);
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0 }
        );

        if (nodeJSCoursesRef.current) {
            observer.observe(nodeJSCoursesRef.current);
        }

        return () => {
            if (nodeJSCoursesRef.current) {
                observer.unobserve(nodeJSCoursesRef.current);
            }
        };
    }, [isLoading]);

    const courses = [
        {
            name: "The Complete Node.js Developer Course",
            author: "Andrew Mead",
            stars: 4.9,
            peopleBought: 130000,
            price: "$79.99",
            lastUpdated: "December 2024",
            totalDuration: 34,
            description:
                "Learn Node.js from scratch, covering Express.js, MongoDB, and REST APIs. This course includes real-world projects such as creating a complete e-commerce app and a task manager.",
            image: "mern.png",
        },
        {
            name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
            author: "Jose Portilla",
            stars: 4.8,
            peopleBought: 110000,
            price: "$89.99",
            lastUpdated: "November 2024",
            totalDuration: 45,
            description:
                "A deep dive into backend development with Node.js, Express, and MongoDB. Learn how to build scalable REST APIs, manage data with MongoDB, and deploy apps with Heroku.",
            image: "mern.png",
        },
        {
            name: "Learn Node.js From Scratch",
            author: "Ryan Dhungel",
            stars: 4.7,
            peopleBought: 80000,
            price: "$69.99",
            lastUpdated: "October 2024",
            totalDuration: 20,
            description:
                "Start from the basics of Node.js and progress to build real-world applications. The course covers asynchronous programming, HTTP, and file system modules.",
            image: "mern.png",
        },
        {
            name: "Building Scalable Web Apps with Node.js",
            author: "Brad Traversy",
            stars: 4.8,
            peopleBought: 90000,
            price: "$99.99",
            lastUpdated: "September 2024",
            totalDuration: 30,
            description:
                "Learn how to build highly scalable web applications using Node.js, including implementing authentication, handling user requests, and managing databases.",
            image: "mern.png",
        },
        {
            name: "Mastering Node.js",
            author: "Mosh Hamedani",
            stars: 4.9,
            peopleBought: 70000,
            price: "$79.99",
            lastUpdated: "August 2024",
            totalDuration: 25,
            description:
                "Become a Node.js expert. Learn asynchronous programming, building APIs with Express, and interacting with databases like MongoDB. Great for aspiring backend developers.",
            image: "mern.png",
        },
        {
            name: "Node.js & Express - Full Course",
            author: "Colt Steele",
            stars: 4.7,
            peopleBought: 60000,
            price: "$69.99",
            lastUpdated: "July 2024",
            totalDuration: 15,
            description:
                "Learn the essentials of Node.js and Express.js. This course will help you build your first RESTful API and understand routing, middleware, and more.",
            image: "mern.png",
        },
        {
            name: "Node.js for Beginners",
            author: "Stephen Grider",
            stars: 4.9,
            peopleBought: 50000,
            price: "$49.99",
            lastUpdated: "June 2024",
            totalDuration: 18,
            description:
                "An introductory course to Node.js, focusing on building simple web apps, learning the basics of HTTP, and managing asynchronous operations.",
            image: "mern.png",
        },
        {
            name: "Complete Guide to Node.js",
            author: "Maximilian Schwarzmüller",
            stars: 4.8,
            peopleBought: 40000,
            price: "$99.99",
            lastUpdated: "May 2024",
            totalDuration: 40,
            description:
                "This complete guide covers Node.js and its ecosystem. Learn how to create RESTful APIs, handle authentication, work with databases, and deploy your Node.js applications.",
            image: "mern.png",
        },
    ];

    return (
        <div className='lg:ml-[100px] ml-4' ref={nodeJSCoursesRef}>
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <div>
                    <div>
                        <p className='text-3xl font-extrabold '>Featured courses in Node.Js</p>
                        <div>
                            <TopicsSlider course1={courses} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NodeJSCourses;