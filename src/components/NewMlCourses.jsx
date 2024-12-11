import React from 'react'
import TopicsSlider from './TopicsCard';

function NewMlCourses() {

    const courses = [
        {
          name: "Machine Learning Fundamentals with Python",
          author: "Dr. Sarah Johnson",
          stars: 4.8,
          peopleBought: 45000,
          price: "$99.99",
          lastUpdated: "November 2024",
          totalDuration: 15,
          description:
            "A complete beginner’s guide to Machine Learning concepts, tools, and techniques using Python. Covers supervised and unsupervised learning, and real-world applications.\n\nLearn to use libraries like Scikit-learn and Pandas for building ML models.",
          image: "https://via.placeholder.com/300x120?text=ML+Fundamentals+Python",
        },
        {
          name: "Deep Learning with TensorFlow 2.0",
          author: "Prof. Alex Carter",
          stars: 4.9,
          peopleBought: 52000,
          price: "$119.99",
          lastUpdated: "October 2024",
          totalDuration: 18,
          description:
            "Master deep learning using TensorFlow 2.0. Build neural networks, CNNs, RNNs, and GANs. Learn state-of-the-art techniques for image and text data.\n\nThis course includes hands-on projects to solidify your knowledge.",
          image: "https://via.placeholder.com/300x120?text=Deep+Learning+TensorFlow",
        },
        {
          name: "Reinforcement Learning for Beginners",
          author: "Emily Rose",
          stars: 4.7,
          peopleBought: 38000,
          price: "$89.99",
          lastUpdated: "September 2024",
          totalDuration: 12,
          description:
            "Dive into the world of reinforcement learning. Understand Q-learning, policy gradients, and value iteration. Learn to train intelligent agents for games and real-world tasks.\n\nIdeal for those starting with AI and RL concepts.",
          image: "https://via.placeholder.com/300x120?text=Reinforcement+Learning",
        },
        {
          name: "Advanced Natural Language Processing with Transformers",
          author: "Michael Brown",
          stars: 4.9,
          peopleBought: 44000,
          price: "$129.99",
          lastUpdated: "August 2024",
          totalDuration: 20,
          description:
            "Learn cutting-edge NLP techniques using transformer models like BERT, GPT, and T5. Implement real-world applications like chatbots, sentiment analysis, and text summarization.\n\nThis course emphasizes hands-on coding with Hugging Face.",
          image: "https://via.placeholder.com/300x120?text=Advanced+NLP+Transformers",
        },
        {
          name: "Data Science and Machine Learning Bootcamp",
          author: "Dr. Angela Yu",
          stars: 4.8,
          peopleBought: 50000,
          price: "$149.99",
          lastUpdated: "July 2024",
          totalDuration: 25,
          description:
            "An all-in-one bootcamp covering data science and machine learning. Topics include regression, classification, clustering, and deep learning.\n\nBuild projects in Python and learn to deploy models on cloud platforms.",
          image: "https://via.placeholder.com/300x120?text=DS+ML+Bootcamp",
        },
        {
          name: "Explainable AI: Interpreting Machine Learning Models",
          author: "Laura Green",
          stars: 4.7,
          peopleBought: 32000,
          price: "$99.99",
          lastUpdated: "June 2024",
          totalDuration: 10,
          description:
            "Understand explainability in machine learning models. Learn techniques like SHAP, LIME, and interpretability of tree-based models.\n\nThis course is perfect for those aiming to build ethical and transparent AI systems.",
          image: "https://via.placeholder.com/300x120?text=Explainable+AI",
        },
        {
          name: "Generative AI with Stable Diffusion and MidJourney",
          author: "Sophia Adams",
          stars: 4.9,
          peopleBought: 60000,
          price: "$179.99",
          lastUpdated: "May 2024",
          totalDuration: 16,
          description:
            "Explore the fascinating world of generative AI. Build applications using Stable Diffusion, DALL-E, and MidJourney for image generation and creative AI tasks.\n\nA must-learn for those looking to work on next-gen AI tools.",
          image: "https://via.placeholder.com/300x120?text=Generative+AI",
        },
      ];


  return (
    <div className='ml-[100px]'>
    <div>
      <p className='text-3xl font-extrabold '>Newest courses in Machine Learning</p>
      <div>
      <TopicsSlider course1={courses}/>
      </div>
    </div>
  </div>
  )
}

export default NewMlCourses
