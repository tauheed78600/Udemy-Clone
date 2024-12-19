import React from 'react'
import TopicSlider from '../Homepage/TopicSlider'

function TopicsRecommended() {

    const courses = [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "Python",
        "ChatGPT",
        "NodeJS",
        "MongoDB",
        "Javascript",
        "Web Development",
        "Express Framework",
        "ReactJS",
        "AngularJS",
        "VueJS",
        "Spring Boot",
        "Vanilla JS",
        "NestJS",
        "Data Structures"
    ]

  return (
    <div className='lg:ml-[100px] ml-2'>
      <p className='font-extrabold text-2xl mb-3'>Topics recommended for you</p>
      <div>
        <TopicSlider courses = {courses}/>
      </div>
    </div>
  )
}

export default TopicsRecommended
