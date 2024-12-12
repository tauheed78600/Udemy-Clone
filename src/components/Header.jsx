import React, { useState } from 'react';
import { Input } from '../components/ui/input.jsx';
import { Button } from '../components/ui/button.jsx'
import { Heart, ShoppingCart, Bell, Search} from 'lucide-react';
import Sections1 from './Sections1.jsx';
import ProfileComponent from './ProfileComponent.jsx';
import Homepage from './Homepage.jsx';
import SubHeader from './SubHeader.jsx';
import { useLocation } from 'react-router-dom';


function Header() {

    const [openDialog, setOpenDialog] = useState(false);
    const [openMainDialog, setOpenMainDialog] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(false);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(false);
    const [belowHeader, setBelowHeader] = useState(false)

    const [teach, setTeach] = useState(false)

    const [openBusiness, setOpenBusiness] = useState(false)
    const [udemyBusiness, setUdemyBusiness] = useState(false)

    const [learning, setLearning] = useState(false)
    const [wishList, setWishList] = useState(false)

    const [cart, setCart] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)

    const [development, setDevelopment] = useState(false)
    const [business, setBusiness] = useState(false)
    const [finance, setFinance] = useState(false)
    const [it, setIt] = useState(false)
    const [office, setOffice] = useState(false)
    const [personalDev, setPersonalDev] = useState(false)
    const [design, setDesign] = useState(false)
    const [health, setHealth] = useState(false)
    const[market, setMarket] = useState(false)
    const [music, setMusic] = useState(false)



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
    
    const location = useLocation()
    console.log("params line 150", location)

    return (
        <div className="border border-b-2 h-[75px] gap-0 shadow-lg">
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
                            className="absolute right-1 top-full w-[350px] h-[150px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                            onMouseLeave={() => setOpenBusiness(false)}
                        >
                            <div className='flex flex-col gap-5'>
                                <p className='font-extrabold text-center'>Get Your Team access to over 27000 Top Udemy courses anytime, anywhere</p>
                                <Button className='w-[320px] items-center text-xl'>Try Udemy Business</Button>
                            </div>
                        </div>
                    )}

                </div>
                <div className="relative mt-6 cursor-pointer"
                    onMouseEnter={() => setTeach(true)}
                    onMouseLeave={() => {
                        setTeach(false);
                    }}>
                    <span className='ml-7 mt-7 text-sm'>Teach on Udemy</span>

                    {teach && (
                        <div
                            className="absolute top-full right-1 w-[350px] h-[170px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                            onMouseLeave={() => setTeach(false)}
                        >
                            <div className='flex flex-col gap-5'>
                                <p className='font-extrabold text-center'>Turn what you know into an opportunity and reach millions around the world.
                                </p>
                                <Button className='w-[320px] items-center text-xl'>Learn More</Button>
                            </div>
                        </div>
                    )}

                </div>

                <div className="relative mt-6 cursor-pointer "
                    onMouseEnter={() => setLearning(true)}
                    onMouseLeave={() => {
                        setLearning(false);
                    }}>
                    <span className='ml-7 text-sm'>My Learning</span>

                    {learning && (
                        <div className='absolute top-full right-1 w-[350px] h-[270px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex justify-evenly gap-2'>
                                    <img
                                        className="h-[70px] w-[100px] object-cover"
                                        src='reactImage.jpeg'
                                        alt="React Guide"
                                    />
                                    <div className=''>
                                        <p className='text-sm font-semibold'>
                                            React: The Ultimate Guide 2024 (incl. NextJS & Redux)
                                        </p>
                                        <div className="relative w-[210px] h-3 bg-gray-200 overflow-hidden mt-4">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-black"
                                                style={{ width: '57%' }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-evenly gap-2'>
                                    <img
                                        className="h-[70px] w-[100px] object-cover"
                                        src='angularImage.jpeg'
                                        alt="React Guide"
                                    />
                                    <div className=''>
                                        <p className='text-sm font-semibold'>
                                            Angular: The Complete Guide (2024 edition)
                                        </p>
                                        <div className="relative w-[210px] h-3 bg-gray-200 overflow-hidden mt-4">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-black"
                                                style={{ width: '69%' }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-center'>
                                    <Button className='w-[330px] h-[50px] text-xl'>Go To My Learning</Button>
                                </div>
                            </div>
                        </div>

                    )}


                </div>
                <div className="relative mt-6 ml-5 cursor-pointer "
                    onMouseEnter={() => setWishList(true)}
                    onMouseLeave={() => {
                        setWishList(false);
                    }}>
                    <span className=''><Heart /></span>

                    {wishList && (
                        <div className='absolute top-full right-1 w-[300px] h-[100px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                            <p className='text-gray-900 text-sm  text-center'>Your WishList is Empty</p>
                            <p className='mt-4 text-sm text-violet-800 font-bold text-center'>Explore Courses</p>
                        </div>
                    )}


                </div>
                <div className="relative ml-5 cursor-pointer "
                    onMouseEnter={() => setCart(true)}
                    onMouseLeave={() => {
                        setCart(false);
                    }}>
                    <span className='mt-6 ml-7 h-4'><ShoppingCart /></span>


                    {cart && (
                        <div className='absolute top-full right-1 w-[300px] h-[100px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                            <p className='text-gray-900 text-sm  text-center'>Your Cart is Empty</p>
                            <p className='mt-4 text-sm text-violet-800 font-bold text-center'>Keep Shopping</p>
                        </div>
                    )}


                </div>
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setNotification(true)}
                    onMouseLeave={() => {
                        setNotification(false);
                    }}>
                    <span className='mt-6 ml-4 h-4'><Bell /></span>

                    {notification && (
                        <div className='absolute top-full right-1 w-[300px] h-[100px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                            <div className='flex justify-between'>
                                <p className='text-gray-900 text-sm  text-center font-extrabold'>Notifications</p>
                                <p className='text-sm text-violet-800 font-bold text-center'>Settings</p>
                            </div>
                            <div>
                                <p className='text-sm text-center mt-7 text-gray-800'>No Notifications</p>
                            </div>
                        </div>
                    )}

                </div>
                <div className="relative cursor-pointer border-2 h-9 w-9 mt-5 ml-5 border-black rounded-full bg-black"
                    onMouseEnter={() => setProfile(true)}
                    onMouseLeave={() => {
                        setProfile(false);
                    }}>
                    <span>
                        <p className='p-1 ml-1 text-white'>TD</p>
                    </span>

                    {profile && (
                        <ProfileComponent/>
                    )}

                </div>
            </div>

            {location.pathname !== '/coursecontent' && <SubHeader />}
            
        </div>
    );
}

export default Header;
