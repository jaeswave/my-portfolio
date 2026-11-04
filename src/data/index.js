import caremed from "../assets/caremed.png";
import frontendImg from "../assets/frontendImage.png";
import mailmequran from "../assets/mailmequran.png";
import ayato from "../assets/ayato.png";
import stemmets from "../assets/stemmets.png";
import mahfuz from "../assets/mahfuz.png";
import support from "../assets/support.png";
import raisevision from "../assets/raisevision.png";
import bayview from "../assets/bayview.png";

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

  //ai integration ,infatrastructure, devops, cloud computing, and more
  {
    id: 8,
    title: "AI Integration",
    description:
      "Incorporating AI and machine learning capabilities into applications for enhanced functionality and user experience.",
  },
  {
    id: 9,
    title: "Infrastructure Development",
    description:
      "Building and maintaining the underlying infrastructure for applications, including servers, databases, and networking.",
  },
  {
    id: 10,
    title: "DevOps Practices",
    description:
      "Implementing DevOps methodologies to streamline development and operations, ensuring faster delivery and improved collaboration.",
  },
  {
    id: 11,
    title: "Cloud Computing Solutions",
    description:
      "Designing and deploying cloud-based solutions for scalability, flexibility, and cost-effectiveness.",
  },
];

export const projects = [
  {
    id: 1,
    title: "MailMeQuran",
    description:
      "A spiritual productivity app that emails users daily Quranic verses with reminder images, customizable to their reading pace.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "SendGrid",
      "Tailwind CSS",
    ],
    features: [
      "Daily Quran verse email delivery",
      "Customizable reading pace",
      "Automated reminder images",
      "User authentication",
    ],
    liveLink: "https://mailmequran.com",
    image: mailmequran,
  },

  {
    id: 4,
    title: "Ayatong",
    description:
      "A platform designed to help detect early signs of autism in children through behavioral input and intelligent analysis.",
    techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    features: [
      "Behavioral data input system",
      "Autism risk analysis",
      "Child profile tracking",
    ],
    liveLink: "https://ayatong.com",
    image: ayato,
  },

  {
    id: 5,
    title: "Stemmets",
    description:
      "A modern STEM learning platform for kids with multimedia lessons and secure user access.",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Interactive STEM lessons",
      "Multimedia learning content",
      "Secure student accounts",
    ],
    liveLink: "https://stemmets.com",
    image: stemmets,
  },

  {
    id: 6,
    title: "Mahfuz",
    description:
      "Mahfuz Microfinance Bank is an upcoming interest-free, ethics-focused financial institution.",
    techStack: ["React", "Tailwind CSS"],
    features: ["Financial service information portal", "Responsive banking UI"],
    liveLink: "https://mahfuzmfb.com",
    image: mahfuz,
  },

  {
    id: 7,
    title: "Ticket Support App",
    description:
      "A customer support platform with ticket creation, status tracking, and real-time updates.",
    techStack: [
      "Vue",
      "Ruby on Rails",
      "GraphQL",
      "Apollo GraphQL",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Ticket creation and tracking",
      "Real-time support updates",
      "Email notifications",
    ],
    liveLink: "https://support-ui.onrender.com/",
    image: support,
  },

  {
    id: 8,
    title: "Care Medicals",
    description:
      "A responsive website for a medical service showcasing services and healthcare information.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    features: ["Service showcase", "Responsive design", "Modern UI"],
    liveLink: "https://caremedng.com",
    image: caremed,
  },
  {
    id: 9,
    title: "Raise Vision Logistics",
    description:
      "A logistics management platform for efficient tracking and delivery of goods internationally.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: ["Shipment tracking", "Real-time updates", "User authentication"],
    liveLink: "https://raisevisionlogistics.com",
    image: raisevision,
  },
  {
    id: 10,
    title: "Bay View Island",
    description:
      "A luxurious resort destination offering stunning ocean views and world-class amenities.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Luxurious accommodations",
      "Oceanfront dining",
      "Spa and wellness services",
    ],
    liveLink: "https://www.islandhopper.vc",
    image: bayview,
  },
  {
    id: 11,
    title: "Field Nation Auto Applier",
    description:
      "A Python-based automation tool that automatically applies to Field Nation work orders with custom pricing, scheduling, and continuous scanning capabilities.",
    techStack: [
      "Python",
      "Selenium",
      "Tkinter",
      "Threading",
      "JSON",
      "Chrome WebDriver",
    ],
    features: [
      "Automated job application with custom pricing",
      "3x weekly scheduling with time configuration",
      "Continuous scanning with refresh intervals",
      "Distance filtering and applied job history",
      "Counter-offer automation with modal handling",
      "Smart scrolling and job detection",
      "Live status updates and activity logging",
    ],
    liveLink: "https://github.com/jaeswave/Automated-Applier-for-FN",
  },
  { 
    
  }

 
];
