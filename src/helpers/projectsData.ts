type ProjectProps = {
  Header: string;
  projectName: string;
  image: string;
  link: string;
  tags: string[];
  description: string;
  summary: string;
};

// Updated project data with detailed descriptions
export const projects: ProjectProps[] = [
  {
    projectName: "akkadli",
    Header: "Akkadli",
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
    description:
      "Akkadli is a robust data messaging platform designed to empower sellers to efficiently manage product orders and inventory. By integrating real-time messaging, order tracking, and inventory management features, Akkadli allows sellers to streamline their communication with buyers and optimize their workflow. Built with a modern tech stack including TypeScript, React, Node.js, and MongoDB, it ensures scalability and performance, making it an essential tool for e-commerce businesses looking to enhance their operations.",
    summary: "Data messaging platform for sellers to manage orders.",
  },
  {
    projectName: "thewildoasis",
    Header: "The Wild Oasis",
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
    description:
      "The Wild Oasis is a seamless cabin reservation platform that makes booking a getaway simple and enjoyable. With an intuitive interface, users can explore various cabins, check availability, and make reservations instantly. Leveraging the power of Next.js and Supabase, the application is optimized for speed, security, and real-time data synchronization. Whether you're planning a weekend retreat or a long-term stay, The Wild Oasis makes the process hassle-free with integrated features like personalized user profiles, secure payment options, and responsive design.",
    summary: "Cabin reservation platform with easy booking.",
  },
  {
    projectName: "scrubandshine",
    Header: "Scrub & Shine",
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
    description:
      "Scrub & Shine is an agile project management tool tailored for teams to collaborate, plan, and execute their projects effectively. The platform provides features such as task boards, sprint planning, and real-time collaboration to help teams stay on track and meet their goals. Built with Next.js, MongoDB, and Tailwind CSS, it delivers a smooth and responsive user experience. The tool is designed to simplify project workflows, making it ideal for both startups and large enterprises focused on agile methodologies.",
    summary: "Agile project management for teams.",
  },
  {
    projectName: "aiSummarizer",
    Header: "AI Summarizer",
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
    description:
      "AI Summarizer is an innovative tool that leverages AI-powered algorithms to quickly summarize long articles, reports, and documents. By integrating RapidAPI and Redux, the platform ensures fast data retrieval and state management, providing users with concise summaries in seconds. This tool is perfect for professionals, students, and anyone who needs to quickly digest large amounts of information. The platform’s intuitive interface, powered by TypeScript and Next.js, guarantees a smooth user experience, making content summarization effortless.",
    summary: "AI tool for summarizing long articles quickly.",
  },
  {
    projectName: "hiLink",
    Header: "HiLink",
    image: "/projects/hiLink.png",
    link: "/work/hilink",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description:
      "HiLink is a versatile profile-building platform that allows users to create personalized profiles with multiple shareable links. It's perfect for influencers, freelancers, and professionals who want to consolidate their online presence. The application is optimized for speed and responsiveness, enabling users to easily share their profiles across various platforms. Built with TypeScript and Next.js, HiLink focuses on simplicity and efficiency, helping users boost their online visibility.",
    summary: "Create profiles with multiple sharable links.",
  },
  {
    Header: "Clipboard",
    projectName: "clipboard",
    image: "/projects/clipboard.png",
    link: "/work/clipboard",
    tags: ["TypeScript", "React", "Vitejs", "Tailwind CSS"],
    description:
      "Clipboard is a productivity tool designed to help users manage their clipboard history effortlessly. Whether you're a developer, writer, or anyone who frequently copies and pastes content, this tool lets you organize, store, and access your clipboard history with ease. Utilizing Vite.js for blazing-fast performance and React for a smooth UI, Clipboard enhances productivity by making frequently used snippets readily available.",
    summary: "Manage clipboard history with ease.",
  },
];
export const columns: ProjectProps[][] = [[], [], [], []];

projects.forEach((project, index) => {
  columns[index % 2].push(project);
});
