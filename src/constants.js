// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import cognifyz_techonologies_logo from './assets/company_logo/cognifyz_techonologies_logo.jpeg';
import CodSoft_logo from './assets/company_logo/CodSoft_logo.jpeg';
import triostack from './assets/company_logo/triostack.jpeg';
// Education Section Logo's
import IIMTlogo from './assets/education_logo/iimt-logo.png';


// Project Section Logo's
import doctor_appointment from './assets/work_logo/Doctor_appointment.png';
import Employee_mgmt_system from './assets/work_logo/Employee_mgmt_system.png';
import job_hunt from './assets/work_logo/Job_hunt.png';
import Real_estate from './assets/work_logo/Real_estate.png';
import Buyzaar from './assets/work_logo/Buyzaar.png';
//services section logo's

import web from './assets/services_logo/web.png'
import mobile from './assets/services_logo/mobile.png'
import backend from './assets/services_logo/backend.png';


export const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
];

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: triostack,
      role: "Full Stack Developer Intern",
      company: "Triostack technologies private limited",
      date: "July-2025 - present",
      desc: "Working as a Full Stack Developer Intern, gaining hands-on experience in building real-world web applications using React.js, Node.js, Express.js, and MongoDB. Collaborated with the team to develop responsive UIs, integrate REST APIs, and implement authentication features.",
      skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Git & GitHub",
      "REST API Integration",
     ],
    },
    {
      id: 1,
      img: cognifyz_techonologies_logo,
      role: "Web Development Intern",
      company: "Cognifyz Technologies",
      date: "May 2025 - June 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
    {
      id: 2,
      img: CodSoft_logo,
      role: "Web Developer Intern",
      company: "CodSoft",
      date: "April-2025 - May 2025",
      desc: "Contributed to innovative projects as a Web Developer Intern, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 1,
      img: IIMTlogo,
      school: "IIMT College of Engineering, Greater Noida, Uttar Pradesh",
      date: "Oct 2022 - june 2026",
      grade: "8.1 CGPA(till 5th sem)",
      desc: "I am doing my Bachelor's degree in Computer Science and engineering from IIMT College of Engineering, Greater Noida, Uttar Pradesh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "B.Tech (Computer Science and Engineering)",
    }
  ];
  
  export const projects = [
     {
      id: 0,
      title: "OmnixAI",
      description:
        "OmnixAI is a comprehensive AI-SaaS platform that offers various creative tools including image generation, background removal, object removal, article writing, resume review, and more.",
      image: Omnixai,
      tags: ["Node.js", "Express", "PostgreSQL", "React JS", "React-Router","Gemini API","Cloudinary","Clickdrop API","Clerk Auth"],
      github: "https://github.com/aditya-cse-21/OmnixAI",
      webapp: "https://omnix-ai-tau.vercel.app/",
    },
    {
      id: 1,
      title: "HomeStay",
      description:
        "HomeStay is a full-stack hotel booking platform with advanced search & filtering, real-time booking, secure Stripe payments, and role-based authentication.Includes a hotel owner dashboard for property management, mobile-first responsive design, and a modern user-friendly interface.",
      image: Homestay,
      tags: ["Node.js", "Express", "MongoDB", "React JS", "React-Router","Cloudinary","nodemailer","Stripe","Clerk Auth"],
      github: "https://github.com/aditya-cse-21/HomeStay",
      webapp: "https://home-stay-one.vercel.app/",
    },
    {
      id: 2,
      title: "ShowHive",
      description:
        "ShowHive is a full-stack movie booking platform with real-time search, seat selection, secure payments, and admin management. Built using React, Node.js, Express, MongoDB, Tailwind CSS, and Clerk authentication.",
      image: Showhive,
      tags: ["Node.js", "Express", "MongoDB", "React JS", "React-Router","Cloudinary","nodemailer","Stripe","Clerk Auth"],
      github: "https://github.com/aditya-cse-21/ShowHive",
      webapp: "https://show-hive-ten.vercel.app/",
    },
    {
      id: 3,
      title: "Quick_Blog",
      description:
        " QuickBlog is a modern blogging platform with AI integration, featuring a sleek UI, admin panel, and real-time content management. Built using React, Tailwind CSS, Node.js, Express, MongoDB, and Google Gemini AI.",
      image: Quickblog,
      tags: ["Node.js", "Express", "MongoDB", "React JS", "React-Router","Gemini API"],
      github: "https://github.com/aditya-cse-21/quick_blog",
      webapp: "https://quick-blog-sncf.vercel.app/",
    },
    {
      id: 4,
      title: "Buyzaar",
      description:
        "Buyzaar is a responsive e-commerce frontend built using React.js, Redux, CSS3, and Vite. It features a modern clothing store interface with product listings, filtering, and cart functionality. React Router was used for smooth navigation between sections, while Redux efficiently manages the application state. The UI was crafted using custom CSS with a focus on clean layout, responsiveness, and component reusability. Buyzaar showcases strong frontend architecture and real-world application structure, making it ideal for user-centric shopping experiences.",
      image: Buyzaar,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "React-Router"],
      github: "https://github.com/aditya-cse-21/buyzaar",
      webapp: "https://buyzaar-olive.vercel.app/",
    },
    {
      id: 5,
      title: "Real Estate Website",
      description:
        "The platform allows users to explore property listings with smooth navigation between different sections like Home, Listings, and Contact. It features a clean, mobile-first user interface built with Tailwind CSS, emphasizing modern layout design and accessibility. The project follows a modular component structure and showcases core frontend skills like routing, UI design, and responsive development tailored for real-world use.",
      image: Real_estate,
      tags: ["React JS", "HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/aditya-cse-21/Estate",
      webapp: "https://estate-nine-psi.vercel.app/",
    },
  
   
  ];  
