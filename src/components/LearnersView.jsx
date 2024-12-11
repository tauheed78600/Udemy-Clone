import React from 'react'
import TopicsSlider from './TopicsCard';

function LearnersView() {


    const courses = [
        {
          name: "AWS Cloud Practitioner Essentials",
          author: "Amazon Web Services",
          stars: 4.7,
          peopleBought: 52000,
          price: "$99.99",
          lastUpdated: "September 2024",
          totalDuration: 10,
          description:
            "This course introduces you to the fundamentals of AWS cloud computing. Learn the core services, pricing models, and deployment techniques to make your journey into the cloud seamless and efficient.\n\nWith a hands-on approach, you'll understand how to build scalable applications, manage resources effectively, and secure your environment.",
          image: "awsImage.png",
        },
        {
          name: "Microsoft Azure Fundamentals",
          author: "Microsoft",
          stars: 4.8,
          peopleBought: 48000,
          price: "$89.99",
          lastUpdated: "August 2024",
          totalDuration: 9,
          description:
            "Dive into the fundamentals of Microsoft Azure with this beginner-friendly course. Understand cloud concepts, core Azure services, and security basics to build your expertise.\n\nThis course provides real-world scenarios and examples to make the concepts easy to grasp, enabling you to kickstart your career in Azure cloud technologies.",
          image: "AzureImg.png",
        },
        {
          name: "Google Cloud Platform (GCP) for Beginners",
          author: "Google Cloud",
          stars: 4.6,
          peopleBought: 40000,
          price: "$109.99",
          lastUpdated: "July 2024",
          totalDuration: 12,
          description:
            "Learn the essentials of Google Cloud Platform, including core services, deployment models, and cost management strategies. Perfect for beginners starting with cloud technologies.\n\nExplore practical use cases and step-by-step guidance to understand how GCP can transform your business and improve workflows.",
          image: "gcpImg.png",
        },
        {
          name: "DevOps Essentials for Beginners",
          author: "DevOps Academy",
          stars: 4.9,
          peopleBought: 60000,
          price: "$79.99",
          lastUpdated: "June 2024",
          totalDuration: 8,
          description:
            "Master the basics of DevOps, including CI/CD, containerization, and automation tools. Gain insights into modern DevOps workflows to streamline application development.\n\nThis course offers a comprehensive understanding of DevOps culture and practices, enabling teams to deliver better software faster.",
          image: "devopsImg.png",
        },
        {
          name: "Introduction to Kubernetes",
          author: "Kubernetes Academy",
          stars: 4.5,
          peopleBought: 39000,
          price: "$99.99",
          lastUpdated: "May 2024",
          totalDuration: 11,
          description:
            "Learn Kubernetes from scratch and understand how to orchestrate and manage containerized applications. This course covers core Kubernetes concepts, including pods, services, and deployments.\n\nGet hands-on experience with real-world projects to enhance your skills in managing scalable and resilient applications.",
          image: "kubernetesImg.png",
        },
        {
          name: "Certified Ethical Hacking (CEH) v12",
          author: "EC-Council",
          stars: 4.8,
          peopleBought: 70000,
          price: "$129.99",
          lastUpdated: "April 2024",
          totalDuration: 15,
          description:
            "Prepare for the CEH certification with this comprehensive course on ethical hacking and cybersecurity. Learn about penetration testing, threat analysis, and countermeasures to secure your systems.\n\nThis course equips you with the tools and techniques required to identify vulnerabilities and protect against cyberattacks effectively.",
          image: "cihImg.png",
        },
      ];
      


  return (
    <div className='ml-[100px] mt-12'>
      <div>
        <p className='font-extrabold text-3xl'>Learners are viewing</p>
      </div>
      <div>
      <TopicsSlider course1={courses}/>
      </div>
    </div>
  )
}

export default LearnersView
