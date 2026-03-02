import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaGithub,
  FaEnvelope,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiApachekafka,
  SiSpringboot,
  SiCplusplus,
  SiLangchain,
  SiFigma,
  SiPostgresql,
  SiClaude,
} from "react-icons/si";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { name: "Claude", icon: SiClaude, color: "#D97757" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
  { name: "Message Queues", icon: FaEnvelope, color: "#231F20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "SQL", icon: FaDatabase, color: "#336791" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

export const projects = [
  {
    title: "Multi-Agent System for Service Automation",
    description:
      "Pioneered an agentic workflow using LLMs and a DSL-based Screen Flow generator to automate Service Process Definitions at Salesforce, reducing admin setup time by ~50%.",
    tags: ["LangGraph", "LangChain", "Python", "Apex", "LWC"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    internal: true,
  },
  {
    title: "Event-Driven Architecture with Kafka",
    description:
      "Engineered a scalable event-driven system using Kafka Topics to decouple survey logic from the Employee Enablement Program, ensuring zero performance impact during peak traffic.",
    tags: ["Apache Kafka", "Java", "Salesforce", "Event-Driven"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    internal: true,
  },
  {
    title: "Cloud Security Threat Analysis",
    description:
      "Built a graph-based security monitoring system at CloudDefense.AI, mapping attack paths across Azure and GCP using Cypher queries with Neo4j and Memgraph.",
    tags: ["Neo4j", "Spring Boot", "Cypher", "Azure", "GCP"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop",
    internal: true,
  },
  {
    title: "Passkey Authentication System",
    description:
      "Developed a FIDO2-compliant passkey-based auth system at Samsung R&D with a Node.js relying party server and WebAuthn, achieving 20% reduction in data storage.",
    tags: ["Node.js", "WebAuthn", "FIDO2", "REST APIs"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    github: "https://github.com/laleetborse/Passkey_Backend",
    live: "https://passkey-backend.vercel.app/",
  },
];

export const socialLinks = {
  github: "https://github.com/laleetborse",
  linkedin: "https://www.linkedin.com/in/laleetborse/",
  x: "https://x.com/LaleetBorse",
  email: "mailto:laleetsb2002@gmail.com",
  leetcode: "https://leetcode.com/laleetborse/",
};
