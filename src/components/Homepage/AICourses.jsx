import React, { useEffect, useState, useRef } from 'react';
import TopicsSlider from './TopicsSlider';
import LoadingSkeleton from './LoadingSkeleton';

function AICourses() {
    const [isLoading, setIsLoading] = useState(true);
    const aiCoursesRef = useRef(null);

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

        if (aiCoursesRef.current) {
            observer.observe(aiCoursesRef.current);
        }

        return () => {
            if (aiCoursesRef.current) {
                observer.unobserve(aiCoursesRef.current);
            }
        };
    }, [isLoading]);

    const courses = [
        {
            name: "AI for Everyone",
            author: "Andrew Ng",
            stars: 4.9,
            peopleBought: 120000,
            price: "$49.99",
            lastUpdated: "December 2024",
            totalDuration: 11,
            description:
                "This course introduces AI concepts to non-technical audiences. Learn how AI is transforming industries and gain insights into the ethical considerations surrounding AI technologies.\n\nNo coding required, perfect for business leaders and enthusiasts.",
            image: "AIimg.png",
        },
        {
            name: "Deep Learning Specialization",
            author: "Andrew Ng",
            stars: 4.9,
            peopleBought: 95000,
            price: "$199.99",
            lastUpdated: "November 2024",
            totalDuration: 30,
            description:
                "A comprehensive deep learning course that covers neural networks, CNNs, RNNs, and more. Perfect for those who want to build a strong foundation in AI and machine learning.\n\nHands-on projects using TensorFlow.",
            image: "dlTens.png",
        },
        {
            name: "Artificial Intelligence A-Z™: Learn How to Build an AI",
            author: "Hadelin de Ponteves, Kirill Eremenko",
            stars: 4.8,
            peopleBought: 250000,
            price: "$99.99",
            lastUpdated: "October 2024",
            totalDuration: 22,
            description:
                "From basics to advanced, this course covers machine learning, deep learning, and reinforcement learning to build AI projects like self-driving cars and AI agents.\n\nHands-on with Python and various AI algorithms.",
            image: "AIimg.png",
        },
        {
            name: "Machine Learning with Python",
            author: "Joseph Santarcangelo",
            stars: 4.7,
            peopleBought: 50000,
            price: "$69.99",
            lastUpdated: "September 2024",
            totalDuration: 18,
            description:
                "Master machine learning using Python. Learn classification, regression, clustering, and more using libraries like Scikit-learn and Keras.\n\nIncludes practical coding assignments to apply your learning.",
            image: "AIimg.png",
        },
        {
            name: "Artificial Intelligence and Machine Learning for Business",
            author: "James Williams",
            stars: 4.6,
            peopleBought: 40000,
            price: "$59.99",
            lastUpdated: "August 2024",
            totalDuration: 14,
            description:
                "This course is designed for business professionals to understand how AI and ML can be leveraged to drive business growth. Learn how to implement AI in real-world business scenarios.\n\nNo programming knowledge required.",
            image: "AIimg.png",
        },
        {
            name: "Mastering Reinforcement Learning with Python",
            author: "Michael Bell",
            stars: 4.8,
            peopleBought: 45000,
            price: "$109.99",
            lastUpdated: "July 2024",
            totalDuration: 20,
            description:
                "Master reinforcement learning concepts and techniques with practical Python code examples. Learn how agents can be trained to solve complex decision-making problems.\n\nGreat for AI enthusiasts and aspiring researchers.",
            image: "AIimg.png",
        },
        {
            name: "AI and Data Science: From Basics to Advanced",
            author: "Dr. Stephanie Scott",
            stars: 4.7,
            peopleBought: 55000,
            price: "$79.99",
            lastUpdated: "June 2024",
            totalDuration: 25,
            description:
                "Learn AI and data science from the ground up. Cover topics like data analysis, machine learning algorithms, and neural networks.\n\nPractical approach with coding assignments and projects in Python.",
            image: "AIimg.png",
        },
        {
            name: "Building AI Applications with TensorFlow",
            author: "David Jenkins",
            stars: 4.8,
            peopleBought: 48000,
            price: "$119.99",
            lastUpdated: "May 2024",
            totalDuration: 16,
            description:
                "Learn how to build and deploy AI models using TensorFlow. This course covers real-world applications like image recognition, NLP, and more.\n\nPerfect for those looking to build AI systems using state-of-the-art tools.",
            image: "AIimg.png",
        },
    ];

    return (
        <div className='lg:ml-[100px] ml-4' ref={aiCoursesRef}>
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <div>
                    <div>
                        <p className='text-3xl font-extrabold '>Featured courses in Artificial Intelligence (AI)</p>
                        <div>
                            <TopicsSlider course1={courses} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AICourses;