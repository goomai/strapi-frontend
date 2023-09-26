import React from "react";
import { Navbar } from "components/blocks/navbar";
import { Services14 } from "components/blocks/services";
import { Hero2 } from "components/blocks/hero";
import { FAQ1, FAQ5 } from "components/blocks/faq";
import { Testimonial4 } from "components/blocks/testimonial";
import { Footer15 } from "components/blocks/footer";
import styles from "../styles/Editor.module.css";

import Playground from "components/blocks/playground/Playground";
import Head from "next/head";
import HomePage from "components/HomePage";
function index() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore goom.ai for innovative AI solutions! Discover advanced content detection at ContentDetector.ai, interactive PDF chats at ChatWithPDF.ai, and intelligent job search. Unleash the power of AI with our diverse and cutting-edge services."
        />
        <title> Goom.ai: Diverse AI Solutions - Content Detection, Chat with PDF & AI Powered Job Searching</title>
      </Head>
      <HomePage/>
      {/* <div style={{ position: "relative" }}> */}
        {/* <Navbar
          search
          stickyBox
          navClassName="navbar navbar-expand-lg navbar-light navbar-bg-light  shadow rounded  mb-5 bg-white"
        /> */}
        
        {/* <Playground styles={styles} /> */}

        {/* <div className="bg_secondary pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="container-md ">
          <Services14 />
        </div>
      </div>
      <div className="bg_primary pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="container-md ">
          <Hero2 />
        </div>
      </div>
      <div className="bg_secondary pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="container-md ">
          <FAQ5 />
        </div>
      </div>
      <div className="bg_primary pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="container-md ">
          <Testimonial4 />
        </div>
      </div>
      <div className="bg_secondary pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="container-md ">
          <FAQ1 />
        </div>
      </div> */}
        {/* <Footer15 /> */}
      {/* </div> */}
    </>
  );
}

export default index;
