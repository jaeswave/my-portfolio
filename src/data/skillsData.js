import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
  FaStripe,
  FaSlack,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiDjango,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiAxios,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiTypescript,
  SiJira,
  SiTrello,
  SiAsana,
  SiRedis,
} from "react-icons/si";

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      { name: "Network Security", icon: SiAsana }, // Replace with a better icon if you want
      { name: "Penetration Testing", icon: SiAsana },
      { name: "SQL Injection Testing", icon: SiAsana },
      { name: "Cyber Hygiene", icon: SiAsana },
      { name: "Secure Coding", icon: SiAsana },
      { name: "Security Audits", icon: SiAsana },
    ],
  },

  {
    title: "Frameworks",
    items: [
      { name: "React", icon: FaReact },
      { name: "React Native", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: FaNodeJs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Redux", icon: SiRedux },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Microsoft SQL Server", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "CI/CD", icon: SiTypescript },
      { name: "Jenkins", icon: SiTypescript },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Jira", icon: SiJira },
      { name: "Trello", icon: SiTrello },
      { name: "Asana", icon: SiAsana },
      { name: "Slack", icon: FaSlack },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: SiAxios },
      { name: "Payment Integration", icon: FaStripe },
    ],
  },
];
