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
    <div className="   self-center order-first sm:order-last relative flex size-full  max-w-sm md:max-w-md lg:max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-2 py-2   ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
