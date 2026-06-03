import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { Project } from "../../types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
    >
      <div className="border-b border-zinc-200 bg-zinc-100 p-4 dark:border-white/10 dark:bg-zinc-900/80">
        <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-white px-6 py-10 dark:bg-zinc-950 sm:min-h-[300px]">
          {/* Laptop */}
          <Image
            src={project.desktopImage}
            alt={`${project.title} desktop mockup`}
            width={1100}
            height={700}
            className="w-full max-w-[760px] object-contain transition duration-500 group-hover:scale-[1.02]"
          />

          {/* Phone */}
          <Image
            src={project.mobileImage}
            alt={`${project.title} mobile mockup`}
            width={400}
            height={800}
            className="xs:w-[230px] absolute bottom-[10%] right-[-15%] z-10 w-[200px] object-contain drop-shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-[-6deg] group-hover:scale-[1.05] sm:w-[350px] md:bottom-[9%] md:right-[-13%] md:w-[230px] lg:right-[-12%] lg:w-[245px] xl:w-[260px]"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.category ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                {project.category}
              </p>
            ) : null}

            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
          </div>

          <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
            Live
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition group-hover:text-cyan-600 dark:text-zinc-200 dark:group-hover:text-cyan-300">
          View project <BsArrowUpRight />
        </div>
      </div>
    </a>
  );
}
