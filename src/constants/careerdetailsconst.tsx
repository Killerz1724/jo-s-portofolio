import seaLabIcon from "@/assets/seo-logo.png";
import bangkitLogo from "@/assets/bangkit-logo.png";
import { coloursTagSelection } from "@/components/SkillTag";
import { StaticImageData } from "next/image";
import React from "react";

type careersType = {
  id: number;
  description: string;
  alt: string;
  src?: StaticImageData;
  title: string;
  position: string;
  achivements: string[];
  documentations?: {
    caption: string;
    link: string;
  }[];
  relatedLinks?: {
    caption?: string;
    link: string | React.ReactNode;
  }[];
  tags: {
    text: string;
    color: (typeof coloursTagSelection)[number];
  }[];
  duration: {
    start: string;
    end: string;
  };
  pathName: string;
};

export const Careers: careersType[] = [
  {
    id: 1,
    alt: "sea lab icon",
    src: seaLabIcon,
    title: "Software Engineering Bootcamp",
    description:
      "Labs Bootcamp is a four-months focused training program covering the software engineering fundamentals, best coding practices on common tech stacks and tools used in the enterprise development centre, as well as near-the-job training through simulated projects by the end of the internship.",
    position: "Trainee",
    achivements: [
      "Learned and developed dynamic responsive web interfaces using React, TypeScript, and Tailwind CSS, also learned about using modern frameworks like Nextjs in the project",
      "Integrated RESTful APIs to handle real-time data, ensuring seamless communication between the backend and frontend",
      "Have learned about optimizing frontend by monitoring performance using tools like lighthouse and bunde analyzer",
      "Learned and Built backend APIs with Golang, focusing on clean architecture and efficient data handling",
      "Worked with databases using PostgreSQL to design and query relational data models",
    ],
    tags: [
      {
        text: "Golang",
        color: "darkBlue",
      },
      { text: "Tailwind", color: "lightBlue" },
      { text: "Typescript", color: "darkBlue" },
      { text: "React", color: "lightBlue" },
      { text: "NextJs", color: "red" },
    ],
    duration: { start: "february 2025", end: "now" },
    pathName: "sea-lab",
  },
  {
    id: 2,
    alt: "freelance-icon",
    position: "Frontend Developer",
    achivements: [
      "Collaborated with a team to develop a Quran recitation report web application",
      "Implemented and integrated a RESTful API for the registration page using Formik for form handling and submission",
      "Developed a circular progress bar that dynamically updates based on backend data",
      "Embedded YouTube videos into the application",
      "Integrated a carousel using Framer Motion for smooth animations",
    ],
    description:
      "A one month freelance project designing and building a quran recitation report web app.",
    tags: [
      { text: "Tailwind", color: "lightBlue" },
      { text: "Typescript", color: "darkBlue" },
      { text: "React", color: "lightBlue" },
    ],
    documentations: [
      {
        caption: "Login Page",
        link: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers/forsikatel/loginPage.png",
      },
      {
        caption: "Dashboard Page",
        link: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers/forsikatel/dashboardPage.png",
      },
      {
        caption: "Hadist Page",
        link: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers/forsikatel/hadistPage.png",
      },
      {
        caption: "Recap Page",
        link: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/careers/forsikatel/rekapPage.png",
      },
    ],
    relatedLinks: [
      {
        link: (
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7308149490744471553?collapsed=1"
            height="567"
            width="504"
            allowFullScreen
            title="Embedded post"
          ></iframe>
        ),
      },
    ],
    title: "Quran Recitation Report Web (Freelance)",
    duration: { start: "february 2025", end: "march 2025" },
    pathName: "freelance-forsikatel",
  },
  {
    id: 3,
    alt: "bangkit logo",
    src: bangkitLogo,
    position: "Machine learning cohort",
    achivements: [
      "Achieved the TensorFlow Developer Certificate",
      "Help designed a Nutrition Monitor AI-based app as part of a team-based project",
      "Scraping Nutrition value food as datasets",
    ],
    description:
      "Program that sharpen individual learning and a team-based final project. 5 months program engaging in asynchronous classes via Dicoding Academy and Coursera, with access to expert consultation through discussion forums. The program offers a Machine Learning focused material, capstone project, and preparation for global certification exams upon completion.",
    tags: [
      { text: "Tensorflow", color: "orange" },
      { text: "Python", color: "darkBlue" },
    ],
    title: "Bangkit Academy: Machine Learning Path",
    duration: { start: "february 2023", end: "july 2023" },
    pathName: "bangkit-ml",
  },
];
