import React from 'react'
import TopicsSlider from './TopicsSlider';

function ShortCourses() {


    const courses = [
        {
          name: "Custom React Hooks: Enhance Your React Skills",
          author: "John Doe",
          stars: 4.8,
          peopleBought: 35000,
          price: "$74.99",
          lastUpdated: "October 2024",
          totalDuration: 8,
          description:
            "Learn to create reusable and efficient custom React hooks for advanced functionality. This course dives deep into how React hooks work and how to build your own.\n\nBy the end of this course, you'll be able to simplify your React code and make your components more readable and maintainable.",
          image: "reactImage.jpeg",
        },
        {
          name: "Redux Saga with React: A Comprehensive Guide",
          author: "Jane Smith",
          stars: 4.7,
          peopleBought: 42000,
          price: "$89.99",
          lastUpdated: "September 2024",
          totalDuration: 12,
          description:
            "Master Redux Saga to handle complex state and side effects in React applications. This course covers advanced techniques to build scalable React projects.\n\nYou'll learn the power of generator functions, asynchronous programming, and middleware, enabling you to manage state in large applications.",
          image: "reactRedux.png",
        },
        {
          name: "Learn Game Development with JavaScript",
          author: "David Johnson",
          stars: 4.6,
          peopleBought: 31000,
          price: "$99.99",
          lastUpdated: "August 2024",
          totalDuration: 14,
          description:
            "Learn how to build interactive 2D and 3D games using JavaScript. This course walks you through game physics, animations, and collision detection.\n\nWhether you're a beginner or experienced developer, you'll gain the skills to create games for browsers, desktop, or mobile platforms.",
          image: "gameDev.png",
        },
        {
          name: "Node.js & Express.js: Integration and Unit Testing",
          author: "Robert Lee",
          stars: 4.9,
          peopleBought: 29000,
          price: "$119.99",
          lastUpdated: "July 2024",
          totalDuration: 10,
          description:
            "Learn to write reliable and maintainable unit and integration tests for your Node.js and Express.js applications. This course covers testing frameworks like Jest and Mocha.\n\nYou'll gain confidence in deploying error-free applications with robust testing strategies and automation tools.",
          image: "mern.png",
        },
        {
          name: "Mastering React Hooks: React Hooks for Web Development",
          author: "Emily Davis",
          stars: 4.8,
          peopleBought: 37000,
          price: "$79.99",
          lastUpdated: "June 2024",
          totalDuration: 9,
          description:
            "Master React Hooks and take your web development skills to the next level. This course explores advanced hooks, performance optimization, and state management.\n\nYou'll build real-world projects and learn how to write reusable, clean, and efficient React code.",
          image: "reactRedux.png",
        },
        {
          name: "Redux and Redux Toolkit in React (Crash Course)",
          author: "Chris Williams",
          stars: 4.7,
          peopleBought: 34000,
          price: "$69.99",
          lastUpdated: "May 2024",
          totalDuration: 6,
          description:
            "Learn Redux and Redux Toolkit with React in this fast-paced crash course. Understand state management and implement it in your React applications.\n\nBy the end, you'll have a solid understanding of Redux concepts, including slices, reducers, and middleware.",
          image: "reactRedux.png",
        },
        {
          name: "JavaScript Web Animations with Greensock (GSAP) 2024",
          author: "Anna Taylor",
          stars: 4.9,
          peopleBought: 46000,
          price: "$94.99",
          lastUpdated: "April 2024",
          totalDuration: 10,
          description:
            "Create stunning web animations with Greensock (GSAP) in this comprehensive course. Learn animation basics, advanced techniques, and practical applications.\n\nYou'll be able to create dynamic and engaging user interfaces with animation libraries that make your websites stand out.",
          image: "jsTopPick.jpeg",
        },
        {
          name: "Node.js Cluster with PM2, RabbitMQ, Redis, and Nginx",
          author: "Mark Thompson",
          stars: 4.8,
          peopleBought: 39000,
          price: "$109.99",
          lastUpdated: "March 2024",
          totalDuration: 13,
          description:
            "Learn to build scalable and high-performance Node.js applications using clustering, PM2, RabbitMQ, Redis, and Nginx. This course focuses on distributed systems.\n\nYou'll master advanced deployment strategies and techniques to handle high traffic and ensure fault tolerance.",
          image: "mern.png",
        },
      ];


  return (
    <div className='ml-[100px]'>
      <p className='text-3xl font-extrabold '>Short and sweet courses for you</p>
      <div>
        <TopicsSlider course1={courses}/>
        </div>
    </div>
  )
}

export default ShortCourses
