import { Contact11 } from "components/blocks/contact";
import Head from "next/head";
import React from "react";

function Contact() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best Python playground and online Python compiler to edit, interpret and compile Python code"
        />
        <title>Contact | Goom.AI</title>
      </Head>
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
