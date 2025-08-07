export type ProjectType = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  achieve: string[];
  documentation: {
    caption: string;
    src: string;
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
    documentation: [
      {
        caption: "Demonstration how to use",
        src: "https://evqrdlwphgtlcoafoaas.supabase.co/storage/v1/object/public/projects/keeper-app/KeeperAppDemo.webm",
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
];
