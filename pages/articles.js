import React, { useEffect, useState } from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { getData } from "utils/data-manager";
import Head from "next/head";

const ArticlesPage = ({ homePageBlogs }) => {
  const [articlesData,setArticlesData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await getData("http://localhost:1338/api/articles?populate=*&&sort[0]=id:desc&&pagination[page]=1&pagination[pageSize]=10");
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
    }
    fetchData();
  },[])
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best Python playground and online Python compiler to edit, interpret and compile Python code"
        />
        <title>Python Articles | Goom.ai</title>
      </Head>
      <Articles articles={articlesData} homePageBlogs={homePageBlogs}/>
     {/* <Layout categories={categories}>
       <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large"> 
          <h1>{homepage.attributes.hero.title}</h1>
          
        </div> 
      </div>
     </Layout> */}
    </>
  );
};

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
//     fetchAPI("/articles", { populate: ["image", "category"] }),
//     fetchAPI("/categories", { populate: "*" }),
//     fetchAPI("/homepage", {
//       populate: {
//         hero: "*",
//         seo: { populate: "*" },
//       },
//     }),
//   ]);

//   return {
//     props: {
//       articles: articlesRes.data,
//       categories: categoriesRes.data,
//       homepage: homepageRes.data,
//     },
//     revalidate: 1,
//   };
// }

export default ArticlesPage;
