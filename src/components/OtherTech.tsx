import IconCloud from "@/components/ui/icon-cloud";
const slugs = [
  "zod",
  "reactquery",
  "reactrouter",
  "mongoose",
  "graphql",
  "sharp",
  "framer",
  "styledcomponents",
  "prisma",
  "docker",
  "vercel",
  "testinglibrary",
  "github",
  "jira",
  "netlify",
  "swagger",
  "supabase",
  "visualstudiocode",
  "figma",
];
export function OtherTech() {
  return (
    <div className="    order-first sm:order-last relative flex size-full  max-w-md items-center justify-center overflow-hidden rounded-lg bg-background px-2  ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
