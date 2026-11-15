
import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Business Analysis
  {
    name: "Requirements Analysis",
    description:
      "Analyze business needs, identify requirements, and translate them into clear functional and technical specifications.",
    rating: 5,
    icon: Icons.graphql,
  },
  {
    name: "Business Process Modeling",
    description:
      "Analyze and document business workflows to identify process gaps, inefficiencies, and improvement opportunities.",
    rating: 4,
    icon: Icons.angular,
  },
  {
    name: "User Stories & Use Cases",
    description:
      "Define user needs, business scenarios, and acceptance criteria to guide software development.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Gap Analysis",
    description:
      "Evaluate existing business processes and systems against desired outcomes to identify improvement areas.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Functional Specification",
    description:
      "Translate business requirements into structured functional specifications for development teams.",
    rating: 4,
    icon: Icons.typescript,
  },

  // Software Development & SDLC
  {
    name: "Software Development Life Cycle",
    description:
      "Understand software development phases, from requirement gathering and design to development, testing, and deployment.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Agile & Scrum",
    description:
      "Understand Agile methodologies, Scrum frameworks, sprint planning, backlog management, and iterative delivery.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "System Analysis",
    description:
      "Analyze system requirements, application architecture, integrations, and technical dependencies.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "API & System Integration",
    description:
      "Understand REST APIs, data exchange, and system integration concepts to bridge business and technical requirements.",
    rating: 4,
    icon: Icons.graphql,
  },

  // AI Product Knowledge
  {
    name: "Generative AI",
    description:
      "Understand generative AI capabilities and their applications in solving business problems and improving productivity.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Large Language Models (LLM)",
    description:
      "Understand LLM capabilities, limitations, use cases, and their integration into AI-powered products.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    description:
      "Understand RAG architecture and how external knowledge sources improve the accuracy and relevance of AI responses.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Prompt Engineering",
    description:
      "Design and optimize prompts to improve AI output quality, consistency, and task-specific performance.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "AI Product Knowledge",
    description:
      "Evaluate AI product capabilities, business use cases, user needs, and opportunities for AI-driven solutions.",
    rating: 4,
    icon: Icons.nodejs,
  },
  
  // Technical & Data Fundamentals
  {
    name: "SQL & Database Fundamentals",
    description:
      "Understand relational database concepts and SQL queries for data retrieval, analysis, and validation.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "JavaScript & TypeScript",
    description:
      "Understand programming fundamentals and application logic to communicate effectively with software development teams.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Frontend & Backend Fundamentals",
    description:
      "Understand frontend, backend, database, and application architecture concepts within modern software systems.",
    rating: 4,
    icon: Icons.react,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
