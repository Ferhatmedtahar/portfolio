import IconCloud from "@/components/ui/icon-cloud";
const slugs = [
  "zod",
  "reactquery",
  "reactrouter",
  "mongoose",
  "prisma",
  "docker",
  "vercel",
  "jest",
  "testinglibrary",
  "github",
  "jira",
  "netlify",
  "swagger",
  "supabase",
  "visualstudiocode",
  "figma",
];
export function IconCloudDemo() {
  return (
    <div className="relative flex size-full  max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
