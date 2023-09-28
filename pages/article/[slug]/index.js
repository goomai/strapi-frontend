import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { getData } from 'utils/data-manager';
import moment from "moment";
import ContentPlayground from 'components/blocks/contentPlayground/ContentPlayground';
import AddComment from 'components/blocks/AddComment';


function Index() {
    const router = useRouter();
    const { slug } = router.query;
    const [blogData,setBlogData]=useState("")
    const [recommendedLinks,setRecommendedLinks]=useState([])
    const [nextArticle,setNextArticle]=useState([])
    const [previousArticle,setPreviousArticle]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await getData(`articles?populate=*&&filters[slug]=${slug}`)
            let data=[];
            data=response?.data?.data.map((item)=>{
                return{
                    title:item?.attributes?.title,
                    content:item?.attributes?.content,
                    profile:item?.attributes?.image?.data?.attributes?.url,
                    author:item?.attributes?.author,
                    publish_date:item?.attributes?.publish_date

                }
            })
            setBlogData(data)
        }
        fetchData()
    },[])
    useEffect(()=>{
        const fetchData=async()=>{
            const id=localStorage.getItem('id')
            const response=await getData(`articles?filters[id][$lt]=${id}&&sort=id:desc`)
            const response1=await getData(`articles?filters[id][$gt]=${id}`)
            let data=[];
            data=response?.data?.data.map((item,index)=>{
                if(index<=3){
                    return{
                        title:item?.attributes?.title,
                        slug:item?.attributes?.slug,
                        id:item?.id
                    }
                } 
                else{
                    return null;
                }  
            })
            let data1=[]
            data1=response?.data?.data?.map((item,index)=>{
                if(index<1){
                    return{
                        title:item?.attributes?.title,
                        slug:item?.attributes?.slug,
                        id:item?.id
                    }
                }
            })
            let data2=[]
            data2=response1?.data?.data?.map((item,index)=>{
                if(index<1){
                    return{
                        title:item?.attributes?.title,
                        slug:item?.attributes?.slug,
                        id:item?.id
                    }
                }
            })
            setRecommendedLinks(data)
            setNextArticle(data1)
            setPreviousArticle(data2)
        }
        fetchData()
    },[])

    const formattedDate=(date)=>{
        const formattedDate = moment(date).format('MMMM D, YYYY').toUpperCase();
        return formattedDate
    }

    const renderContent = (content) => {
        if (typeof window === 'undefined') return;
      
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
      
        const reactElements = Array.prototype.map.call(doc.body.children, (element, index) => {
          if (element.tagName.toLowerCase() === 'pre') {
            const codeElement = element.querySelector('code');
            if (codeElement) {
                const codeContent = codeElement.textContent; // Extract the content inside <code>
                return <ContentPlayground key={index} data={codeContent} />;
            }
            else {
                return (
                  <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: element.outerHTML }}
                  />
                );
              }
          } 
          else {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: element.outerHTML }}
              />
            );
          }
        });
      
        return reactElements;
      };
      
      
    return (
        <>
        <div className='custom-container' style={{fontFamily:"Poppins, Sans-Serif"}}>
            <div className='article-blog-data'>
                <h1 className='article-blog-title'>{blogData[0]?.title}</h1>
                
                <div className="article-blog-profile-date">
                <img src={`http://localhost:1337${blogData[0]?.profile}`} alt="Image 1" height="25" width="25" style={{borderRadius:"50%"}}/>
                <div className="article-card-date">
                    <h2 className="article-blog-author">{blogData[0]?.author}</h2>
                    <h4 className="article-card-slash">.</h4>
                    <h3 className="article-blog-publish-date">{formattedDate(blogData[0]?.publish_date)}</h3>
                </div>
                </div>
                <div className='article-social-icons'>
                    <button className='facebook-icon'>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true" fill="#fff">
                            <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
                        </svg>
                    </button>
                    <button className='twitter-icon'>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true" fill="#fff">
                            <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"></path>
                        </svg>
                    </button>
                    <button className='linkedin-icon'>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true" fill='#fff'>
                            <path d="M18.6,0H1.4C0.6,0,0,0.6,0,1.4v17.1C0,19.4,0.6,20,1.4,20h17.1c0.8,0,1.4-0.6,1.4-1.4V1.4C20,0.6,19.4,0,18.6,0z M6,17.1h-3V7.6h3L6,17.1L6,17.1zM4.6,6.3c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7C6.3,5.5,5.5,6.3,4.6,6.3z M17.2,17.1h-3v-4.6c0-1.1,0-2.5-1.5-2.5c-1.5,0-1.8,1.2-1.8,2.5v4.7h-3V7.6h2.8v1.3h0c0.4-0.8,1.4-1.5,2.8-1.5c3,0,3.6,2,3.6,4.5V17.1z"></path>
                        </svg>
                    </button>
                    <button className='whatsapp-icon'>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" aria-hidden="true" fill='#fff'>
                            <path d="M10,0C4.5,0,0,4.5,0,10c0,1.9,0.5,3.6,1.4,5.1L0.1,20l5-1.3C6.5,19.5,8.2,20,10,20c5.5,0,10-4.5,10-10S15.5,0,10,0zM6.6,5.3c0.2,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0.4c0.2,0.5,0.7,1.7,0.8,1.8c0.1,0.1,0.1,0.3,0,0.4C8.3,8.2,8.3,8.3,8.1,8.5C8,8.6,7.9,8.8,7.8,8.9C7.7,9,7.5,9.1,7.7,9.4c0.1,0.2,0.6,1.1,1.4,1.7c0.9,0.8,1.7,1.1,2,1.2c0.2,0.1,0.4,0.1,0.5-0.1c0.1-0.2,0.6-0.7,0.8-1c0.2-0.2,0.3-0.2,0.6-0.1c0.2,0.1,1.4,0.7,1.7,0.8s0.4,0.2,0.5,0.3c0.1,0.1,0.1,0.6-0.1,1.2c-0.2,0.6-1.2,1.1-1.7,1.2c-0.5,0-0.9,0.2-3-0.6c-2.5-1-4.1-3.6-4.2-3.7c-0.1-0.2-1-1.3-1-2.6c0-1.2,0.6-1.8,0.9-2.1C6.1,5.4,6.4,5.3,6.6,5.3z"></path>
                        </svg>
                    </button>
                </div>
                <h2 className='article-blog-table'>Table Of Contents</h2>
                <div style={{width:'100%'}}>{renderContent(blogData[0]?.content)}</div>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'70px'}}>
                    <div>
                        <h4 className='article-link-previous-next'>Previous Post</h4>
                        {
                            previousArticle?.map((item)=>(
                                <a href={`/article/${item?.slug}`} onClick={()=>{localStorage.setItem("id",item?.id)}}>
                                    <h4 className='article-link-previous-next'>{item?.title}</h4>
                                </a>
                            ))
                        }
                    </div>
                    <div style={{textAlign:'end'}}>
                        
                        <h4 className='article-link-previous-next'>Next Post</h4>
                        {
                            nextArticle?.map((item)=>(
                                <a href={`/article/${item?.slug}`} onClick={()=>{localStorage.setItem("id",item?.id)}}>
                                    <h4 className='article-link-previous-next'>{item?.title}</h4>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='more-articles'>
            <div className='grouping-article'>
                <h4 className="more-articles-title">More Articles:</h4>
                <div className="articles-links">
                    {recommendedLinks.map((item,index)=>(
                        <>
                            {index<=3 ? 
                                <>
                                    <a href={`/article/${item?.slug}`} onClick={()=>{localStorage.setItem("id",item?.id)}}>
                                        <h4 className='article-link'>{item?.title}</h4>
                                    </a>
                                </>:
                                <></>
                            }
                        </>
                    
                    ))}
                </div>
            </div>
        </div>
        <AddComment/>
    </>
    )
    
}

export default Index
