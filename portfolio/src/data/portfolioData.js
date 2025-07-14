import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaLinkedin,
  FaGithub,
  FaCuttlefish,
  FaCode,
  FaWrench,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiUnrealengine,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCodeforces,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

// Helper to create a skill object
const createSkill = (name, Icon) => ({ name, Icon });

export const portfolioData = {
  name: "Md. Abid Shahriar",
  navItems: [
    { id: "home", label: "#home" },
    { id: "works", label: "#works" },
    { id: "about-me", label: "#about-me" },
    { id: "education", label: "#education" },
    { id: "contact", label: "#contact" },
  ],
  hero: {
    name: "Abid",
    title: "is a Software Engineering Student",
    subtitle:
      "He's building his foundation in web, AI, and system design while exploring creative and functional coding.",
    heroImage: "Abid.png",
  },
  projects: [
    {
      id: 1,
      title: "Task Tree: AI-Powered Islamic Productivity Hub",
      description:
        "A full-stack MERN task manager integrated with an Islamic productivity suite, featuring AI subtask/image analysis and Google OAuth.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Groq"],
      link: "https://github.com/Abid-5/Task-Tree",
    },
    {
      id: 2,
      title: "Cognitive Training Game Suite",
      description:
        "A Java-based game suite with 5 cognitive challenges and a rule-based engine to recommend games based on user inputs.",
      tech: ["Java", "OOP", "File I/O"],
      link: "https://github.com/irfanAbir1231/Spl1",
    },
    {
      id: 3,
      title: "HallHaven: Student Residential Management",
      description:
        "A full-stack hall management system with secure login, complaint submission, and a suggestion system with upvoting.",
      tech: ["Node.js", "PostgreSQL", "EJS"],
      link: "https://github.com/irfanAbir1231/SPL2",
    },
    {
      id: 4,
      title: "DX-Ball: OOP Refactoring",
      description:
        "Refactored a monolithic Java Swing game into a modular OOP structure using SRP and MVC principles.",
      tech: ["Java", "Swing", "AWT", "OOP"],
      link: "https://github.com/Abid-5/DX-Ball-Game",
    },
    {
      id: 5,
      title: "EduShare: Collaborative Content Sharing",
      description:
        "A full-stack app for student collaboration with secure multi-provider auth and file upload via GridFS.",
      tech: ["Node.js", "MongoDB", "GridFS"],
      link: "https://github.com/Abid-5AS/Edu-Share",
    },
  ],
  about: {
    bio: "A passionate Software Engineering student focused on building full-stack applications and exploring AI. Seeking an internship to apply my skills in web development, app development and machine learning to create impactful, real-world solutions.",
    skills: {
      languages: [
        createSkill("C", FaCuttlefish),
        createSkill("C++", SiCplusplus),
        createSkill("C#", TbBrandCSharp),
        createSkill("Java", FaJava),
        createSkill("Python", FaPython),
        createSkill("JavaScript", SiJavascript),
      ],
      frontend: [
        createSkill("HTML", FaHtml5),
        createSkill("CSS", FaCss3Alt),
        createSkill("React", FaReact),
        createSkill("Tailwind", SiTailwindcss),
      ],
      backend: [
        createSkill("Node.js", FaNodeJs),
        createSkill("Express", SiExpress),
      ],
      databases: [
        createSkill("MongoDB", SiMongodb),
        createSkill("PostgreSQL", SiPostgresql),
      ],
      tools: [
        createSkill("Git", FaGitAlt),
        createSkill("VS Code", VscVscode),
        createSkill("Unreal Engine", SiUnrealengine),
      ],
      design: [
        createSkill("Figma", FaFigma),
        createSkill("Illustrator", SiAdobeillustrator),
        createSkill("Photoshop", SiAdobephotoshop),
      ],
    },
    interests: [
      "Full-Stack Web Development",
      "Mobile App Development",
      "Game Development",
      "AI & Machine Learning",
      "Photography & Photo Editing",
    ],
  },
  education: [
    {
      institution: "Islamic University of Technology (IUT)",
      degree: "B.Sc. in Software Engineering",
      years: "2022 – Present",
      details: "CGPA: 3.01 / 4.00",
    },
    {
      institution: "Codeforces",
      degree: "Problem Solving & Competitive Programming",
      years: "Ongoing",
      details:
        "Actively developing algorithmic problem-solving skills by tackling challenges on Codeforces, having successfully solved over 192 problems.",
      Icon: FaCode,
    },
    {
      institution: "Personal Hobby",
      degree: "Beta Testing & System Customization",
      years: "Ongoing",
      details:
        "Passionate about exploring new technologies by participating in macOS and Android beta programs. Experienced in flashing custom ROMs, identifying bugs, and providing developer feedback.",
      Icon: FaWrench,
    },
    {
      institution: "Sirajganj Government College",
      degree: "Higher Secondary Certificate (HSC)",
      years: "2021",
    },
    {
      institution: "BL Government High School, Sirajganj",
      degree: "Secondary School Certificate (SSC)",
      years: "2019",
    },
  ],
  contact: {
    email: "abidshahriar@iut-dhaka.edu",
    phone: "+8801761216142",
    socials: {
      linkedin: {
        link: "https://www.linkedin.com/in/md-abid-shahriar-90701b286/",
        Icon: FaLinkedin,
      },
      github: { link: "https://github.com/Abid-5", Icon: FaGithub },
      github_iut: { link: "https://github.com/Abid-5AS", Icon: FaGithub },
      codeforces: {
        link: "https://codeforces.com/profile/Abid_5",
        Icon: SiCodeforces,
      },
    },
  },
};
