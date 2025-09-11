export type ProjectType = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  achieve: string[];
  features: string[];
  documentation: {
    caption: string;
    src: string;
    type: "video" | "image";
  }[];
  relatedLinks?: {
    caption?: string;
    link: string;
  }[];
  pathName: string;
}[];

export const Projects: ProjectType = [
  {
    id: 1,
    title: "Keeper App",
    thumbnail:
      "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/projects/keeper-app/Keeper_App_Home.png",
    description:
      "Keeper App is a simple note-taking application built with React and JavaScript. It allows users to quickly create and save their notes.",
    achieve: [
      "Learn React and JavaScript",
      "Learn useState behaviour and how to update the state",
      "Learn how to store object and update the object in the state",
    ],
    features: ["User can create and save notes"],
    documentation: [
      {
        caption: "Demonstration how to use",
        src: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/projects/keeper-app/KeeperAppDemo.webm",
        type: "video",
      },
    ],
    relatedLinks: [
      {
        caption: "Github",
        link: "https://github.com/Killerz1724/Keeper-App",
      },
    ],
    pathName: "keeper-app",
  },
  {
    id: 2,
    title: "Tejoflow App",
    thumbnail:
      "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/projects/ewallet-app/TejoflowLogo-Orange.png",
    description:
      "Tejoflow is the smart, modern e-wallet designed to keep your finances flowing with ease. Whether you’re checking your balance, tracking expenses, or transferring money, Tejoflow gives you full control in one sleek app.",
    achieve: [
      "Expand my experiennce, tools, and knowledge on Nextjs framework",
      "Implement server side actions such as form handling actions",
      "Implement middleware for route protection",
      "Implement redux and redux presist",
      "Exploring and changing shadcn/ui components",
      "Exploring golang tools such as cron as scheduler",
      "Able to change images through cloud platform such as Supabase",
    ],
    features: [
      "User can login and register",
      "User can reset their password",
      "User can customized their profile picture",
      "User can see their balance, monthly income, and monthly expenses",
      "User can use and see exchange rates between currencies",
      "User can transfer money to other users",
      "User can see their transaction history by filters",
      "User can top up their balance",
    ],
    documentation: [
      {
        caption: "Dashboard Display",
        src: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/projects/ewallet-app/dashboard-display.png",
        type: "image",
      },
    ],
    relatedLinks: [
      {
        caption: "TRY IT NOW!",
        link: "https://tejoflow.tejofolio.xyz/",
      },
      {
        caption: "Github",
        link: "https://github.com/Killerz1724/E-wallett-app",
      },
    ],
    pathName: "tejoflow-app",
  },
];
