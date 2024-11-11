type ProjectProps = {
  projectName: string;
  image: string;
  link: string;
  tags: string[];
  description: string;
};

const projects: ProjectProps[] = [
  {
    projectName: "Akkadli",
    image: "/projects/akkadli.png",
    link: "/work/akkadli",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "react-query",
      "nodejs",
      "expressjs",
      "mongodb",
    ],
    description: "Data messaging platform for sellers to manage orders.",
  },
  {
    projectName: "The Wild Oasis",
    image: "/projects/WebWildOasisLanding.webp",
    link: "/work/thewildoasis",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "supabase",
    ],
    description: "Cabin reservation platform with easy booking.",
  },
  {
    projectName: "Scrumb&Shine",
    image: "/projects/scrubandshine.png",
    link: "/work/scrumbandshine",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "mongodb",
    ],
    description: "Agile project management for teams.",
  },

  {
    projectName: "AIsummarizer",
    image: "/projects/aiSummarizer.png",
    link: "/work/aiSummarizer",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "RapidAPI",
      "Redux",
    ],
    description: "AI tool for summarizing long articles quickly.",
  },
  {
    projectName: "HiLink",
    image: "/projects/hiLink.png",
    link: "/work/hilink",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description: "Create profiles with multiple sharable links.",
  },
  {
    projectName: "clipboard",
    image: "/projects/clipboard.png",
    link: "/work/clipboard",
    tags: ["TypeScript", "React", "Vitejs", "Tailwind CSS"],
    description: "Manage clipboard history with ease.",
  },
];

export const columns: ProjectProps[][] = [[], [], [], []];

projects.forEach((project, index) => {
  columns[index % 2].push(project);
});
