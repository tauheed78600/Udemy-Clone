import React from 'react'
import TopicsSlider from './TopicsSlider';

function LearnNext() {

    const courses = [
        {
          image: "reactImage.jpeg",
          name: "React The Complete Guide",
          author: "Maximilian Schwarzmüller",
          stars: 4.8,
          peopleBought: 120000,
          price: "$29.99",
          lastUpdated: "2024-11-10",
          totalDuration: 34,
          description: `This course covers everything you need to know to build high-quality React applications. You'll start with the basics of React, JSX, and state management and progress to more advanced concepts like Redux, Next.js, and performance optimization. `
        },
        {
          image: "jsCourse.png",
          name: "The Complete JavaScript Course 2024",
          author: "Jonas Schmedtmann",
          stars: 4.9,
          peopleBought: 85000,
          price: "$24.99",
          lastUpdated: "2024-10-15",
          totalDuration: 50,
          description: `This course is your ultimate guide to mastering JavaScript, covering all the essentials from the basics to advanced concepts. You'll learn everything from functions, objects, and arrays to asynchronous JavaScript, closures, and object-oriented programming.`
        },
        {
          image: "python.png", 
          name: "Python for Data Science and Machine Learning",
          author: "Jose Portilla",
          stars: 4.7,
          peopleBought: 65000,
          price: "$34.99",
          lastUpdated: "2024-09-22",
          totalDuration: 40,
          description: `This course is designed to teach you Python from scratch with a focus on data science and machine learning. You'll learn how to work with libraries like NumPy, Pandas, and Matplotlib to process and visualize data. The course also introduces machine learning techniques using Scikit-learn and other powerful tools.`
        },
        {
          image: "webDev.png",
          name: "Complete Web Development Bootcamp",
          author: "Dr. Angela Yu",
          stars: 4.8,
          peopleBought: 95000,
          price: "$39.99",
          lastUpdated: "2024-11-05",
          totalDuration: 40,
          description: `This bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript, Node.js, and MongoDB, you'll learn how to build fully-functional websites and web applications.`
        },
        { 
          image: "mler.png",
          name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
          author: "Kirill Eremenko",
          stars: 4.8,
          peopleBought: 140000,
          price: "$49.99",
          lastUpdated: "2024-12-01",
          totalDuration: 45,
          description: `This comprehensive course teaches machine learning through hands-on Python and R projects. You’ll start with the basics of machine learning algorithms and then progress to advanced topics like deep learning, neural networks, and reinforcement learning. `
        }
      ];
      


  return (
    <div className='mt-9 ml-4 lg:ml-[100px]'>
      <b className='text-4xl font-extrabold'>What To Learn Next</b>
      <p className='text-2xl font-extrabold mt-3'>Recommended for you</p>
      <div className=''>
        {/* {courses.map((course, index)=>( */}
            <TopicsSlider course1={courses}/>
        {/* // ))} */}
      </div>
    </div>
  )
}

export default LearnNext
