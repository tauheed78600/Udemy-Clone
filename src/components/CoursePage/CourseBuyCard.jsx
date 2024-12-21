import React, { useState, useEffect } from "react";
import { Check, Heart, AlarmClock, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function CourseBuyCard() {
    const [toggle, setToggle] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [youtubeId, setYoutubeId] = useState('AZzV3wZCvI4')

    const youtubeIds = [
        { name: "Introduction to Node.js", youtubeId: "AZzV3wZCvI4", duration: "10:15" },
        { name: "Installing Node.js and Setting Up", youtubeId: "sqTH6_xjhBY", duration: "12:30" },
        { name: "Understanding the Event Loop", youtubeId: "nNihy9kZmIU", duration: "15:45" },
        { name: "Building Your First Node.js App", youtubeId: "9HYAaXwS7I4", duration: "18:20" },
        { name: "Using Node.js Modules", youtubeId: "u2CKVFcvaxA", duration: "14:10" },
        { name: "Working with File System (FS)", youtubeId: "Pk9J0SvNXUs", duration: "13:05" },
        { name: "Creating and Managing Servers", youtubeId: "Y-hNztFGOXo", duration: "20:00" },
        { name: "Working with HTTP Requests", youtubeId: "gG47rm_vg8M", duration: "16:45" },
        { name: "Asynchronous Programming in Node.js", youtubeId: "J-QgmSzyA_A", duration: "19:30" },
        { name: "Understanding Streams and Buffers", youtubeId: "uY4cMWoZFMs", duration: "17:40" },
        { name: "Working with Databases in Node.js", youtubeId: "GNTDLqKWknw", duration: "22:15" },
        { name: "Using Middleware in Node.js", youtubeId: "WaObzvMEgd4", duration: "13:55" },
        { name: "Building a REST API with Node.js", youtubeId: "N3rkdpBjmH8", duration: "25:30" },
        { name: "Deploying Node.js Applications", youtubeId: "qbHmaHjOKPE", duration: "18:00" },
        { name: "Node.js Best Practices and Tips", youtubeId: "68UFRuVyim8", duration: "15:20" }
    ];


    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showPopup]);

    const handlePopup = () => {
        setShowPopup((prevShowPopup) => !prevShowPopup);
    };

    return (
        <div>
            <div
  className={`mt-9 w-[350px] border shadow-lg bg-white text-black ${toggle ? "h-[900px]" : "h-[610px]"
    } overflow-hidden`}
>
  <div className="h-[180px] border-1">
    <div className="relative" onClick={handlePopup}>
      <img
        src="mern.png"
        alt="Image description"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 p-5 shadow-2xl bg-white rounded-full">
          <Play className="text-black text-4xl" />
        </div>
      </div>
    </div>
  </div>

  <div className="h-[30px] sticky top-0 bg-white z-10">
    <div className="flex justify-around mt-3 font-extrabold">
      <p onClick={() => setToggle(true)} className="mb-4 cursor-pointer">
        Personal
      </p>
      <p onClick={() => setToggle(false)} className="cursor-pointer">
        Teams
      </p>
    </div>
    <hr />

    {toggle ? (
      <div className="p-5">
        <p className="text-2xl font-extrabold">
          $29.99{" "}
          <del className="text-sm text-gray-600">$59.99</del>
          <span className="text-gray-600 text-sm"> 84% off</span>
        </p>
        <p className="text-red-600 flex items-center gap-1 text-sm mt-3">
          <AlarmClock className="h-5" />
          <span className="font-bold">1 day </span>left at this price!
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Button className="rounded-none lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out  w-[240px] h-[50px] bg-violet-600 hover:bg-violet-800">
            Add to Cart
          </Button>
          <div className="border border-black h-[50px] w-[55px] p-3 hover:scale-110 transition-transform duration-300 ease-in-out ">
            <Heart className="h-7" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-gray-700 text-xs mt-3">
          <p>30-Day Money-Back Guarantee</p>
          <p>Full Lifetime Access</p>
        </div>
        <div className="flex justify-around text-sm mt-5 font-extrabold underline underline-offset-1">
          <p>Share</p>
          <p>Gift this Course</p>
          <p>Apply Coupon</p>
        </div>
        <div className="border h-[70px] mt-3 p-3 text-gray-600 text-sm">
          <p>
            <span className="font-extrabold">ST19MT121224</span> is applied
          </p>
          <p>Udemy Coupon</p>
        </div>
        <div className="flex items-center mt-3">
          <Input
            placeholder="Enter Coupon"
            className="w-[240px] h-[50px] rounded-none"
          ></Input>
          <Button className="w-[80px] h-[50px] rounded-none text-white font-semibold">
            Apply
          </Button>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-xs">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div>
          <p className="mt-2 font-bold text-xl">
            Subscribe to Udemy’s top courses
          </p>
          <p className="text-sm mt-2">
            Get this course, plus 12,000+ of our top-rated courses, with Personal
            Plan.
            <span className="text-sm ml-2 text-violet-800 font-extrabold underline underline-offset-1">
              Learn more
            </span>
          </p>
          <Button className="bg-white rounded-none hover:bg-gray-200 mt-2 text-black border-black w-[295px] h-[55px] font-extrabold lg:hover:scale-105 lg:transition-transform lg:duration-300 lg:ease-in-out ">
            Start Subscription
          </Button>
          <div className="flex flex-col items-center">
            <p className="text-xs mt-2">Starting at ₹850 per month</p>
            <p className="text-xs mt-1">Cancel Anytime</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="ml-4">
        <p className="text-sm mt-3 font-semibold">
          Subscribe to this course and 27,000+ top‑rated Udemy courses for your
          organization.
        </p>
        <Button className="rounded-none h-[55px] mt-4 w-[310px] bg-violet-500 text-xl hover:bg-violet-700 font-extrabold">
          Try Udemy Business
        </Button>
        <div className="flex flex-col mt-7 gap-4 text-sm">
          <p className="flex items-center gap-2">
            <Check />For teams of 2 or more users
          </p>
          <p className="flex items-center gap-2">
            <Check />27,000+ fresh & in-demand courses
          </p>
          <p className="flex items-center gap-2">
            <Check />Learning Engagement tools
          </p>
          <p className="flex items-center gap-2">
            <Check />SSO and LMS Integrations
          </p>
        </div>
      </div>
    )}
  </div>
</div>


            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div
                        className=" text-black w-[650px] bg-black max-h-[1200px] h-[90%] overflow-y-auto scrollbar-hidden p-5 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end">
                            <Button
                                className='bg-black h-7 text-white font-extrabold '
                                onClick={handlePopup}
                            >X</Button>
                        </div>
                        <div className="text-white">
                            <p className="text-sm font-extrabold">Course Preview</p>
                            <p className="mt-2 font-extrabold">The Complete Node.js Developer Course (3rd Edition)</p>
                            <div className='border border-white h-[1590px] bg-gray-600'>
                                <iframe
                                    width="607"
                                    height="330"
                                    src={`https://www.youtube.com/embed/${youtubeId}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                />
                                <div className="text-white p-3 font-extrabold">
                                    <p>Free Sample Videos</p>
                                </div>
                                {youtubeIds.map((youtube, idx) => (
                                    <div onClick={() => setYoutubeId(youtube.youtubeId)} className="border h-[80px] w-[590px] border-gray-600 hover:bg-gray-950 flex flex-col gap-3 ml-3">
                                        <div className="flex flex-row">
                                            <img src='reactRedux.png' className="h-[80px]"></img>
                                            <p className="font-extrabold w-[400px] ml-2">{youtube.name}</p>
                                            <div className="">
                                                <p className="flex justify-end text-sm font-extrabold">{youtube.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseBuyCard;
