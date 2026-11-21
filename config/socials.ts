import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Adam Ar Rosyid Aditya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/adamarrosyid",
  },
  {
    name: "Instagram",
    username: "@arrosyid_adam",
    icon: Icons.instagram,
    link: "https://www.instagram.com/arrosyid_adam/",
  },
  {
    name: "Gmail",
    username: "arrosyidadam@gmail.com",
    icon: Icons.gmail,
    link: "mailto:arrosyidadam@gmail.com",
  },
];
