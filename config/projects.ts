import type { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectModuleInterface {
  id: string;
  name: string;
  subtitle: string;
  status: "Shipped" | "In Development";
  shortDescription: string;
  websiteLink?: string;
  techStack: ValidSkills[];
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  modules?: ProjectModuleInterface[];
}

export const Projects: ProjectInterface[] = [
  // 1. Cerebro Suite
{
  id: "cerebro-suite",
  type: "Professional",
  companyName: "Cerebro Suite",
  category: ["Product Management", "AI Product", "Business Analysis"],
  shortDescription:
    "An AI-powered SDLC intelligence platform designed to streamline software development workflows.",
  techStack: [
    "Generative AI",
    "Large Language Models (LLM)",
    "Prompt Engineering",
    "AI Product Development",
    "SDLC",
    "Requirement Analysis",
    "User Stories",
    "BPMN",
    "Draw.io",
    "Figma",
  ],
  startDate: new Date("2025-09-01"),
  endDate: new Date(),
  companyLogoImg: "/Cerebro-Logo.png",
  descriptionDetails: {
    paragraphs: [
      "Cerebro Suite is an internal B2B product initiative at PT Neo Fusion Indonesia, bringing AI capabilities into different stages of the Software Development Lifecycle (SDLC).",
      "As Product Manager, I oversee product planning, roadmap development, requirement definition, and feature prioritization across its modules, working closely with the development team to turn product objectives into actionable solutions.",
    ],
    bullets: [
      "Define product roadmap, MVP scope, feature priorities, and product backlog.",
      "Gather requirements and translate them into functional specifications, user stories, and acceptance criteria.",
      "Create BPMN diagrams, user flows, use case diagrams, and wireframes.",
      "Coordinate with developers throughout product planning and development.",
      "Drive product direction and feature definition across five integrated modules.",
    ],
  },
  pagesInfoArr: [],
  modules: [
    {
      id: "prism",
      name: "Cerebro Prism",
      subtitle: "Documentation Intelligence",
      status: "Shipped",
      shortDescription:
        "AI-powered documentation generation and management, transforming requirements and meeting notes into structured software documentation.",
      techStack: [
        "Generative AI",
        "Large Language Models (LLM)",
        "Prompt Engineering",
        "AI Product Development",
        "SDLC",
        "Requirement Analysis",
      ],
      descriptionDetails: {
        paragraphs: [
          "Prism is the documentation intelligence module within Cerebro Suite, designed to streamline the creation and management of software documentation.",
        ],
        bullets: [
          "Define product requirements and feature scope.",
          "Plan AI-powered documentation generation workflows.",
          "Translate product needs into functional specifications.",
          "Coordinate with developers on feature implementation.",
        ],
      },
      pagesInfoArr: [],
    },
    {
      id: "vision",
      name: "Cerebro Vision",
      subtitle: "UI Prototyping",
      status: "Shipped",
      shortDescription:
        "AI-assisted UI prototyping that helps transform product requirements into editable interface mockups and screen flows.",
      techStack: [
        "Generative AI",
        "Large Language Models (LLM)",
        "Prompt Engineering",
        "Figma",
        "AI Product Development",
      ],
      descriptionDetails: {
        paragraphs: [
          "Vision focuses on accelerating the UI design and prototyping process through AI-assisted interface generation.",
        ],
        bullets: [
          "Define UI prototyping features and product requirements.",
          "Plan screen flow and editable mockup capabilities.",
          "Define tagging requirements to support automated testing workflows.",
          "Coordinate with developers on feature development.",
        ],
      },
      pagesInfoArr: [],
    },
    {
      id: "lens",
      name: "Cerebro Lens",
      subtitle: "Source Code Intelligence",
      status: "Shipped",
      shortDescription:
        "Codebase intelligence that provides architecture insights, dependency analysis, and impact assessment.",
      techStack: [
        "Generative AI",
        "Large Language Models (LLM)",
        "AI Product Development",
        "SDLC",
        "System Analysis",
      ],
      descriptionDetails: {
        paragraphs: [
          "Lens provides codebase intelligence to help understand software architecture, dependencies, and potential impacts of code changes.",
        ],
        bullets: [
          "Define source code intelligence requirements.",
          "Plan codebase graph analysis and impact assessment capabilities.",
          "Define selector extraction and architecture insight features.",
          "Coordinate with developers on product implementation.",
        ],
      },
      pagesInfoArr: [],
    },
    {
      id: "sentinel",
      name: "Cerebro Sentinel",
      subtitle: "Test Scenario & Automation",
      status: "In Development",
      shortDescription:
        "AI-driven test automation designed to generate and execute Playwright tests using real DOM selectors.",
      techStack: [
        "Generative AI",
        "Large Language Models (LLM)",
        "Prompt Engineering",
        "AI Product Development",
        "SDLC",
      ],
      descriptionDetails: {
        paragraphs: [
          "Sentinel focuses on AI-driven software testing, connecting test generation and execution with application interface intelligence.",
        ],
        bullets: [
          "Define AI-driven test automation requirements.",
          "Plan Playwright test generation and execution features.",
          "Align testing workflows with selector information from Lens.",
          "Coordinate with developers during prototype development.",
        ],
      },
      pagesInfoArr: [],
    },
    {
      id: "forge",
      name: "Cerebro Forge",
      subtitle: "Spec-driven Development",
      status: "Shipped",
      shortDescription:
        "A spec-driven development module featuring an AI coding agent for web application development.",
      techStack: [
        "Generative AI",
        "Large Language Models (LLM)",
        "Prompt Engineering",
        "AI Product Development",
        "SDLC",
      ],
      descriptionDetails: {
        paragraphs: [
          "Forge is designed to support spec-driven software development through an AI coding agent for web applications.",
        ],
        bullets: [
          "Define product requirements and feature scope.",
          "Plan spec-driven development workflows.",
          "Translate product objectives into actionable development requirements.",
          "Coordinate with developers on product direction and implementation.",
        ],
      },
      pagesInfoArr: [],
    },
  ],
},

// 2. FIFGROUP Marketing Business Applications
  {
    id: "fifgroup-marketing-applications",
    type: "Professional",
    companyName: "FIF Mobile Connect",
    category: ["Business Analysis", "Digital Transformation"],
    shortDescription:
      "Internal marketing applications supporting business operations, including Dealer, Kiosk, and related systems.",
    techStack: [
      "Requirement Analysis",
      "System Analysis",
      "User Stories",
      "BPMN",
      "Draw.io",
      "Figma",
      "SDLC",
    ],
    startDate: new Date("2023-12-01"),
    endDate: new Date(),
    companyLogoImg: "/FIF-Logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "A series of internal business applications supporting FIFGROUP's marketing operations, including Dealer, Kiosk, and other related applications.",
      ],
      bullets: [
        "Gather and analyze requirements from business stakeholders.",
        "Map business processes and translate operational needs into system requirements.",
        "Prepare functional specifications, user stories, and process documentation.",
        "Create process flows and application wireframes.",
        "Coordinate with developers to ensure requirements are properly implemented.",
      ],
    },
    pagesInfoArr: [],
  },

  // 3. FIFGROUP National Employee Attendance
  {
    id: "fifgroup-national-attendance",
    type: "Professional",
    companyName: "FIF Mobile Attendance",
    category: ["Business Analysis", "Digital Transformation"],
    shortDescription:
      "A national attendance application supporting employee attendance management across FIFGROUP.",
    techStack: [
      "Requirement Analysis",
      "System Analysis",
      "User Stories",
      "BPMN",
      "Draw.io",
      "SDLC",
    ],
    startDate: new Date("2023-12-01"),
    endDate: new Date(),
    companyLogoImg: "/FIF-Logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "An employee attendance application supporting attendance management for FIFGROUP employees across Indonesia.",
      ],
      bullets: [
        "Analyze attendance management requirements and business processes.",
        "Translate operational needs into functional system requirements.",
        "Prepare system documentation and process flows.",
        "Coordinate with stakeholders and developers during development.",
        "Support requirement clarification and alignment between business and technical teams.",
      ],
    },
    pagesInfoArr: [],
  },
  
  // 4. Transport Management System - NAFIEN
  {
    id: "nafien-transport-management",
    type: "Professional",
    companyName: "NAFIEN - TMS",
    category: ["Business Analysis"],
    shortDescription:
      "A Transport Management System designed to support transportation and logistics operations.",
    techStack: [
      "Requirement Analysis",
      "System Analysis",
      "User Stories",
      "BPMN",
      "Draw.io",
      "SDLC",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/Nafien-Logo.png",
    descriptionDetails: {
      paragraphs: [
        "A Transport Management System project for NAFIEN, delivered during my role as Business Analyst at PT Neo Fusion Indonesia.",
      ],
      bullets: [
        "Analyze business requirements and operational workflows.",
        "Translate stakeholder needs into functional requirements.",
        "Prepare business process and system documentation.",
        "Coordinate with developers to align implementation with business requirements.",
      ],
    },
    pagesInfoArr: [],
  },

  // 5. E-Bidding Application - ADM
  {
    id: "adm-e-bidding",
    type: "Professional",
    companyName: "E-Bidding",
    category: ["Business Analysis"],
    shortDescription:
      "An E-Bidding application developed to support business bidding processes at Astra Daihatsu Motor.",
    techStack: [
      "Requirement Analysis",
      "System Analysis",
      "User Stories",
      "BPMN",
      "Draw.io",
      "SDLC",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/ADM-Logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "An E-Bidding application project for Astra Daihatsu Motor, delivered during my role as Business Analyst at PT Neo Fusion Indonesia.",
      ],
      bullets: [
        "Analyze business requirements and stakeholder needs.",
        "Translate requirements into functional specifications.",
        "Document business processes and system workflows.",
        "Coordinate with developers to clarify requirements and support implementation.",
      ],
    },
    pagesInfoArr: [],
  },

  // 6. Bodycam Application - Korlantas POLRI
  {
    id: "korlantas-bodycam",
    type: "Professional",
    companyName: "Bodycam",
    category: ["Business Analysis", "Digital Transformation"],
    shortDescription:
      "A bodycam hardware and software solution supporting operational activities at Korlantas POLRI.",
    techStack: [
      "Requirement Analysis",
      "System Analysis",
      "UAT",
      "SDLC",
      "Microsoft Office",
    ],
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-11-30"),
    companyLogoImg: "/Korlantas-Logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "A bodycam hardware and software application project for Korlantas POLRI, delivered during my time at PT Gamma Maya Cyberindo.",
      ],
      bullets: [
        "Gather and analyze stakeholder requirements and operational processes.",
        "Support application testing, debugging, and UAT preparation.",
        "Prepare user documentation and training materials.",
        "Conduct user training and knowledge transfer for 250 personnel at NTMC POLRI.",
      ],
    },
    pagesInfoArr: [],
  },

  // 7. E-Kinerja - BKPSDM Mojokerto
  {
    id: "bkpsdm-e-kinerja",
    type: "Professional",
    companyName: "E-Kinerja",
    category: ["Digital Transformation"],
    shortDescription:
      "An employee performance management application supporting civil servant administration.",
    techStack: ["Microsoft Office"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-04-30"),
    companyLogoImg: "/EKinerja-Mojokerto-Logo.png",
    descriptionDetails: {
      paragraphs: [
        "E-Kinerja is a digital employee performance management application used at BKPSDM Mojokerto.",
      ],
      bullets: [
        "Provide technical support and application troubleshooting.",
        "Assist users with application operations and administrative processes.",
        "Support employee data processing and system usage.",
        "Help introduce and socialize digital employee services.",
      ],
    },
    pagesInfoArr: [],
  },

  // 8. E-Presensi - BKPSDM Mojokerto
  {
    id: "bkpsdm-e-presensi",
    type: "Professional",
    companyName: "E-Presensi",
    category: ["Digital Transformation"],
    shortDescription:
      "A digital attendance application supporting civil servant attendance administration.",
    techStack: ["Microsoft Office"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-04-30"),
    companyLogoImg: "/EPresensi-Mojokerto-Logo.png",
    descriptionDetails: {
      paragraphs: [
        "E-Presensi is a digital attendance application supporting employee attendance administration at BKPSDM Mojokerto.",
      ],
      bullets: [
        "Provide technical support for attendance application operations.",
        "Support fingerprint attendance devices and troubleshooting.",
        "Assist with attendance data processing and administration.",
        "Support user socialization activities for BKPSDM digital services.",
      ],
    },
    pagesInfoArr: [],
  },
];

export const featuredProjects = Projects.slice(0, 3);
