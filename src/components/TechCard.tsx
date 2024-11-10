import Image from "next/image";
type TechCardProps = {
  name: string;
  image: string;
  color: string;
  description: string;
};

export default function TechCard({
  name,
  image,
  color,
  description,
}: TechCardProps) {
  return (
    <div className=" flex items-center flex-1 gap-5 p-2.5 rounded-xl border border-primary-700  bg-primary-900  hover:bg-primary-800 dark:hover:bg-dark-300 hover:border-primary-500  transition-colors duration-300">
      <div
        className={`p-3  rounded-xl w-fit`}
        style={{ backgroundColor: `${color}33` }}
      >
        <Image
          src={image}
          alt="bash-logo"
          loading="lazy"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="size-8  "
        />
      </div>
      <div>
        <h4 className="text-lg font-medium cursor-default">{name}</h4>
        <p className="text-slate-100/80  text-sm cursor-default">
          {description}
        </p>
      </div>
    </div>
  );
}
