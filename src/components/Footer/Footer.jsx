import React from 'react';
import { Button } from '../ui/button'; 
import { Globe } from 'lucide-react';

function Footer() {
  return (
    <div className="bottom-0 relative">
      <div className="bg-black text-white text-center py-2">
        <div className="text-white flex md:flex-row md:px-9 px-6 justify-between items-center lg:flex lg:justify-between">
          <div className="text-left md:mb-0">
            <p className="font-extrabold mt-4 text-xl">Teach the world online</p>
            <p className='text-sm md:text-base lg:w-[500px]'>Create an online video course, reach students across the globe, and earn money</p>
            <Button className="border-white mr-12 mt-4">Teach on Udemy</Button>
          </div>
        </div>
        <hr className='bg-white mt-4' />
        <div className='flex flex-col text-xl py-2 px-6 md:flex-row items-center md:items-start text-center md:text-left'>
          <p className='mt-4 p-2 text-base md:text-lg mb-4 md:mb-0 md:w-1/2 font-extrabold'>Top companies choose <span className='text-violet-400 font-extrabold'>Udemy Business</span> to build in-demand career skills.</p>
          <div className='flex justify-center flex-wrap md:justify-evenly gap-3 mt-4'>
            <img src='Nasdaq.png'></img>
            <img src='Volkswagen.jpeg'></img>
            <img src='Box.png'></img>
            <img src='NetApp.png'></img>
            <img src='Eventbrite.png'></img>
          </div>

        </div>
        <hr className='bg-white mt-4' />
        <div className='mt-4 flex flex-col text-left ml-[30px]'>
          <b className='text-xl'>Explore top skills and certifications</b>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm'>
            <div className='text-left'>
              <b className='font-extrabold'>Certifications by Issuer</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Amazon Web Services (AWS) Certifications</p>
                <p>Six Sigma Certifications</p>
                <p>Microsoft Certifications</p>
                <p>Cisco Certifications</p>
                <p>Tableau Certifications</p>
                <p>See all Certifications</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Web Development</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Web Development</p>
                <p>Javascript</p>
                <p>ReactJS</p>
                <p>Angular</p>
                <p>Java</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>IT Certifications</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Amazon AWS</p>
                <p>AWS Certified Cloud Practitioner</p>
                <p>AZ-900: Microsoft Azure Fundamentals</p>
                <p>AWS Certified Solutions Architect - Associate</p>
                <p>Tableau Certifications</p>
                <p>Kubernetes</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Leadership</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Leadership</p>
                <p>Management Skills</p>
                <p>Project Management</p>
                <p>Personal Productivity</p>
                <p>Emotional Intelligence</p>
              </div>
            </div>
          
            <div className='text-left'>
              <b className='font-extrabold'>Certifications by Skill</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Cybersecurity Certification</p>
                <p>Project Management Certification</p>
                <p>Cloud Certification</p>
                <p>Data Analytics Certification</p>
                <p>HR Management Certification</p>
                <p>See all Certifications</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Data Science</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Data Science</p>
                <p>Python</p>
                <p>Machine Learning</p>
                <p>ChatGPT</p>
                <p>Deep Learning</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Communication</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Communication Skills</p>
                <p>Presentation Skills</p>
                <p>Public Speaking</p>
                <p>Writing</p>
                <p>PowerPoint</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Business Analytics & Intelligence</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Microsoft Excel</p>
                <p>SQL</p>
                <p>Microsoft Power BI</p>
                <p>Data Analysis</p>
                <p>Business Analysis</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>About</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>About us</p>
                <p>Careers</p>
                <p>Contact us</p>
                <p>Blog</p>
                <p>Investors</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Discovery Udemy</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Get the app</p>
                <p>Teach on Udemy</p>
                <p>Plans and Pricing</p>
                <p>Affiliate</p>
                <p>Help and Support</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Udemy for Business</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Udemy for Business</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Legal & Accessibility</b>
              <div className='flex flex-col mt-6 gap-2 cursor-pointer'>
                <p>Accessibility statement</p>
                <p>Privacy policy</p>
                <p>Sitemap</p>
                <p>Terms</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-white mt-4 w-full' />
        <div className='px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm'>
          <div className='flex items-center gap-4 mb-4 md:mb-0'>
            <img className='h-12 w-20' src='Udemy.png' alt="Udemy" />
            <p>© 2024 Udemy, Inc.</p>
          </div>
          <div>
            <p>Cookie Settings</p>
          </div>
          <div className='flex items-center gap-2'>
            <Globe className='h-5' />
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
