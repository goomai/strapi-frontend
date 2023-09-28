import React, { useEffect, useState } from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { getData } from "utils/data-manager";
import Head from "next/head";

const ArticlesPage = ({ homePageBlogs }) => {
  
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best Python playground and online Python compiler to edit, interpret and compile Python code"
        />
        <title>Python Articles | Goom.ai</title>
      </Head>
      <Articles homePageBlogs={homePageBlogs}/>
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
