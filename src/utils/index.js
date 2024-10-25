import portfolioImage from "../assets/portfolio.png";
import frontendImg from "../assets/frontendImg.png";

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
];

export function handleScroll() {
  const section = document.getElementById("contact");
  section && section.scrollIntoView({ behavior: "smooth" });
}
