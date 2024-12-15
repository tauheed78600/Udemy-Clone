import React from 'react'
import TopicsSlider from '../Homepage/TopicsSlider';

function Ratings() {


    const courses = [
        {
          name: "TypeScript: The Complete Developer's Guide",
          author: "Maximilian Schwarzmüller",
          stars: 4.8,
          peopleBought: 45000,
          price: "$94.99",
          lastUpdated: "October 2024",
          totalDuration: 12,
          description:
            "Learn TypeScript from the ground up and explore its features, including advanced types, generics, and decorators. Gain practical experience by building real-world projects.\n\nThis course helps you master TypeScript's type system, making your code more reliable and scalable for modern JavaScript applications.",
          image: "typescript.png",
        },
        {
          name: "Node.js, Express.js & MongoDB: The Complete Guide",
          author: "Andrew Mead",
          stars: 4.9,
          peopleBought: 62000,
          price: "$99.99",
          lastUpdated: "September 2024",
          totalDuration: 14,
          description:
            "Master Node.js, Express.js, and MongoDB by building modern REST APIs. Learn how to structure applications, handle authentication, and deploy your apps to production.\n\nThis comprehensive guide takes you from beginner to advanced concepts with hands-on projects to solidify your knowledge.",
          image: "mern.png",
        },
        {
          name: "MERN Stack Mastery: Full-Stack Development",
          author: "Jonas Schmedtmann",
          stars: 4.7,
          peopleBought: 54000,
          price: "$119.99",
          lastUpdated: "August 2024",
          totalDuration: 15,
          description:
            "Learn to build powerful full-stack applications with the MERN stack. This course covers MongoDB, Express.js, React, and Node.js in depth, with a focus on real-world projects.\n\nYou'll gain practical knowledge of full-stack architecture, state management, and deployment strategies to build scalable web applications.",
          image: "mern.png",
        },
        {
          name: "Build Responsive Websites: HTML, CSS & JavaScript",
          author: "Colt Steele",
          stars: 4.6,
          peopleBought: 58000,
          price: "$79.99",
          lastUpdated: "July 2024",
          totalDuration: 10,
          description:
            "Learn the fundamentals of web development and create responsive websites with HTML, CSS, and JavaScript. This course focuses on design principles and usability.\n\nYou'll work on real-world projects and learn how to make websites that look great on any device, from desktops to smartphones.",
          image: "responsive.png",
        },
        {
          name: "Modern React with Redux",
          author: "Stephen Grider",
          stars: 4.9,
          peopleBought: 80000,
          price: "$124.99",
          lastUpdated: "June 2024",
          totalDuration: 13,
          description:
            "Master React and Redux to build highly interactive user interfaces. This course covers everything from component-based architecture to state management with Redux.\n\nYou'll gain hands-on experience with React hooks, context API, and advanced Redux techniques to build scalable and maintainable applications.",
          image: "reactRedux.png",
        },
        {
          name: "React Native: The Practical Guide",
          author: "Academind by Maximilian Schwarzmüller",
          stars: 4.8,
          peopleBought: 70000,
          price: "$129.99",
          lastUpdated: "May 2024",
          totalDuration: 16,
          description:
            "Build mobile applications for iOS and Android with React Native. Learn how to use React Native components, handle navigation, and integrate APIs for real-world applications.\n\nThis course provides hands-on experience with modern development workflows and advanced features like animations and offline functionality.",
          image: "reactNative.png",
        },
      ];


  return (
    <div className='ml-[100px]'>
      <div>
        <p className='text-3xl font-extrabold '>Recommended to you based on ratings</p>
        <div>
        <TopicsSlider course1={courses}/>
        </div>
      </div>
    </div>
  )
}

export default Ratings
