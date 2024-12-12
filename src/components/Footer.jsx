import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

function Footer() {
  return (
    <div className="bottom-0 relative">
      <div className="bg-black text-white text-center py-2]">
        <div className="text-white flex justify-between items-center ml-[60px]">
          <div className="text-left">
            <p className="font-extrabold mt-4 text-xl">Teach the world online</p>
            <p>Create an online video course, reach students across the globe, and earn money</p>
          </div>
          <Button className="border-white mr-12 mt-4">Teach on Udemy</Button>
        </div>
        <hr className='bg-white mt-4' />
        <div className=' ml-[50px]  flex justify-start text-xl py-2'>
          <p className='mt-4 p-2 font-extrabold'>Top companies choose <span className='text-violet-400 font-extrabold'>Udemy Business</span> to build in-demand career skills.</p>
          <div className='mt-4 ml-56 flex justify-evenly gap-3'>
            <img src='Nasdaq.png'></img>
            <img src='Volkswagen.jpeg'></img>
            <img src='Box.png'></img>
            <img src='NetApp.png'></img>
            <img src='Eventbrite.png'></img>
          </div>

        </div>
        <hr className='bg-white mt-4' />
        <div className='mt-4 flex flex-col text-left ml-[60px]'>
          <b className='text-xl'>Explore top skills and certifications</b>
          <div className='mt-9 grid grid-cols-4 gap-4 w-full text-sm'>
            <div className='text-left'>
              <b className='font-extrabold'>Certifications by Issuer</b>
              <div className='flex flex-col mt-6 gap-2'>
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
              <div className='flex flex-col mt-6 gap-2'>
                <p>Web Development</p>
                <p>Javascript</p>
                <p>ReactJS</p>
                <p>Angular</p>
                <p>Java</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>IT Certifications</b>
              <div className='flex flex-col mt-6 gap-2'>
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
              <div className='flex flex-col mt-6 gap-2'>
                <p>Leadership</p>
                <p>Management Skills</p>
                <p>Project Management</p>
                <p>Personal Productivity</p>
                <p>Emotional Intelligence</p>
              </div>
            </div>
          </div>
          <div className='mt-9 grid grid-cols-4 gap-4 w-full text-sm'>
            <div className='text-left'>
              <b className='font-extrabold'>Certifications by Skill</b>
              <div className='flex flex-col mt-6 gap-2'>
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
              <div className='flex flex-col mt-6 gap-2'>
                <p>Data Science</p>
                <p>Python</p>
                <p>Machine Learning</p>
                <p>ChatGPT</p>
                <p>Deep Learning</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Communication</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>Communication Skills</p>
                <p>Presentation Skills</p>
                <p>Public Speaking</p>
                <p>Writing</p>
                <p>PowerPoint</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Business Analytics & Intelligence</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>Microsoft Excel</p>
                <p>SQL</p>
                <p>Microsoft Power BI</p>
                <p>Data Analysis</p>
                <p>Business Analysis</p>
              </div>
            </div>
          </div>
          <div className='mt-9 grid grid-cols-4 gap-4 w-full text-sm'>
            <div className='text-left'>
              <b className='font-extrabold'>About</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>About us</p>
                <p>Careers</p>
                <p>Contact us</p>
                <p>Blog</p>
                <p>Investors</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Discovery Udemy</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>Get the app</p>
                <p>Teach on Udemy</p>
                <p>Plans and Pricing</p>
                <p>Affiliate</p>
                <p>Help and Support</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Udemy for Business</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>Udemy for Business</p>
              </div>
            </div>
            <div className='text-left'>
              <b className='font-extrabold'>Legal & Accessibility</b>
              <div className='flex flex-col mt-6 gap-2'>
                <p>Accessibility statement</p>
                <p>Privacy policy</p>
                <p>Sitemap</p>
                <p>Terms</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-white mt-4 w-full' />
        <div className='grid grid-cols-3'>
          <div className='flex justify-start ml-12 mt-2 gap-4'>
            <img className='h-16 w-26' src='Udemy.png'></img>
            <p className='mt-6'>© 2024 Udemy, Inc.</p>
          </div>
          <div className='mt-8 text-center'>
            <p>Cookie Settings</p>
          </div>
          <div className='text-right mr-14 mt-8'>
            <div className='flex justify-end gap-1'>
              <Globe className='h-5' />
              <p className='text-sm'>English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
