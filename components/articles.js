import React, { useEffect, useState } from "react";
import Card from "./card";
import moment from 'moment';
import ArticlePagination from "./blocks/ArticlePagination";
import { getData } from "utils/data-manager";
import Link from "next/link";

const Articles = ({ homePageBlogs }) => {

  const [totalPages,setTotalPages]=useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesData,setArticlesData]=useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const response=await getData(`articles?populate=*&&sort[0]=id:desc&&pagination[page]=${currentPage}&pagination[pageSize]=15`);
      let data=[];
      data=response?.data?.data?.map((item)=>{
        return{
          author:item?.attributes?.author,
          title:item?.attributes?.title,
          profile:item?.attributes?.image?.data?.attributes?.url,
          publish_date:item?.attributes?.publish_date,
          slug:item?.attributes?.slug,
          id:item?.id
        }
      })
      setArticlesData(data);
      setTotalPages(response?.data?.meta.pagination.pageCount);
    }
    fetchData();
  },[currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const formattedDate=(date)=>{
    const formattedDate = moment(date).format('MMMM D, YYYY').toUpperCase();
    return formattedDate
  }
  return (
    <>
      <div className="custom-container">
        <div className="articles-grid">
          {
            articlesData?.map((item,index)=>(
              <>
                {
                  homePageBlogs==true ?
                  <>
                    {
                      index<=2 &&
                        <div className="article-card">
                          <button className="article-card-python">PYTHON</button>
                          <a href={`/article/${item?.slug}`}>
                            <h2 className="article-card-title">
                              {item?.title}
                            </h2>
                          </a>
                          <div className="article-card-profile-date">
                            <img src={`http://localhost:1337/${item?.profile}`} alt="Image 1" className='tools-img'/>
                            <div className="article-card-date">
                              <h2 className="article-card-goom">{item?.author}</h2>
                              <h4 className="article-card-dot">.</h4>
                              <h3 className="article-card-publish-date">{formattedDate(item?.publish_date)}</h3>
                            </div>
                          </div>
                        </div>
                    }
                  </>:
                  <>
                    <div className="article-card">
                      <button className="article-card-python">PYTHON</button>
                      <a href={`/article/${item?.slug}`} onClick={()=>{localStorage.setItem('id',item?.id)}}>
                        <h2 className="article-card-title">
                          {item?.title}
                        </h2>
                      </a>
                      <div className="article-card-profile-date">
                        <img src={`http://localhost:1337${item?.profile}`} alt="Image 1" className='tools-img'/>
                        <div className="article-card-date">
                          <Link href="/" style={{display:'flex'}}><h2 className="article-card-goom">{item?.author}</h2></Link>
                          <h4 className="article-card-dot">.</h4>
                          <h3 className="article-card-publish-date">{formattedDate(item?.publish_date)}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                }
                
              </>
              
            ))
          }
        </div>
        {!homePageBlogs &&
          <ArticlePagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        }
      </div>
      {/* <div className="uk-child-width-1-2@s" data-uk-grid="true"> */}
        {/* <div>
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.attributes.slug}`}
              />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__left__${article.attributes.slug}`}
                />
              );
            })}
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Articles;
