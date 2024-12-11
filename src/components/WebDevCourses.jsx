import React from 'react'
import TopicsSlider from './TopicsCard';

function WebDevCourses() {


    const courses = [
        {
          name: "The Complete Web Developer Bootcamp",
          author: "Colt Steele",
          stars: 4.9,
          peopleBought: 200000,
          price: "$99.99",
          lastUpdated: "December 2024",
          totalDuration: 50,
          description:
            "Learn everything you need to know about web development from front-end to back-end, including HTML, CSS, JavaScript, Node.js, React, and more.",
          image: "https://via.placeholder.com/300x120?text=Web+Developer+Bootcamp",
        },
        {
          name: "Modern Web Development with React",
          author: "Maximilian Schwarzmüller",
          stars: 4.8,
          peopleBought: 150000,
          price: "$89.99",
          lastUpdated: "November 2024",
          totalDuration: 35,
          description:
            "A comprehensive course on modern React development, covering hooks, context, routing, Redux, and building dynamic web applications.",
          image: "https://via.placeholder.com/300x120?text=Modern+React+Development",
        },
        {
          name: "The Complete JavaScript Course 2024: From Zero to Expert",
          author: "Jonas Schmedtmann",
          stars: 4.9,
          peopleBought: 180000,
          price: "$89.99",
          lastUpdated: "October 2024",
          totalDuration: 50,
          description:
            "Master JavaScript from basics to advanced concepts like ES6, OOP, and asynchronous JavaScript. Build real-world projects and gain a solid understanding of JavaScript.",
          image: "https://via.placeholder.com/300x120?text=Complete+JavaScript+Course",
        },
        {
          name: "Build Responsive Real-World Websites with HTML and CSS",
          author: "Jonas Schmedtmann",
          stars: 4.8,
          peopleBought: 120000,
          price: "$79.99",
          lastUpdated: "September 2024",
          totalDuration: 40,
          description:
            "Learn to build modern, responsive websites with HTML and CSS. Understand layout techniques like Flexbox and Grid, and build real-world projects.",
          image: "https://via.placeholder.com/300x120?text=Responsive+Websites+with+HTML+CSS",
        },
        {
          name: "Web Development Bootcamp 2024",
          author: "Angela Yu",
          stars: 4.9,
          peopleBought: 220000,
          price: "$99.99",
          lastUpdated: "August 2024",
          totalDuration: 60,
          description:
            "This bootcamp covers everything from front-end to back-end, including HTML, CSS, JavaScript, Node.js, MongoDB, and more. Build full-stack applications.",
          image: "https://via.placeholder.com/300x120?text=Web+Development+Bootcamp",
        },
        {
          name: "Advanced CSS and Sass: Flexbox, Grid, Animations",
          author: "Jonas Schmedtmann",
          stars: 4.9,
          peopleBought: 90000,
          price: "$69.99",
          lastUpdated: "July 2024",
          totalDuration: 22,
          description:
            "Dive deep into advanced CSS concepts like Flexbox, Grid, and animations. Learn how to style modern, responsive websites with best practices.",
          image: "https://via.placeholder.com/300x120?text=Advanced+CSS+Sass",
        },
        {
          name: "The Complete React Developer Course",
          author: "Andrew Mead",
          stars: 4.8,
          peopleBought: 150000,
          price: "$79.99",
          lastUpdated: "June 2024",
          totalDuration: 40,
          description:
            "Master React development by building real-world projects. Learn hooks, routing, Redux, and more while developing apps that scale.",
          image: "https://via.placeholder.com/300x120?text=Complete+React+Developer+Course",
        },
        {
          name: "The Complete Web Developer in 2024: Zero to Mastery",
          author: "Andrei Neagoie",
          stars: 4.8,
          peopleBought: 130000,
          price: "$99.99",
          lastUpdated: "May 2024",
          totalDuration: 45,
          description:
            "A comprehensive web development course that covers HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and land your dream job.",
          image: "https://via.placeholder.com/300x120?text=Complete+Web+Developer+Course",
        },
      ];



  return (
    <div className='ml-[100px]'>
    <div>
      <p className='text-3xl font-extrabold '>Top courses in Web Development</p>
      <div>
      <TopicsSlider course1={courses}/>
      </div>
    </div>
  </div>
  )
}

export default WebDevCourses
