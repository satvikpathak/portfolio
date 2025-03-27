import project1 from "../assets/projects/Hackc.jpg";
import project2 from "../assets/projects/Shop.jpg";
import project3 from "../assets/projects/Hang.jpg";
import project4 from "../assets/projects/entre.jpg";

export const HERO_CONTENT = `I am an undergrad cse student with a strong passion for building efficient and scalable web applications. Having learnt front-end technologies like React, HTML, CSS, and JavaScript, along with backend technologies such as Node.js, MongoDB I focus on creating robust solutions that deliver seamless user experiences. Currently, I’m honing my skills in the MERN stack and DSA, aiming to master full stack development and make meaningful contributions to impactful projects. My goal is to continuously evolve my skills and craft innovative applications that solve real-world problems.`;

export const ABOUT_TEXT = `Hi, I'm Satvik Pathak, a second-year Computer Science and Engineering student passionate about coding and technology. I have a strong foundation in programming languages like C, C++, JavaScript, and Python, and I’m continuously improving my skills in Data Structures and Algorithms (DSA). I'm currently diving into backend development with Node.js and exploring the MERN stack. I’m also working on exciting projects and actively contributing to my GitHub. Along with coding, I enjoy problem-solving, building innovative solutions, and learning new technologies to stay ahead in this fast-paced tech world. Follow my journey on LinkedIn and GitHub as I share my progress and collaborate on new challenges!
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "EntreConnect",
    image: project4,
    description:
      "EntreConnect: Empowering young startup founders with mentorship, industry connections, and AI-driven growth.",
    technologies: ["Next.js", "Prisma", "Postgres", "Tailwind css"],
    link: "https://github.com/satvikpathak/pec-hackathon/tree/main"
  },
  {
    title: "Hackathon Club Website",
    image: project1,
    description:
      "A fully functioning talent sharing and hackathon loacting website at your disposal",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Tailwind css"],
    link: "https://hc-frontend-five.vercel.app/"
  },
  {
    title: "Shopping Cart",
    image: project2,
    description:
      "Basic ecommerce website layout using typescript",
    technologies: ["Typescript", "React", "Node.js", "MongoDB", "Tailwind css"],
    link: "https://shopping-cart-six-dusky.vercel.app/"
  },
  {
    title: "Hangman",
    image: project3,
    description:
      "Hangman word guessing game using typescript",
    technologies: ["Typescript", "React", "Node.js", "MongoDB", "Tailwind css"],
    link: "https://hangman-cyan-mu.vercel.app/"
  },
];

export const CONTACT = {
  email: "satvikpathak007@gmail.com",
};
