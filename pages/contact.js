import {
  Contact1,
  Contact10,
  Contact11,
  Contact2,
  Contact3,
  Contact4,
  Contact5,
  Contact6,
  Contact7,
  Contact8,
  Contact9,
} from "components/blocks/contact";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | ContentDetector.AI</title>
        <meta
          name="description"
          content="ContentDetector.AI is a free AI content detector and ChatGPT Plagiarism detector that can detect any Chat GPT generate content and AI generated content or text. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-sm my-12">
        <Contact11 />
      </div>
    </>
  );
}

export default Contact;
