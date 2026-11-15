import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Business Analysis
  {
    name: "Requirements Analysis",
    description:
      "Analyze business needs, gather stakeholder requirements, and translate them into clear functional specifications for development teams.",
    icon: Icons.requirements,
  },
  {
    name: "Business Process Modeling",
    description:
      "Document business workflows using process diagrams and BPMN to identify inefficiencies and improvement opportunities.",
    icon: Icons.businessProcess,
  },
  {
    name: "User Stories & Use Cases",
    description:
      "Define user needs, business scenarios, and acceptance criteria to guide product development.",
    icon: Icons.userStories,
  },
  {
    name: "Functional Specification",
    description:
      "Prepare Functional Specification Documents (FSD) and translate business requirements into actionable development guidelines.",
    icon: Icons.analysis,
  },
  {
    name: "Gap Analysis",
    description:
      "Evaluate existing business processes and systems against expected outcomes to identify gaps and improvement opportunities.",
    icon: Icons.gapAnalysis,
  },

  // Software Development & SDLC
  {
    name: "Software Development Life Cycle",
    description:
      "Understand the end-to-end software development lifecycle, from requirement gathering and system design to development, testing, and deployment.",
    icon: Icons.sdlc,
  },
  {
    name: "Agile & Waterfall Methodologies",
    description:
      "Understand and work with Agile and Waterfall approaches, including project planning, prioritization, and iterative delivery.",
    icon: Icons.agile,
  },
  {
    name: "System Analysis & Integration",
    description:
      "Analyze application workflows, system requirements, technical dependencies, and integration needs to bridge business and engineering teams.",
    icon: Icons.systemAnalysis,
  },
  {
    name: "Software Testing Fundamentals",
    description:
      "Understand testing processes, test scenarios, test cases, and quality assurance practices throughout software development.",
    icon: Icons.analysis,
  },

  // AI Product Knowledge
  {
    name: "Generative AI",
    description:
      "Understand generative AI capabilities and explore practical applications to solve business problems and improve productivity.",
    icon: Icons.generativeAI,
  },
  {
    name: "Large Language Models (LLM)",
    description:
      "Understand LLM capabilities, limitations, use cases, and their application in AI-powered products.",
    icon: Icons.llm,
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    description:
      "Understand RAG concepts and how external knowledge sources can improve the relevance and accuracy of AI-generated responses.",
    icon: Icons.rag,
  },
  {
    name: "Prompt Engineering",
    description:
      "Design and refine prompts to improve AI output quality, consistency, and relevance for specific business use cases.",
    icon: Icons.promptEngineering,
  },
  {
    name: "AI Product Knowledge",
    description:
      "Evaluate AI product capabilities, user needs, business use cases, and opportunities to develop AI-driven solutions.",
    icon: Icons.aiProduct,
  },

  // Tools & Platforms
  {
    name: "UI/UX Design & Prototyping Tools",
    description:
      "Use Figma, UXPilot, and Balsamiq to create wireframes, interface mockups, and prototypes for communicating product requirements.",
    icon: Icons.analysis,
  },
  {
    name: "Business Process & Diagramming Tools",
    description:
      "Use Draw.io to visualize business processes, system workflows, use cases, and application interactions.",
    icon: Icons.businessProcess,
  },
  {
    name: "Database & SQL Tools",
    description:
      "Use SQL, DBeaver, and Navicat to explore relational databases, retrieve information, and support data validation.",
    icon: Icons.database,
  },
  {
    name: "Project Management & Collaboration Tools",
    description:
      "Use Slack, OpenProject, and Microsoft Teams to coordinate tasks, communicate with stakeholders, and collaborate with development teams.",
    icon: Icons.userStories,
  },
  {
    name: "AI Platforms & Exploration Tools",
    description:
      "Explore AI platforms such as Google AI Studio and Cherry Studio to experiment with AI capabilities, models, and product use cases.",
    icon: Icons.generativeAI,
  },
  {
    name: "Productivity & Workspace Tools",
    description:
      "Use Google Workspace and Microsoft Office for documentation, reporting, data organization, and daily business collaboration.",
    icon: Icons.analysis,
  },
];

export const skills = skillsUnsorted

export const featuredSkills = skills.slice(0, 6);
