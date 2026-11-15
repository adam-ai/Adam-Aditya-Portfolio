
import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

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
  {
    id: "cerebro-suite",
    type: "Professional",
    companyName: "PT Neo Fusion Indonesia",
    category: [],
    shortDescription:
      "An AI-powered SDLC intelligence platform that connects documentation, UI prototyping, source code intelligence, testing, deployment, and incident management.",
    techStack: [],
    startDate: new Date("2025-09-01"),
    endDate: new Date(),
    companyLogoImg: "",
    descriptionDetails: {
      paragraphs: [
        "Cerebro Suite is an internal B2B product initiative at PT Neo Fusion Indonesia, designed to help organizations improve and streamline their Software Development Lifecycle (SDLC) through an integrated AI-powered platform.",
        "As Product Manager, I contribute to product direction and execution across its modules, translating business needs into product requirements and coordinating with the development team. The platform is under active development and has been introduced through pilot demonstrations to prospective customers.",
      ],
      bullets: [
        "Define product roadmap, feature priorities, MVP scope, and product backlog.",
        "Gather and analyze requirements to translate business needs into product features.",
        "Create Functional Specification Documents (FSD), user stories, and acceptance criteria.",
        "Develop BPMN diagrams, business process flows, user flows, use case diagrams, and wireframes.",
        "Coordinate with developers to clarify requirements and align implementation with product objectives.",
        "Contribute to product planning and feature definition across seven modules: Prism, Vision, Lens, Sentinel, Envoy, Pulse, and Forge.",
      ],
    },
    pagesInfoArr: [],
  },
];

export const featuredProjects = Projects.slice(0, 3);
