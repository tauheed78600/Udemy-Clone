import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input.jsx';
import { Button } from '../ui/button.jsx'
import { Heart, ShoppingCart, Bell, Search, Menu, Globe } from 'lucide-react';
import Sections1 from '../CoursePage/Sections1.jsx';
import ProfileComponent from '../Homepage/ProfileComponent.jsx'
import Homepage from '../Homepage/Homepage.jsx'
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
    const [showSidebar, setShowSidebar] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);


    console.log(openDialog)
    const categories = {
        Development: ["Web Development", "Mobile Development", "Programming Languages", "Game Development", "Database Design and Development", "Software Testing"],
        Business: ["Entrepreneurship", "Leadership", "Finance", "Management"],
        Finance: ["Accounting", "Investing", "Financial Planning", "Economics"],
        Software: ["DevOps", "Cloud Computing", "Cybersecurity", "Database Management"],
    };

    const subCategories = {
        "Web Development": ["HTML", "CSS", "JavaScript", "React", "Angular"],
        "Mobile Development": ["Android Development", "iOS Development", "Flutter", "React Native"],
        "Programming Languages": ["Python", "Java", "C++", "Go"],
        "Game Development": ["Unity", "Unreal Engine", "Game Design", "3D Modeling"],
        "Database Design and Development": ["Normal Forms", "ACID Properties", "Concurrency"],
        "Software Testing": ["Selenium", "Manual Testing", "Unit Testing", "Automation Testing"]
    };
    

    const subCategoryCertifications = [
        {
            name: "Web Development",
            subcategories: ["HTML & CSS", "JavaScript", "React", "Angular"]
        },
        {
            name: "Mobile Development",
            subcategories: ["Android Development", "iOS Development", "Flutter", "React Native"]
        },
        {
            name: "Programming Languages",
            subcategories: ["Python", "Java", "C++", "Go"]
        },
        {
            name: "Game Development",
            subcategories: ["Unity", "Unreal Engine", "Game Design", "3D Modeling"]
        },
        {
            name: "Database Design and Development",
            subcategories: ["Normal Forms", "ACID Properties", "Concurrency"]
        },
        {
            name: "Software Testing",
            subcategories: ["Selenium", "Manual Testing", "Unit Testing", "Automation Testing"]
        }
    ];

    useEffect(() => {
        if (showSidebar) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [showSidebar]);


    const location = useLocation()
    console.log("params line 150", location)

    return (
        <div>
            <div className="border-b-2 h-[75px] w-full shadow-lg">

                {/*Mobile Sidebar */}
                <div className="flex items-center justify-between h-full px-4 lg:hidden">

                    <div className="flex items-center">
                        <span className="hamburger-icon" onClick={() => setShowSidebar(!showSidebar)}>
                            <Menu className="h-10" />
                        </span>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <img src="/udemyBG1.png" onClick={()=>window.location.reload()} className="h-[80px] w-[120px] object-contain" alt="Logo" />
                    </div>

                    <div className="flex items-center gap-4">
                        <Search className="h-6 cursor-pointer" />
                        <ShoppingCart className="h-6 cursor-pointer" /></div>


                    {showSidebar && (
                        <div>

                            <div className="fixed left-0 top-0 w-[300px] h-full bg-white shadow-lg z-40 md:w-[768px]">
                                <div className='items-start flex bg-gray-200 h-[130px]'>
                                    <div className='ml-4 h-16 w-20 border-2 rounded-full bg-black mt-8 flex flex-col items-center justify-center'>
                                        <p className='text-white text-2xl'>TD</p>
                                    </div>

                                    <div className='mt-10 ml-4'>

                                        <p className='font-extrabold text-xl'>Hi, Tauheed Darekar</p>
                                        <p className='text-sm text-gray-700'>Welcome back</p>
                                    </div>
                                    <button className="text-gray-500 bg-gray-200" onClick={() => setShowSidebar(false)}>
                                        X
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className='flex flex-col gap-3 text-sm'>
                                        <p className='text-gray-700'>Learn</p>
                                        <p>My Learning</p>
                                    </div>
                                    <hr className='mt-3' />
                                    <div className='mt-4 text-sm'>
                                        <p>Certification Preparation</p>
                                    </div>
                                    <hr className='mt-3' />
                                    <p className="text-gray-800 font-bold mt-1">Explore</p>
                                    <div>
                                        <p className='text-sm font-extrabold text-gray-600 mt-2'>Most Popular</p>
                                        {Object.keys(subCategoryCertifications).map((category, idx) => (
                                            <div key={category} className="mt-4">
                                                <p
                                                    className="cursor-pointer text-sm"
                                                    onClick={() => setActiveCategory(category)}
                                                >
                                                    {subCategoryCertifications[category].name}
                                                </p>
                                                {activeCategory === category && (
                                                    <ul className="ml-4">
                                                        {categories[category].map((subCategory) => (
                                                            <li
                                                                key={subCategory}
                                                                className="cursor-pointer text-sm mt-2"
                                                                onClick={() => setActiveSubCategory(subCategory)}
                                                            >
                                                                {subCategory}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                        <div className='mt-4'>
                                            <p className='text-sm text-gray-600 font-extrabold'>More from Udemy</p>
                                            <div className='text-sm mt-3 flex flex-col gap-3'>
                                                <p>Udemy Business</p>
                                                <p>Get the App</p>
                                                <p>Invite Friends</p>
                                                <p>Help and Support</p>
                                            </div>
                                            <div className='flex items-center gap-2 border border-black mt-4 h-14 w-28'>
                                                <Globe className='h-5' />
                                                <p>English</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>




                <div className="hidden md:flex flex-row gap-4">
                    <div className='hidden lg:block'>
                        <img onClick={()=>window.location.reload()} src='udemyBG.png' className='h-20 hidden md:block'></img>
                    </div>
                    <div
                        className="relative cursor-pointer hidden lg:block xl:block"
                        onMouseEnter={() => setOpenDialog(true)}
                        onMouseLeave={() => {
                            setOpenDialog(false);
                            setHoveredCategory(null);
                            setHoveredSubCategory(null);
                        }}
                    >
                        <div className=' text-sm mr-4 mt-7'>
                            <span className=''>Explore</span>
                        </div>

                        {openDialog && (
                            <div className="absolute top-full left-0 w-[250px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 z-10">
                                <div className='text-sm p-2 flex flex-col gap-4'>
                                    <p className='text-gray-600 font-bold'>Browse Certificates</p>
                                    <span className='text-sm'>Certification Preparation</span>
                                </div>
                                <hr />
                                {Object.keys(categories).map((category) => (
                                    <div
                                        key={category}
                                        className="hover:bg-gray-100 p-2 cursor-pointer"
                                        onMouseEnter={() => setHoveredCategory(category)}
                                    >
                                        <div className='flex flex-row justify-between'>
                                            <span className='text-sm'>{category}</span>
                                            <span className='text-xs text-gray-700'>&gt;</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {hoveredCategory && (
                            <div
                                className="absolute top-full left-[250px] w-[250px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-20"
                            // onMouseLeave={() => setHoveredSubCategory(false)}
                            >
                                {categories[hoveredCategory].map((subCategory) => (
                                    <div
                                        key={subCategory}
                                        className="hover:bg-gray-100 p-2 cursor-pointer"
                                        onMouseEnter={() => setHoveredSubCategory(subCategory)}
                                    >
                                        <div className='flex flex-row justify-between'>
                                            <span className='text-sm'>{subCategory}</span>
                                            <span className='text-xs text-gray-700'>&gt;</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {hoveredSubCategory && (
                            <div
                                className="absolute top-full left-[500px] w-[250px] h-[500px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                                onMouseLeave={() => setHoveredSubCategory(false)}
                            >
                                {subCategories[hoveredSubCategory]?.map((certification) => (
                                    <div key={certification} className="hover:bg-gray-100 p-2 cursor-pointer">
                                        <div className='flex flex-row justify-between'>
                                            <span className='text-sm'>{certification}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer hidden lg:block xl:block w-[730px] mt-4">
                        <Search className="absolute left-3 mt-6 transform -translate-y-1/2 text-gray-500" />
                        <Input
                            type="text"
                            className="w-full pl-10 py-2 rounded-3xl border border-black h-12"
                            placeholder="Search for anything"
                        />
                    </div>
                    <div className="relative hidden lg:block xl:block mt-6 cursor-pointer "
                        onMouseEnter={() => setOpenBusiness(true)}
                        onMouseLeave={() => {
                            setOpenBusiness(false);
                        }}>
                        <span className=' text-sm whitespace-nowrap'>Udemy Business</span>

                        {openBusiness && (
                            <div
                                className="absolute right-1 top-full w-[350px] h-[140px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
                                onMouseLeave={() => setOpenBusiness(false)}
                            >
                                <div className='flex flex-col gap-5'>
                                    <p className='font-extrabold text-center'>Get Your Team access to over 27000 Top Udemy courses anytime, anywhere</p>
                                    <Button className='w-[320px] items-center text-xl'>Try Udemy Business</Button>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="relative hidden lg:block xl:block mt-6 cursor-pointer"
                        onMouseEnter={() => setTeach(true)}
                        onMouseLeave={() => {
                            setTeach(false);
                        }}>
                        <span className=' text-sm leading-none whitespace-nowrap'>Teach on Udemy</span>

                        {teach && (
                            <div
                                className="absolute top-full right-1 w-[350px] h-[140px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30"
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


                    <div
                        className="relative hidden lg:block xl:block mt-6 cursor-pointer"
                        onMouseEnter={() => setLearning(true)}
                        onMouseLeave={() => {
                            setLearning(false);
                        }}
                    >
                        <span className="text-sm whitespace-nowrap">My Learning</span>

                        {learning && (
                            <div className="absolute top-full right-1 w-[350px] h-[270px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30">
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-evenly gap-2">
                                        <img
                                            className="h-[70px] w-[100px] object-cover"
                                            src="reactImage.jpeg"
                                            alt="React Guide"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">
                                                React: The Ultimate Guide 2024 (incl. NextJS & Redux)
                                            </p>
                                            <div className="relative w-[210px] h-3 bg-gray-200 overflow-hidden mt-4">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-black"
                                                    style={{ width: "57%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex justify-evenly gap-2">
                                        <img
                                            className="h-[70px] w-[100px] object-cover"
                                            src="angularImage.jpeg"
                                            alt="Angular Guide"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">
                                                Angular: The Complete Guide (2024 edition)
                                            </p>
                                            <div className="relative w-[210px] h-3 bg-gray-200 overflow-hidden mt-4">
                                                <div
                                                    className="absolute top-0 left-0 h-full bg-black"
                                                    style={{ width: "69%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex justify-center">
                                        <Button className="w-[330px] h-[50px] text-xl">Go To My Learning</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative ml-4 hidden lg:block xl:block mt-6 cursor-pointer"
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
                    <div className="relative hidden lg:block xl:block  cursor-pointer"
                        onMouseEnter={() => setCart(true)}
                        onMouseLeave={() => {
                            setCart(false);
                        }}>
                        <span className='ml-7 h-4'><ShoppingCart /></span>


                        {cart && (
                            <div className='absolute top-full right-1 w-[300px] h-[100px] bg-white border border-gray-300 shadow-lg p-4 rounded-md z-30'>
                                <p className='text-gray-900 text-sm  text-center'>Your Cart is Empty</p>
                                <p className='mt-4 text-sm text-violet-800 font-bold text-center'>Keep Shopping</p>
                            </div>
                        )}


                    </div>
                    <div className="relative hidden lg:block xl:block cursor-pointer"
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
                    <div className="relative ml-8 hidden lg:block xl:block cursor-pointer border-2 h-9 w-9 mt-5 border-black rounded-full bg-black"
                        onMouseEnter={() => setProfile(true)}
                        onMouseLeave={() => {
                            setProfile(false);
                        }}>
                        <span>
                            <p className='p-1 ml-1 text-white'>TD</p>
                        </span>

                        {profile && (
                            <ProfileComponent />
                        )}

                    </div>
                </div>
            </div>

            <div className="hidden lg:block md:block">
                {location.pathname !== '/coursecontent' && <SubHeader />}
            </div>


        </div>
    );
}

export default Header;
