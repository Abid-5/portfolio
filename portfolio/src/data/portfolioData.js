export const portfolioData = {
  navItems: [
    { id: "home", label: "#home" },
    { id: "works", label: "#projects" },
    { id: "about-me", label: "#about-me" },
    { id: "contact", label: "#contact" },
  ],
  hero: {
    name: "Abid",
    title: "is a Software Engineering student and an aspiring developer",
    subtitle:
      "He’s building his foundation in web, AI, and system design while exploring creative and functional coding",
    heroImage:"Abid.png"
  },
  about: {
    bio: [
      "I'm a Software Engineering student with a growing passion for web development, system design, and artificial intelligence. I'm not just limited to front-end; I'm learning back-end, machine learning, and security concepts as well.",
      "I love solving problems with code and building useful, simple, and creative solutions. I believe in learning by doing, and I'm continuously experimenting with new tools, frameworks, and project ideas.",
    ],
    skills: {
      languages: [
        { name: "JavaScript", icon: null },
        { name: "TypeScript", icon: null },
        { name: "Python", icon: null },
        { name: "C", icon: null },
        { name: "Java", icon: null },
      ],
      frameworks: [
        { name: "React", icon: null },
        { name: "Node.js", icon: null },
        { name: "Express", icon: null },
        { name: "Tailwind CSS", icon: null },
      ],
      tools: [
        { name: "Git", icon: null },
        { name: "Linux", icon: null },
        { name: "Figma", icon: null },
        { name: "VS Code", icon: null },
        { name: "Postman", icon: null },
      ],
    },
    aboutImage: "https://placehold.co/400x500/1A202C/00F5D4?text=About+Abid",
  },
  projects: [
    {
      id: 1,
      title: "StudyTrackr",
      description:
        "A personal study dashboard for students using JavaScript and local storage.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      demo: "#",
      image: "https://placehold.co/330x200/2D3748/E2E8F0?text=StudyTrackr",
    },
    {
      id: 2,
      title: "ML Notebook Helper",
      description:
        "Jupyter Notebook helper project to understand ML labs step by step.",
      tech: ["Python", "Pandas", "Matplotlib"],
      link: "#",
      demo: "#",
      image: "https://placehold.co/330x200/2D3748/E2E8F0?text=ML+Helper",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "The portfolio you’re viewing now, fully responsive with animations and modern UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
      demo: "#",
      image: "https://placehold.co/330x200/2D3748/E2E8F0?text=Portfolio",
    },
  ],
  contact: {
    intro:
      "I'm open to internships, collaboration, or just a friendly tech chat! Feel free to reach out if you have suggestions, questions, or project ideas.",
    email: "abid@email.com",
    discord: "Abid#1234",
    socials: {
      github: {
        link: "https://github.com/abid-username",
        icon: null,
      },
      linkedin: {
        link: "https://www.linkedin.com/in/abid-username",
        icon: null,
      },
    },
  },
};
