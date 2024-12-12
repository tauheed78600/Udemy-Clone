import React, { useState } from 'react'
import Sections1 from './Sections1';

function SubHeader() {


    const [development, setDevelopment] = useState(false)
    const [business, setBusiness] = useState(false)
    const [finance, setFinance] = useState(false)
    const [it, setIt] = useState(false)
    const [office, setOffice] = useState(false)
    const [personalDev, setPersonalDev] = useState(false)
    const [design, setDesign] = useState(false)
    const [health, setHealth] = useState(false)
    const [market, setMarket] = useState(false)
    const [music, setMusic] = useState(false)

    const developmentTopics = [
        "Web Development",
        "Mobile Development",
        "Programming Languages",
        "Game Development",
        "Database Design and Development",
        "Software Testing",
    ];

    const businessTopics = [
        "Entrepreneurship",
        "Communication",
        "Management",
        "Sales",
        "Business Strategy",
    ];

    const financeTopics = [
        "Accounting and Bookkeeping",
        "Cryptocurrency and Blockchain",
        "Finance",
        "Financial Modelling and Analysis",
        "Investing and Trading",
    ];

    const itTopics = [
        "IT Certifications",
        "Network Security",
        "Hardware",
        "OS and Servers",
        "Other It and Software",
        "Software Testing",
    ];

    const officeTopics = [
        "Microsoft",
        "Apple",
        "Google",
        "SAP",
        "Oracle",
        "Other Software Testing",
    ];

    const personalDevTopics = [
        "Personal Transformation",
        "Personal Productivity",
        "Leadership",
        "Career Development",
        "Parenting and Relationships",
    ];

    const designTopics = [
        "Web Design",
        "Graphic Design and Illustration",
        "Design tools Design",
        "Game Design",
        "3D and Animation",
        "Software Testing",
    ];

    const marketingTopics = [
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Branding",
        "Marketing Fundamentals",
        "Marketing Analysis and Fundamentals",
    ];

    const healthTopics = [
        "Fitness",
        "General Health",
        "Sports",
        "Nutrition and Diet",
        "Yoga",
        "Mental Health",
    ];

    const musicTopics = [
        "Instruments",
        "Music Production",
        "Music Fundamentals",
        "Vocals",
        "Music Techniques",
        "Music Software",
    ];


    return (
        <div className="border-b-2 h-[60px] mt-2">
            <div className="h-full flex items-center justify-center gap-2 text-sm shadow-lg">
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setDevelopment(true)}
                    onMouseLeave={() => {
                        setDevelopment(false);
                    }}>
                    <span>Development</span>

                    {development && <Sections1 topics={developmentTopics} />}



                </div>
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setBusiness(true)}
                    onMouseLeave={() => {
                        setBusiness(false);
                    }}>
                    <span>Business</span>

                    {business && (
                        <Sections1 topics={businessTopics} />
                    )}




                </div>
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setFinance(true)}
                    onMouseLeave={() => {
                        setFinance(false);
                    }}>
                    <span>Finance and Accounting</span>

                    {finance && (
                        <Sections1 topics={financeTopics} />
                    )}
                </div>

                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setIt(true)}
                    onMouseLeave={() => {
                        setIt(false);
                    }}>
                    <span>IT and Software</span>

                    {it && (
                        <Sections1 topics={itTopics} />
                    )}
                </div>

                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setOffice(true)}
                    onMouseLeave={() => {
                        setOffice(false);
                    }}>
                    <span>Office Productivity</span>

                    {office && (
                        <Sections1 topics={officeTopics} />
                    )}
                </div>

                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setPersonalDev(true)}
                    onMouseLeave={() => {
                        setPersonalDev(false);
                    }}>
                    <span>Personal Development</span>

                    {personalDev && (
                        <Sections1 topics={personalDevTopics} />
                    )}
                </div>

                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setDesign(true)}
                    onMouseLeave={() => {
                        setDesign(false);
                    }}>
                    <span>Design</span>

                    {design && (
                        <Sections1 topics={designTopics} />
                    )}
                </div>
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setMarket(true)}
                    onMouseLeave={() => {
                        setMarket(false);
                    }}>
                    <span>Marketing</span>

                    {market && (
                        <Sections1 topics={marketingTopics} />
                    )}
                </div>


                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setHealth(true)}
                    onMouseLeave={() => {
                        setHealth(false);
                    }}>
                    <span>Health and Fitness</span>

                    {health && (
                        <Sections1 topics={healthTopics} />
                    )}
                </div>
                <div className="relative ml-5 cursor-pointer"
                    onMouseEnter={() => setMusic(true)}
                    onMouseLeave={() => {
                        setMusic(false);
                    }}>
                    <span>Music</span>

                    {music && (
                        <Sections1 topics={musicTopics} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SubHeader
