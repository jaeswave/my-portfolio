import portfolioImage from "../assets/portfolioImage.png";
import frontendImg from "../assets/frontendImage.png";

export const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Building dynamic and scalable web applications with modern technologies like React, Node.js, and Tailwind CSS, ensuring a seamless user experience.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing robust backend systems and RESTful APIs with Node.js, Express, and database integration, ensuring performance and security.",
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Crafting responsive and intuitive user interfaces with React, Tailwind CSS, and JavaScript frameworks, focusing on excellent user interaction and design.",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs, optimizing application functionality and enabling efficient communication between different services.",
  },
  {
    id: 5,
    title: "Project Management",
    description:
      "Leading projects from inception to completion, with a focus on agile and waterfall methodologies, ensuring timely delivery and collaboration with stakeholders.",
  },
  {
    id: 6,
    title: "Technical Consultation",
    description:
      "Providing expert advice on software architecture, development processes, and technology stack selection to align with business goals.",
  },
  {
    id: 7,
    title: "Cybersecurity",
    description:
      "Implementing best practices for securing applications, performing vulnerability assessments, and ensuring data protection through proactive threat mitigation.",
  },
];


export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio website showcasing my skills, projects, and experience as a Full Stack Software Engineer and Project Manager. Built with React and Tailwind CSS, the portfolio features dynamic project displays, seamless navigation, and clean UI/UX design.",
    techStack: ["React.", "Tailwind CSS.", "JavaScript."],
    githubLink: "https://github.com/your-portfolio-repo",
    image: portfolioImage,
  },
  {
    id: 2,
    title: "Frontend Utility Service Payment",
    description:
      "A responsive and interactive frontend application that allows users to pay utility bills with ease. Built with React and Tailwind CSS, this platform provides a smooth user experience for handling payments and transaction history.",
    techStack: ["React.", "Tailwind CSS.", "JavaScript.", "API Integration."],
    githubLink: "https://github.com/jaeswave/utility",
    image: frontendImg,
  },
  {
    id: 3,
    title: "Backend Utility Service Payment",
    description:
      "A robust backend system that supports utility service payments. Developed with Node.js and Express, this service integrates with third-party payment gateways, handles user authentication, and processes payment transactions securely.",
    techStack: [
      "Node.js.",
      "Express.",
      "MySQL.",
      "Payment Gateway Integration",
    ],
    githubLink: "https://github.com/jaeswave/backend-api-utils",
    image: "path/to/backend-project-image.jpg",
  },
  {
    id: 4,
    title: "MailMeQuran",
    description:
      "A spiritual productivity app that emails users a daily number of Quranic verses with a reminder image, customizable to their pace.",
    techStack: ["React", "Express", "Node.js", "Postgre Sql", "SendGrid"],
    githubLink: "https://mailmequran.com",
  },
  {
    id: 5,
    title: "Ayatong",
    description:
      "A platform designed to help detect early signs of autism in children through behavioral input and intelligent analysis.",
    techStack: ["React", "Node.js", "Express", "MySql", "Tailwind CSS"],
    githubLink: "https://ayatong.com",
  },
  {
    id: 6,
    title: "Stemmets",
    description:
      "A modern STEM learning platform for kids with multimedia content and secure user access, built with full-stack scalability in mind.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    githubLink: "https://stemmets.com",
  },
];
