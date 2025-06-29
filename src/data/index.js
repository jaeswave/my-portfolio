import portfolioImage from "../assets/portfolioImage.png";
import frontendImg from "../assets/frontendImage.png";
import mailmequran from "../assets/mailmequran.png";
import ayato from "../assets/ayato.png";
import stemmets from "../assets/stemmets.png";
import mahfuz from "../assets/mahfuz.png";
import support from "../assets/support.png";

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
      "Designing robust backend systems and RESTful APIs with Node.js, Express, and database integration, ensuring performance and security, and handling user authentication and authorization.",
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
      "A fully responsive personal portfolio website showcasing my skills, projects, and experience",
    techStack: ["React", "Tailwind CSS", "JavaScript", "email service"],
    liveLink: "https://my-portfolio-xi-indol-96.vercel.app/",
    image: portfolioImage,
  },
  {
    id: 2,
    title: "Frontend Utils Payment",
    description:
      "A responsive and interactive application that allows users to pay utility bills with ease.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
    liveLink: "",
    image: frontendImg,
  },
  {
    id: 3,
    title: "Backend Utils Payment",
    description:
      "A robust backend system that supports utility service payments,this service integrates with third-party payment gateways.",
    techStack: [
      "Node.js",
      "Express",
      "MySQL",
      "Payment Gateway Integration",
      "redis",
    ],
    liveLink: "",
    image: "",
  },
  {
    id: 4,
    title: "MailMeQuran",
    description:
      "A spiritual productivity app that emails users a daily number of Quranic verses with a reminder image, customizable to their pace.",
    techStack: [
      "React",
      "Express",
      "Node.js",
      "PostgreSQL",
      "SendGrid",
      "Tailwind CSS",
      "API Integration",
      "email service",
      "redis",
      "authentication",
    ],
    liveLink: "https://mailmequran.com",
    image: mailmequran,
  },
  {
    id: 5,
    title: "Ayatong",
    description:
      "A platform designed to help detect early signs of autism in children through behavioral input and intelligent analysis.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    liveLink: "https://ayatong.com",
    image: ayato,
  },
  {
    id: 6,
    title: "Stemmets",
    description:
      "A modern STEM learning platform for kids with multimedia content and secure user access, built with full-stack scalability in mind.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://stemmets.com",
    image: stemmets,
  },
  {
    id: 7,
    title: "Mahfuz",
    description:
      "Mahfuz Microfinance Bank is an upcoming interest-free, ethics-focused financial institution. ",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://mahfuzmfb.com",
    image: mahfuz,
  },
  {
    id: 8,
    title: "Ticket support app",
    description:
      "A responsive ticket support application designed to manage customer inquiries efficiently, featuring ticket creation, status tracking, and real-time updates.",

    techStack: [
      "Vue",
      "Tailwind CSS",
      "JavaScript",
      "GraphQL",
      "Apollo GraphQL",
      "Ruby on Rails",
      "API Integration",
      "email service",
      "postgresql",
    ],
    liveLink: "https://support-ui.onrender.com/",
    image: support,
  },
];


