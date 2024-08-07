// Skills imges
import About_img from "./Components/Assets/Images/Profile pic.jpg";
import Java from "./Components/Assets/3D ICON/java.png";
import HTML from "./Components/Assets/3D ICON/html.png";
import CSS from "./Components/Assets/3D ICON/css.png";
import Javascript from "./Components/Assets/3D ICON/js.png";
import Tailwind from "./Components/Assets/3D ICON/Tailwind.png";
import MongoDB from "./Components/Assets/3D ICON/mongo-db.png";
import Express from "./Components/Assets/3D ICON/express.png";
import React from "./Components/Assets/3D ICON/react.png";
import Node from "./Components/Assets/3D ICON/NodeJs.png";
import Redux from "./Components/Assets/3D ICON/redux.png";
import GitHub from "./Components/Assets/3D ICON/skill-github.png";
import Git from "./Components/Assets/3D ICON/Git.png";
import Figma from "./Components/Assets/3D ICON/Figma.png";
import Arduino from "./Components/Assets/3D ICON/Arduino.png";
import Vercel from "./Components/Assets/3D ICON/Vercel.png";

// Collage & School img
import PIEMR from "./Components/Assets/Images/PIEMR.png";
import NBM from "./Components/Assets/Images/NBM.png";
// projects img
import Portfolio from "./Components/Assets/Projects/project 1.png";
import newE_comm from "./Components/Assets/Projects/new E-commerce.png";
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
import TechSoft from "./Components/Assets/Projects/Tech_Soft Blog.png";
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
    heading: "Hi, I'm Raj Yadav & I'm ",
    description:
      "I recently completed my B.Tech in ECE from PIEMR, Indore. I'm passionate about the software industry and thrive on challenges. As an avid learner with a natural curiosity, I am eager to explore new horizons in both my academic and professional journey.",
    image: About_img,
    email: "rajyadav7047@gmail.com",
    location: "Indore (M.P), 452010",
  },

  Project: [
    // 1. title: "My Portfolio",
    {
      id: 1,
      title: "Portfolio",
      date: "Mar 2024 - Apr 2024",
      description:
        "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged JavaScript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
      image: Portfolio,
      link: "https://github.com/Rajyadav2912/NEW_PORTFOLIO",
      weblink: "https://raj-portfolio-2920.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: react,
        },
        {
          id: 2,
          name: "Tailwind Css",
          image: tailwind,
        },
        {
          id: 3,
          name: "HTML",
          image: html,
        },
        {
          id: 4,
          name: "CSS",
          image: css,
        },
        {
          id: 5,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 1.  title: "Tech-Soft Blog website",
    {
      id: 2,
      title: "Tech-Soft Blog website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
      image: TechSoft,
      link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
      weblink: "https://tech-soft-blog.vercel.app/",
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
        {
          id: 4,
          name: "React.js",
          image: react,
        },
        {
          id: 5,
          name: "Tailwind",
          image: tailwind,
        },
      ],
      category: "Frontend",
    },
    // 2. title: "My Portfolio",
    {
      id: 3,
      title: "Full Stack E-commerce website",
      date: "Mar 2024 - Apr 2024",
      description:
        "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
      image: newE_comm,
      link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          image: mongodb,
        },
        {
          id: 2,
          name: "Express.js",
          image: express,
        },
        {
          id: 3,
          name: "React.js",
          image: react,
        },
        {
          id: 4,
          name: "Node.js",
          image: node,
        },
        {
          id: 5,
          name: "Tailwind Css",
          image: tailwind,
        },
      ],
      category: "Full Stack",
    },
    // 4. title: "Contact APP with CRUD",
    {
      id: 4,
      title: "Contact APP with CRUD",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
      image: Contact_APP,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/07_Projects/contact-app-crud",
      weblink: "https://contact-app-crud.vercel.app/",
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
      category: "Full Stack",
    },
    // 5 title: "Nike Shoes Website",
    {
      id: 5,
      title: "Nike Shoes Website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Developed an e-commerce Nike shoe store with integrated contact support. Utilized React.js and JavaScript for front-end development. Implemented Tailwind CSS for modern and efficient styling",
      image: Nike_Shoe,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/05_Projects/nike-shoes-landing-page",
      weblink: "https://nike-shoes-store-orcin.vercel.app/",
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
  ],

  Projects: [
    // 1.  title: "Tech-Soft Blog website",
    {
      id: 1,
      title: "Tech-Soft Blog website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
      image: TechSoft,
      link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
      weblink: "https://tech-soft-blog.vercel.app/",
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
        {
          id: 4,
          name: "React.js",
          image: react,
        },
        {
          id: 5,
          name: "Tailwind",
          image: tailwind,
        },
      ],
      category: "Frontend",
    },
    // 2. title: "My Portfolio",
    {
      id: 2,
      title: "Portfolio",
      date: "Mar 2024 - Apr 2024",
      description:
        "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged JavaScript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
      image: Portfolio,
      link: "https://github.com/Rajyadav2912/NEW_PORTFOLIO",
      weblink: "https://raj-portfolio-2920.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: react,
        },
        {
          id: 2,
          name: "Tailwind Css",
          image: tailwind,
        },
        {
          id: 3,
          name: "HTML",
          image: html,
        },
        {
          id: 4,
          name: "CSS",
          image: css,
        },
        {
          id: 5,
          name: "JavaScript",
          image: Js,
        },
      ],
      category: "Frontend",
    },
    // 3. title: "Full Stack E-commerce website",
    {
      id: 3,
      title: "Full Stack E-commerce website",
      date: "Mar 2024 - Apr 2024",
      description:
        "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
      image: newE_comm,
      link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          image: mongodb,
        },
        {
          id: 2,
          name: "Express.js",
          image: express,
        },
        {
          id: 3,
          name: "React.js",
          image: react,
        },
        {
          id: 4,
          name: "Node.js",
          image: node,
        },
        {
          id: 5,
          name: "Tailwind Css",
          image: tailwind,
        },
      ],
      category: "Full Stack",
    },
    // 4. title: "My Portfolio",
    {
      id: 4,
      title: "My Portfolio",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a amazing portfolio website using HTML, CSS, and JavaScript. Implemented animations, 3D effects with CSS and full responsive Integrated ScrollReveal for smooth scroll and utilized email.js API for contact",
      image: My_Portfolio,
      link: "https://github.com/Rajyadav2912/RAJ_PORTFOLIO",
      weblink: "https://raj-portfolio-29.netlify.app/",
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
    // 5. title: "Contact APP with CRUD",
    {
      id: 5,
      title: "Contact APP with CRUD",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
      image: Contact_APP,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/07_Projects/contact-app-crud",
      weblink: "https://contact-app-crud.vercel.app/",
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
      category: "Full Stack",
    },
    // 6 title: "Nike Shoes Website",
    {
      id: 6,
      title: "Nike Shoes Website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Developed an e-commerce Nike shoe store with integrated contact support. Utilized React.js and JavaScript for front-end development. Implemented Tailwind CSS for modern and efficient styling",
      image: Nike_Shoe,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/05_Projects/nike-shoes-landing-page",
      weblink: "https://nike-shoes-store-orcin.vercel.app/",
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
    // 7. title: "Weather Tracking Web App",
    {
      id: 7,
      title: "Weather Tracking Web App",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created a user-friendly interface using HTML and CSS for smooth experience. Used advanced Js techniques to dynamically update information. Mastered fetch API's integration, combining with Js skills to build an interactive Weather Tracker Web App.",
      image: Weather_Tracker,
      link: "https://github.com/Rajyadav2912/08-WEATHER-APP",
      weblink: "https://weather-tracker-app-8b6e69.netlify.app/",
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
      category: "Javascript",
    },
    // 8. title: "Razorpay Clone",
    {
      id: 8,
      title: "Razorpay Clone",
      date: "Jan 2024 - Feb 2024",
      description:
        "Successfully replicated Razorpay's clone using HTML, CSS, and Tailwind CSS. Ensured a smooth user experience by implementing a responsive website design, making the Razorpay clone accessible across various devices.",
      image: Razorpay_Clone,
      link: "https://github.com/Rajyadav2912/05-RAZOR_PAY-Clone",
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
    // 9. title: "E-commerce Shopping Website",
    {
      id: 9,
      title: "E-commerce Shopping Website",
      date: "July 2023 - Aug 2024",
      description:
        "Built an E-commerce shopping website using HTML, CSS, and JavaScript. Implemented a product catalogue, shopping cart, blog site, about, services and checkout process. Made the website responsive for mobile-friendly and any device.",
      image: Cara_E_commerce,
      link: "https://github.com/Rajyadav2912/E-commer_Shopping_Website",
      weblink: "https://e-commerce-shopping-website-29.netlify.app/",
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
      category: "Javascript",
    },
    // 10. title: "Password Generator WebApp",
    {
      id: 10,
      title: "Password Generator WebApp",
      date: "Feb 2024 - Mar 2024",
      description:
        "Built a strong Password Generator with HTML, CSS, and JavaScript for reliable and secure password creation. Used javaScript, core concepts like methods, properties, and attributes.",
      image: Password_generator,
      link: "https://github.com/Rajyadav2912/07-PASSWORD-GENERATOR",
      weblink: "https://rajyadav2912.github.io/07-PASSWORD-GENERATOR/",
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
      category: "Javascript",
    },
    // 11. title: "Basice Portfolio",
    {
      id: 11,
      title: "Basice Portfolio",
      date: "Aug 2023 - Sep 2023",
      description:
        "Built a portfolio website to showcase web development skills. Constantly updated website with new projects to track my progress and improve relevant skills. Learned about the importance of design and usability.",
      image: Basic_Portfolio,
      link: "https://github.com/Rajyadav2912/Raj_Portfolio_2920",
      weblink: "https://raj-portfolio-2920.netlify.app/",
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
      category: "HTML/CSS",
    },
    // 12. title: "Client Portfolio Website",
    {
      id: 12,
      title: "Client Portfolio Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Designed and developed a professional Portfolio website to showcase skills, projects, and achievements. Created an attractive and user-friendly interface to engage potential employers.",
      image: Client_Portfolio,
      link: "https://github.com/Rajyadav2912/Portfolio-Website",
      weblink: "https://rajyadav2912.github.io/Portfolio-Website/",
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
      category: "HTML/CSS",
    },
    // 13. title: "Spotify Clones Website",
    {
      id: 13,
      title: "Spotify Clones Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Developed a responsive music streaming website using HTML, CSS, and JavaScript, replicating the user interface of Spotify. Created a visually appealing and user-friendly design, ensuring seamless navigation and ease of use.",
      image: Spotify_clone,
      link: "https://github.com/Rajyadav2912/Spotify_Clone",
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
      category: "Javascript",
    },
    // 14. title: "Login Page",
    {
      id: 14,
      title: "Login Page",
      date: "Aug 2023 - Sep 2023",
      description:
        "Our project focuses on creating a user-friendly login page for our website. It provides a secure and streamlined login process, allowing users to access their personalized accounts with ease.",
      image: Login_Page,
      link: "https://github.com/Rajyadav2912/Login-Page",
      weblink: "https://website-login-page-2920.netlify.app/",
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
      category: "HTML/CSS",
    },
    // 15.  title: "Registration From",
    {
      id: 15,
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
      category: "HTML/CSS",
    },
  ],

  Education: [
    {
      id: 1,
      name: "Prestige Institute of Engineering Management & Research, Indore",
      date: "June 2020 - June 2024",
      branch: "Branch: Electronic and Communication Engineering",
      image: PIEMR,
      standard: "Year: 4th / 8th semester  ",
    },
    {
      id: 2,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2019 - March 2020",
      branch: "",
      image: NBM,
      standard: "Class: 12th (PCM) | MPBSE",
    },
    {
      id: 3,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2017 - March 2018",
      branch: "",
      image: NBM,
      standard: "Class: 10th | MPBSE",
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
