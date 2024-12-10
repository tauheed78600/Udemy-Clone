import React, { useState } from 'react';
import { Input } from '../components/ui/input.jsx';
import { Button } from '../components/ui/button.jsx'
import { Heart, ShoppingCart, Bell, Search } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function Header() {

    const [openDialog, setOpenDialog] = useState(false);
    const [openMainDialog, setOpenMainDialog] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(false);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(false);

    const [openBusiness, setOpenBusiness] = useState(false)
    const [udemyBusiness, setUdemyBusiness] = useState(false)

    console.log(openDialog)
    const categories = {
        Development: ["Web Development", "Mobile Development", "Programming Languages", "Game Development", "Database Design and Development", "Software Testing"],
        Business: ["Entrepreneurship", "Leadership", "Finance", "Management"],
        Finance: ["Accounting", "Investing", "Financial Planning", "Economics"],
        Software: ["DevOps", "Cloud Computing", "Cybersecurity", "Database Management"],
    };

    const subCategoryCertifications = {
        "Web Development": ["HTML & CSS", "JavaScript", "React", "Angular"],
        "Mobile Development": ["Android Development", "iOS Development", "Flutter", "React Native"],
        "Programming Languages": ["Python", "Java", "C++", "Go"],
        "Game Development": ["Unity", "Unreal Engine", "Game Design", "3D Modeling"],
        "Database Design and Development": ["Normal Forms", "ACID Properties", "Concurrency"],
        "Software Testing": ["Selenium", "Manual Testing", "Unit Testing", "Automation Testing"]
    };

    return (
        <div className="border border-b-2 h-[75px] gap-0">
            <div className='flex justify-start'>
                <img src='/udemyBG1.png' className='h-[65px] w-[125px]'></img>
                <div
                    className="relative ml-6 cursor-pointer"
                    onMouseEnter={() => setOpenDialog(true)}
                    onMouseLeave={() => {
                        setOpenDialog(false);
                        setHoveredCategory(null);
                        setHoveredSubCategory(null);
                    }}
                >
                    <div className='mt-7 text-sm mr-4'>
                        <span className=''>Explore</span>
                    </div>

                    {openDialog && (
                        <div className="absolute top-full left-0 w-[200px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 z-10">
                            <div className='text-sm p-2 flex flex-col gap-4'>
                                Browse Certificates<br />
                                <span className='text-sm'>Certificate Preparation</span>
                            </div>

                            {Object.keys(categories).map((category) => (
                                <div
                                    key={category}
                                    className="hover:bg-gray-100 p-2 cursor-pointer"
                                    onMouseEnter={() => setHoveredCategory(category)}
                                >
                                    <span className='text-sm'>{category}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {hoveredCategory && (
                        <div
                            className="absolute top-full left-[200px] w-[200px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-20"
                            onMouseLeave={() => setHoveredCategory(false)}
                        >
                            {categories[hoveredCategory].map((subCategory) => (
                                <div
                                    key={subCategory}
                                    className="hover:bg-gray-100 p-2 cursor-pointer"
                                    onMouseEnter={() => setHoveredSubCategory(subCategory)}
                                >
                                    <span className='text-sm'>{subCategory}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {hoveredSubCategory && (
                        <div
                            className="absolute top-full left-[400px] w-[200px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                            onMouseLeave={() => setHoveredSubCategory(false)}
                        >
                            {subCategoryCertifications[hoveredSubCategory]?.map((certification) => (
                                <div key={certification} className="hover:bg-gray-100 p-2 cursor-pointer">
                                    <span className='text-sm'>{certification}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative w-[730px] mt-4">
                    <Search className="absolute left-3 mt-6 transform -translate-y-1/2 text-gray-500" />
                    <Input
                        type="text"
                        className="w-full pl-10 py-2 rounded-3xl border border-black h-12"
                        placeholder="Search for anything"
                    />
                </div>
                <div className="relative mt-6 cursor-pointer"
                    onMouseEnter={() => setOpenBusiness(true)}
                    onMouseLeave={() => {
                        setOpenBusiness(false);
                    }}>
                    <span className='ml-7 text-sm'>Udemy Business</span>

                    {openBusiness && (
                        <div
                            className="absolute top-full w-[350px] h-[150px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                            onMouseLeave={() => setOpenBusiness(false)}
                        >
                            <div className='flex flex-col gap-5'>
                                <p className='font-extrabold text-center'>Get Your Team access to over 27000 Top Udemy courses anytime, anywhere</p>
                                <Button className='w-[300px] items-center text-xl'>Try Udemy Business</Button>
                            </div>
                        </div>
                    )}

                </div>
                <span className='ml-7 mt-7 text-sm'>Teach on Udemy</span>
                <span className='ml-7 mt-7 text-sm'>My Learning</span>
                <span className='mt-6 ml-7 '><Heart /></span>
                <span className='mt-6 ml-7 h-4'><ShoppingCart /></span>
                <span className='mt-6 ml-7 h-4'><Bell /></span>
                <span className='border-2 h-9 w-9 mt-4 ml-4 border-black rounded-full bg-black'>
                    <p className='p-1 ml-1 text-white'>TD</p>
                </span>
            </div>
            <div className="border border-t-white shadow-xl h-[60px]">
                <div className='h-full flex items-center justify-center gap-9 text-sm'>
                    <span>Development</span>
                    <span>Business</span>
                    <span>Finance & Accounting</span>
                    <span>It & Software</span>
                    <span>Office Productivity</span>
                    <span>Personal Development</span>
                    <span>Design</span>
                    <span>Marketing</span>
                    <span>Health & Fitness</span>
                    <span>Music</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
