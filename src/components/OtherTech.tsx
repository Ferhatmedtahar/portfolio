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
export function OtherTech() {
  return (
    <div className="    lg:order-last relative flex size-full  max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-2 py-3 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
