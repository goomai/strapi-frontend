import {
  About1,
  About10,
  About11,
  About2,
  About3,
  About4,
  About5,
  About6,
  About7,
  About8,
  About9,
} from "components/blocks/about";
import Head from "next/head";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best Python playground and online Python compiler to edit, interpret and compile Python code"
        />
        <title>About | Goom.AI</title>
      </Head>
      <div className="container-sm my-12 text-dark">
        {/* <h1>About Goom</h1> */}
        <About11 />
        <div className="para ">
          <p>
            Python is one of the most used languages for developing ML, AI, and
            Data Science systems. Python libraries such as TensorFlow, PyTorch,
            and scikit-learn are commonly used for building and training ML
            models. We have builts tools such as Python playground/Combiler{" "}
          </p>
          <p>
            Jupyter Notebook is another important tool, it is an open-source web
            application that allows developers to create and share documents
            that contain live code, equations, visualizations, and narrative
            text. In terms of deep learning, popular frameworks include
            TensorFlow and Keras.
          </p>
          <p>
            R is another important language for AI, ML and Data Science, it is a
            programming language and software environment for statistical
            computing and graphics. R is widely used for data analysis and
            visualization and is particularly well-suited for tasks such as data
            pre-processing, feature selection, and statistical modeling.
          </p>
          <p>
            We will provide the necessary material on other critical
            technologies related to AI, ML and Data Science including Natural
            Language Processing (NLP), Computer Vision, Reinforcement Learning,
            Robotics and big data technologies like Apache Spark and Hadoop.
          </p>
          <p>
            You can find tutorials, articles, and sample code to help you learn
            these tools and technologies, as well as data science concepts like
            exploratory data analysis, data cleaning, and feature engineering,
            and apply them to real-world problems.
          </p>
        </div>
      </div>
    </>
  );
}

export default about;
