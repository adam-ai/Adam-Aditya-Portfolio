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
}

export const Projects: ProjectInterface[] = [
  // 1. Cerebro Suite
  {
    id: "cerebro-suite",
    type: "Professional",
    companyName: "PT Neo Fusion Indonesia",
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
    companyLogoImg: "",
    descriptionDetails: {
      paragraphs: [
        "Cerebro Suite is an internal B2B product initiative at PT Neo Fusion Indonesia, bringing AI capabilities into different stages of the Software Development Lifecycle (SDLC).",
        "As Product Manager, I drive product planning and requirements across its modules, working closely with the development team to translate product objectives into actionable features.",
      ],
      bullets: [
        "Define product roadmap, MVP scope, feature priorities, and backlog.",
        "Gather requirements and translate them into FSD, user stories, and acceptance criteria.",
        "Create BPMN, user flows, use case diagrams, and wireframes.",
        "Coordinate with developers throughout product planning and development.",
        "Contribute to feature definition across Prism, Vision, Lens, Sentinel, Envoy, Pulse, and Forge.",
      ],
    },
    pagesInfoArr: [],
  },

  // 2. Transport Management System - NAFIEN
  {
    id: "nafien-transport-management",
    type: "Professional",
    companyName: "NAFIEN",
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
    companyLogoImg: "",
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

  // 3. E-Bidding Application - ADM
  {
    id: "adm-e-bidding",
    type: "Professional",
    companyName: "Astra Daihatsu Motor (ADM)",
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
    companyLogoImg: "",
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

  // 4. FIFGROUP Marketing Business Applications
  {
    id: "fifgroup-marketing-applications",
    type: "Professional",
    companyName: "FIFGROUP",
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
    companyLogoImg: "",
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

  // 5. FIFGROUP National Employee Attendance
  {
    id: "fifgroup-national-attendance",
    type: "Professional",
    companyName: "FIFGROUP",
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
    companyLogoImg: "",
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

  // 6. Bodycam Application - Korlantas POLRI
  {
    id: "korlantas-bodycam",
    type: "Professional",
    companyName: "Korlantas POLRI",
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
    companyLogoImg: "",
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
    companyName: "BKPSDM Mojokerto",
    category: ["Digital Transformation"],
    shortDescription:
      "An employee performance management application supporting civil servant administration.",
    techStack: ["Microsoft Office"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-04-30"),
    companyLogoImg: "",
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
    companyName: "BKPSDM Mojokerto",
    category: ["Digital Transformation"],
    shortDescription:
      "A digital attendance application supporting civil servant attendance administration.",
    techStack: ["Microsoft Office"],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-04-30"),
    companyLogoImg: "",
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
