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
          description: `This course covers everything you need to know to build high-quality React applications. You'll start with the basics of React, JSX, and state management and progress to more advanced concepts like Redux, Next.js, and performance optimization. Whether you're a beginner or an experienced developer, you'll find this course engaging and informative.\n\nIn this course, you'll get hands-on experience building projects with React, including a real-world application. With in-depth explanations and practical examples, you'll gain a strong understanding of React and modern JavaScript practices. By the end, you'll be ready to tackle any React project with confidence.`
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
          description: `This course is your ultimate guide to mastering JavaScript, covering all the essentials from the basics to advanced concepts. You'll learn everything from functions, objects, and arrays to asynchronous JavaScript, closures, and object-oriented programming. Along the way, you’ll build a variety of real-world projects.\n\nBy the end of this course, you’ll have the skills to create dynamic, high-performance web applications with JavaScript. It's perfect for both beginners and developers looking to refresh their skills. With over 50 hours of content, this course is one of the most comprehensive JavaScript learning resources available.`
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
          description: `This course is designed to teach you Python from scratch with a focus on data science and machine learning. You'll learn how to work with libraries like NumPy, Pandas, and Matplotlib to process and visualize data. The course also introduces machine learning techniques using Scikit-learn and other powerful tools.\n\nThroughout the course, you will work on real-life datasets and projects, giving you a practical understanding of data analysis and machine learning workflows. By the end, you'll have the skills to apply Python for solving complex data science problems and building machine learning models.`
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
          description: `This bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript, Node.js, and MongoDB, you'll learn how to build fully-functional websites and web applications. Along the way, you’ll work on numerous projects that will help you develop a strong portfolio.\n\nWhether you want to build websites for your own business or pursue a career as a web developer, this course will equip you with all the skills and tools you need. With a hands-on approach and real-world examples, this is one of the most popular and comprehensive web development courses available.`
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
          description: `This comprehensive course teaches machine learning through hands-on Python and R projects. You’ll start with the basics of machine learning algorithms and then progress to advanced topics like deep learning, neural networks, and reinforcement learning. It’s designed for both beginners and those with experience in data science.\n\nBy working on multiple real-life projects, you’ll get the practical experience needed to build your own machine learning models. The course also covers how to select the right algorithm for different types of data and tasks, giving you the confidence to apply machine learning in your own work.`
        }
      ];
      


  return (
    <div className='mt-9 ml-[100px]'>
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
