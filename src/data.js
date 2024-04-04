// Skills imges
import About_img from "./Components/Assets/Images/Profile pic.jpg";
import Java from "./Components/Assets/3D ICON/java.png";
import HTML from "./Components/Assets/3D ICON/html.png";
import CSS from "./Components/Assets/3D ICON/css.png";
import Javascript from "./Components/Assets/3D ICON/js.png";
import Tailwind from "./Components/Assets/3D ICON/Tailwind.png";
import MongoDB from "./Components/Assets/3D ICON/java.png";
import Express from "./Components/Assets/3D ICON/java.png";
import React from "./Components/Assets/3D ICON/java.png";
import Node from "./Components/Assets/3D ICON/java.png";
import Redux from "./Components/Assets/3D ICON/java.png";
import GitHub from "./Components/Assets/3D ICON/java.png";
import Git from "./Components/Assets/3D ICON/Git.png";
import Figma from "./Components/Assets/3D ICON/java.png";
import Arduino from "./Components/Assets/3D ICON/java.png";
import Vercel from "./Components/Assets/3D ICON/java.png";

// Collage & School img
import PIEMR from "./Components/Assets/Images/PIEMR.png";
import NBM from "./Components/Assets/Images/NBM.png";
// projects img
import My_Portfolio from "./Components/Assets/Projects/11 Personal Portfolio.png";
import Contact_APP from "./Components/Assets/Projects/12 Firebase Contact CRUD.png";
import Nike_Shoe from "./Components/Assets/Projects/13 Nike store.png";
import Weather_Tracker from "./Components/Assets/Projects/06 Pro Weather App.png";
import Razorpay_Clone from "./Components/Assets/Projects/10 Razorpay-Clone.png";
import Cara_E_commerce from "./Components/Assets/Projects/02 Pro - Shopping Image 1.png";
import Password_generator from "./Components/Assets/Projects/07 Pro Password genrator -APP0.png";
import Basic_Portfolio from "./Components/Assets/Projects/01 Pro (Portfolio website 1).png";
import Client_Portfolio from "./Components/Assets/Projects/03 Pro - Client Portfolio 1.png";
import Spotify_clone from "./Components/Assets/Projects/04 Pro - Spotify Clone 1.png";
import Login_Page from "./Components/Assets/Projects/05 Pro - Login Page 1.png";
import Registration_page from "./Components/Assets/Projects/08 Registration Page.png";
import html from "./Components/Assets/Projects/Html.png";
import css from "./Components/Assets/Projects/Css.png";
import Js from "./Components/Assets/Projects/Js.png";
import tailwind from "./Components/Assets/Projects/Tailwind.png";
import mongodb from "./Components/Assets/Projects/MongoDB.png";
import express from "./Components/Assets/Projects/Express.png";
import react from "./Components/Assets/Projects/React.png";
import Vite_React from "./Components/Assets/Projects/Vite_react.png";
import node from "./Components/Assets/Projects/Node.png";
import firebase from "./Components/Assets/Projects/Firebase.png";

const data = {
  About: {
    title: "ABOUT ME ",
    heading: "Hi, I'm Raj Yadav & I'm Software Developer",
    description:
      "Currently in my 4th year pursuing a B.Tech in Electronics and Communication Engineering at PIEMR, I'm deeply passionate about the Software industry. As an avid learner and a naturally curious individual, I thrive on challenges and am always eager to explore new horizons in my academic and professional journey.",
    image: About_img,
    email: "rajyadav7047@gmail.com",
    location: "Indore (M.P), 452010",
  },
  Project: [
    // 1. title: "My Portfolio",
    {
      id: 1,
      title: "My Portfolio",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a amazing portfolio website using HTML, CSS, and JavaScript. Implemented animations, 3D effects with CSS and full responsive Integrated ScrollReveal for smooth scroll and utilized email.js API for contact",
      image: My_Portfolio,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "HTML/CSS/Js",
    },
    // 2. title: "Contact APP with CRUD",
    {
      id: 2,
      title: "Contact APP with CRUD",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
      image: Contact_APP,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "Vite and React.js",
          image: Vite_React,
        },
        {
          id: 2,
          name: "Node.js",
          image: node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: tailwind,
        },
        {
          id: 4,
          name: "Firebase",
          image: firebase,
        },
      ],
      category: "Frontend",
    },
    // 3 title: "Nike Shoes Website",
    {
      id: 3,
      title: "Nike Shoes Website",
      date: "Feb 2024 - March 2024",
      description:
        "Developed an e-commerce Nike shoe store with integrated contact support. Utilized React.js and JavaScript for front-end development. Implemented Tailwind CSS for modern and efficient styling",
      image: Nike_Shoe,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: react,
        },
        {
          id: 2,
          name: "Node.js",
          image: node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: tailwind,
        },
      ],
      category: "Frontend",
    },
    // 4. title: "Weather Tracking Web App",
    {
      id: 4,
      title: "Weather Tracking Web App",
      date: "Feb 2024 - March 2024",
      description:
        "Created a user-friendly interface using HTML and CSS for smooth experience. Used advanced Js techniques to dynamically update information. Mastered fetch API's integration, combining with Js skills to build an interactive Weather Tracker Web App.",
      image: Weather_Tracker,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "Javascript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 5. title: "Razorpay Clone",
    {
      id: 5,
      title: "Razorpay Clone",
      date: "Jan 2024 - Feb 2024",
      description:
        "Successfully replicated Razorpay's clone using HTML, CSS, and Tailwind CSS. Ensured a smooth user experience by implementing a responsive website design, making the Razorpay clone accessible across various devices.",
      image: Razorpay_Clone,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "Tailwind.css",
          image: tailwind,
        },
        {
          id: 3,
          name: "Node.js",
          image: node,
        },
      ],
      category: "Frontend",
    },
    // 6. title: "E-commerce Shopping Website",
    {
      id: 6,
      title: "E-commerce Shopping Website",
      date: "July 2023 - Aug 2024",
      description:
        "Built an E-commerce shopping website using HTML, CSS, and JavaScript. Implemented a product catalogue, shopping cart, blog site, about, services and checkout process. Made the website responsive for mobile-friendly and any device.",
      image: Cara_E_commerce,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 7. title: "Password Generator WebApp",
    {
      id: 7,
      title: "Password Generator WebApp",
      date: "Feb 2024 - March 2024",
      description:
        "Built a strong Password Generator with HTML, CSS, and JavaScript for reliable and secure password creation. Used javaScript, core concepts like methods, properties, and attributes.",
      image: Password_generator,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 8. title: "Basice Portfolio",
    {
      id: 8,
      title: "Basice Portfolio",
      date: "Aug 2023 - Sep 2023",
      description:
        "Built a portfolio website to showcase web development skills. Constantly updated website with new projects to track my progress and improve relevant skills. Learned about the importance of design and usability.",
      image: Basic_Portfolio,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 9. title: "Client Portfolio Website",
    {
      id: 9,
      title: "Client Portfolio Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Designed and developed a professional Portfolio website to showcase skills, projects, and achievements. Created an attractive and user-friendly interface to engage potential employers.",
      image: Client_Portfolio,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 10. title: "Spotify Clones Website",
    {
      id: 10,
      title: "Spotify Clones Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Developed a responsive music streaming website using HTML, CSS, and JavaScript, replicating the user interface of Spotify. Created a visually appealing and user-friendly design, ensuring seamless navigation and ease of use.",
      image: Spotify_clone,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 11. title: "Login Page",
    {
      id: 11,
      title: "Login Page",
      date: "Aug 2023 - Sep 2023",
      description:
        "Our project focuses on creating a user-friendly login page for our website. It provides a secure and streamlined login process, allowing users to access their personalized accounts with ease.",
      image: Login_Page,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 12.  title: "Registration From",
    {
      id: 12,
      title: "Registration From",
      date: "Aug 2023 - Sep 2023",
      description: "Basic Registration website",
      image: Registration_page,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: html,
        },
        {
          id: 2,
          name: "CSS",
          image: css,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
  ],
  Education: [
    {
      id: 1,
      name: "Prestige Institute of Engineering Management & Research, Indore",
      date: "June 2020 - June 2024 | Pursuing",
      branch: "Branch: Electronic and Communication Engineering",
      image: PIEMR,
    },
    {
      id: 2,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2019 - March 2020",
      branch: "",
      image: NBM,
      standard: "12th (PCM) | MPBSE",
    },
    {
      id: 3,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2017 - March 2018",
      branch: "",
      image: NBM,
      standard: "10th | MPBSE",
    },
  ],
  Skill: [
    {
      id: 1,
      name: "Java",
      image: Java,
    },
    {
      id: 2,
      name: "HTML",
      image: HTML,
    },
    {
      id: 3,
      name: "CSS",
      image: CSS,
    },
    {
      id: 4,
      name: "Javascipt",
      image: Javascript,
    },
    {
      id: 5,
      name: "Tailwind.css",
      image: Tailwind,
    },
    {
      id: 6,
      name: "MongoDB",
      image: MongoDB,
      mongodb,
    },
    {
      id: 7,
      name: "Express.js",
      image: Express,
      express,
    },
    {
      id: 8,
      name: "React,.js",
      image: React,
    },
    {
      id: 9,
      name: "Node.js",
      image: Node,
    },
    {
      id: 10,
      name: "Redux",
      image: Redux,
    },
    {
      id: 11,
      name: "GitHub",
      image: GitHub,
    },
    {
      id: 12,
      name: "Git",
      image: Git,
    },
    {
      id: 13,
      name: "figma",
      image: Figma,
    },
    {
      id: 14,
      name: "Arduino",
      image: Arduino,
    },
    {
      id: 15,
      name: "Vercel",
      image: Vercel,
    },
  ],
};

export default data;
