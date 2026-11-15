import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "neo-fusion",
    position: "Business Analyst",
    company: "PT Neo Fusion Indonesia",
    location: "Indonesia",
    startDate: new Date("2023-12-01"),
    endDate: "Present",
    description: [
      "Work across business analysis and product management activities for enterprise applications and internal AI-powered products.",
      "Translate business requirements into functional specifications, user stories, business process flows, and product documentation.",
      "Collaborate with stakeholders, designers, and engineering teams throughout the software development lifecycle."
    ],
    achievements: [
      "Contributed to the development of Cerebro Suite, an AI-powered SDLC intelligence platform, as Product Manager by defining product requirements, features, priorities, and development direction.",
      "Prepared product documentation, user stories, acceptance criteria, BPMN diagrams, user flows, use cases, and UI prototypes across Cerebro Suite modules.",
      "Supported enterprise application projects for FIFGROUP, including internal business applications, branch attendance systems, and Transport Management System (NAFIEN).",
      "Handled business analysis for E-Bidding Application at Astra Daihatsu Motor (ADM), including requirement analysis, functional specifications, and coordination with engineering teams.",
      "Supported requirement analysis, QA activities, manual testing, and project delivery across web, Android, and iOS applications."
    ],
    skills: [
      "Requirement Analysis",
      "BPMN",
      "SDLC",
      "User Stories",
      "Figma",
      "Draw.io",
      "Balsamiq",
      "Slack",
      "OpenProject",
      "SQL",
      "Google Workspace"
    ]
  },
  {
    id: "tamtech",
    position: "Solution Architecture",
    company: "PT Tamtech International",
    location: "Indonesia",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-11-01"),
    description: [
      "Contributed to the development of the ICT Grand Design for the National Disaster Management Agency (BNPB).",
      "Analyzed infrastructure and application requirements to identify system improvements and integration opportunities."
    ],
    achievements: [
      "Conducted infrastructure and application analysis to support the BNPB ICT Grand Design.",
      "Identified system requirements, performance improvement opportunities, and potential integration needs.",
      "Supported technical analysis and troubleshooting related to infrastructure and application systems."
    ],
    skills: [
      "System Analysis",
      "Requirement Analysis",
      "SQL"
    ]
  },
  {
    id: "gamma-maya",
    position: "Business Analyst",
    company: "PT Gamma Maya Cyberindo",
    location: "Indonesia",
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-11-01"),
    description: [
      "Worked on a body camera hardware and software solution project for Korlantas POLRI.",
      "Analyzed stakeholder requirements, documented business processes, and supported application testing and user acceptance activities."
    ],
    achievements: [
      "Translated stakeholder requirements into functional requirements for the body camera application.",
      "Coordinated requirement clarification, application testing, debugging, and User Acceptance Testing preparation.",
      "Prepared user training documentation and supported training activities for 250 employees at NTMC POLRI.",
      "Contributed to a project that generated reported revenue of IDR 11 billion within three months."
    ],
    skills: [
      "Requirement Analysis",
      "System Analysis",
      "User Stories",
      "UAT",
      "SDLC",
      "SQL"
    ]
  },
  {
    id: "bkpsdm-mojokerto",
    position: "Technical Support",
    company: "BKPSDM Mojokerto",
    location: "Mojokerto, Indonesia",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-04-01"),
    description: [
      "Provided technical support for government employee performance management and attendance applications.",
      "Supported the implementation and operation of E-Kinerja, E-Presensi, and fingerprint attendance systems."
    ],
    achievements: [
      "Supported the implementation and operation of E-Kinerja and E-Presensi applications for civil servants.",
      "Provided technical support and troubleshooting for application users and fingerprint attendance devices.",
      "Supported socialization activities involving 2,409 civil servants.",
      "Assisted with employee attendance data processing and system administration."
    ],
    skills: [
      "System Analysis",
      "SQL",
      "Google Workspace",
      "Microsoft Office"
    ]
  }
];
