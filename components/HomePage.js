import React, { useEffect, useState } from 'react'
import axios from "axios";
import { getData } from 'utils/data-manager';
import ArticlesPage from 'pages/articles';

function HomePage() {

    const [featureCard,setFeatureCard]=useState([])
    const [toolsCard,setToolsCard]=useState([])
    const [homePageBlogs,setHomePageBlogs]=useState(true);
    useEffect(()=>{
        const fetchData=async()=>{
            const result= await getData("http://localhost:1337/api/feature-cards?populate=*")
            let data=[];
            data=result?.data?.data?.map((item)=>{
                return{
                    icon:item?.attributes?.image?.data?.attributes?.url,
                    title:item?.attributes?.title,
                    description:item?.attributes?.description
                }
            })
            setFeatureCard(data)
        }
        fetchData();
    },[])

    useEffect(()=>{
        const fetchData=async()=>{
            const result=await getData("http://localhost:1337/api/tools-cards?populate=*")
            let data=[];
            data=result?.data?.data?.map((item)=>{
                return{
                    icon:item?.attributes?.image?.data?.attributes?.url,
                    title:item?.attributes?.title,
                    description:item?.attributes?.description,
                    button_title:item?.attributes?.button_title,
                    button_slug:item?.attributes?.button_slug
                }
            })
            setToolsCard(data)
        }
        fetchData()
    },[])

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
                            featureCard?.map((item)=>(
                                <div class="card">
                                    <img src={`http://localhost:1337${item?.icon}`} alt="Image 1" width="58px" height="58px"/>
                                    <div class="card-content">
                                        <div class="card-title">{item?.title}</div>
                                        <div class="card-description">{item?.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <img src="/img/photos/ellipse.png" className='ellipse-img'/>
                </div>
            {/* </div> */}
            <div style={{width:"100%"}}>
            <div className='tools-section'>
                <p className='tools-title'>Tools that can help you</p>
                <div className='tools-cards'>
                    {
                        toolsCard?.map((item) => (
                            (
                                <div className='tools-card'>
                                    <img src={`http://localhost:1337${item?.icon}`} alt="Image 1" className='tools-img'/>
                                    <div className='tools-data'>
                                        <p className='tools-card-title'>{item?.title}</p>
                                        <p className='tools-card-description'>{item?.description}</p>
                                        <button className='tools-card-button'>{item?.button_title}</button>
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
            <ArticlesPage homePageBlogs={homePageBlogs}/>
        </>
    )
}

export default HomePage
