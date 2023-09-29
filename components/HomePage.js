import React, { useEffect, useState } from 'react'
import axios from "axios";
import { getData } from 'utils/data-manager';
import Link from 'next/link';
import ArticlesPage from 'pages/articles';

function HomePage() {
    return (
        <>
            <div className='banner-section'>
                <img src="/img/photos/banner.png" alt="Banner Image" />
                <div class="rectangle-box">
                    <div>
                        <p className="rectangle-box-header">Find Relevant Technology Jobs Apply with a single Click</p>
                        <p className='rectangle-box-description'>Say goodbye to the hassle of searching through countless job boards and let our AI do the work for you.</p>
                        <button className='launching-button'>Launching Soon</button>
                    </div>
                </div>
            </div>
            {/* <div className='custom-container'> */}
                <div className='feature-section'>
                <img src="/img/photos/square.png" className='square-img'/>
                    <div class="card-container">
                        {
                            featureCardsData?.map((item)=>(
                                <>
                                <div class="card">
                                    <img src={item?.image} alt="Image 1" width="58px" height="58px"/>
                                    <div class="card-content">
                                        <div class="card-title">{item?.title}</div>
                                        <div class="card-description">{item?.description}</div>
                                    </div>
                                </div>
                                </>
                            ))
                        }
                        <img src="/img/photos/ellipse.png" className='ellipse-img'/>
                    </div>
                </div>
            {/* </div> */}
            <div style={{width:"100%"}}>
            <div className='tools-section'>
                <p className='tools-title'>Tools that can help you</p>
                <div className='tools-cards'>
                    {
                        toolsCardData?.map((item) => (
                            (
                                <div className='tools-card'>
                                    <img src={item?.image} alt="Image 1" className='tools-img'/>
                                    <div className='tools-data'>
                                        <p className='tools-card-title'>{item?.title}</p>
                                        <p className='tools-card-description'>{item?.description}</p>
                                        <a href={item?.url}>
                                        <button className='tools-card-button'>
                                          {item?.button_text}
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
            </div>
            <div className='blogs-section'>
                <p className='blogs-title'>Blogs</p>
            </div>
            <div className="custom-container">
                <div className="articles-grid">
                {
                    blogsCardsData?.map((item,index)=>(
                    <> 
                        <div className="article-card">
                            <Link href="/python-compiler-playground">
                                <button className="article-card-python">PYTHON</button>
                            </Link>
                            <a href={item.url}>
                                <h2 className="article-card-title">
                                {item?.title}
                                </h2>
                            </a>
                            <div className="article-card-profile-date">
                                <img src="/img/photos/profile.png" alt="Image 1" className='tools-img'/>
                                <div className="article-card-date">
                                <h2 className="article-card-goom">{item?.author}</h2>
                                <h4 className="article-card-dot">.</h4>
                                <h3 className="article-card-publish-date">{item?.publish_date}</h3>
                                </div>
                            </div>
                        </div>   
                    </>
                    
                    ))
                }
                </div>
            </div>
            {/* <ArticlesPage homePageBlogs={true}/> */}
        </>
    )
}

export default HomePage

const blogsCardsData=[
    {
        id:1,
        title:"Python Interview Questions and Answers [2023]",
        url:"/articles/python-interview-questions-and-answers-2023/",
        author:"Goom",
        publish_date:"JULY 5,2023",
    },
    {
        id:2,
        title:"Python Create MD5 Hash of String [with Code Examples]",
        url:"/articles/python-create-md5-hash-of-string/",
        author:"Goom",
        publish_date:"JULY 5,2023",
    },
    {
        id:3,
        title:"Python List Object is Not Callable [Reasons and Solutions Explained]",
        url:"/articles/python-list-object-is-not-callable/",
        author:"Goom",
        publish_date:"JULY 5,2023",
    }
]
const featureCardsData=[
    {
        id:1,
        title:"Intelligent Making",
        description:"Our AI technology keeps evolving to ensure you receive the most suitable opportunities. We analyse your profile and preferences, providing you with tailored job recommendations that align with your career goals.",
        image:"/img/photos/options.png"
    },
    {
        id:2,
        title:"One-Click Application",
        description:"No more filling out tedious application forms. Apply for multiple positions instantly with just a single click. We make it easy for you to showcase your skills and get noticed by potential employers.",
        image:"/img/photos/oneclick.png"
    },
    {
        id:3,
        title:"Technology Focus",
        description:"Most of the current job portals focus on Software Engineering. We focus on Machine Learning/AI and Data Engineering and Science roles only. This helps us stay focused and provide the best matching experience.",
        image:"/img/photos/technology.png"
    },
]
const toolsCardData=[
    {
        id:1,
        title:"AI Content Detector",
        description:"Check if the text is written by AI,get alternate recomendations.",
        image:"/img/photos/Frame.png",
        url:"https://contentdetector.ai/",
        button_text:"Visit Contentdetctor.ai"
    },
    {
        id:2,
        title:"ChatwithPDF",
        description:"Don't spend hours flipping through research papers and academic articles.",
        image:"/img/photos/frame1.png",
        url:"https://chatwithpdf.ai/",
        button_text:"Visit ChatwithPDF.ai"
    },
    
]
