import Link from "next/link";
import { getData } from "../sanity/sanity-utils.ts";

export default async function Projects() {
  const { projects, sources } = await getData();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="my-1 text-lg font-bold text-yellow-500">Projects</h2>
        <Link href={sources} target="_blank" className="underline">
          Resources
        </Link>
      </div>
      {projects?.map((project) => (
        <>
          <h4 className="font-bold">@{project.title}</h4>
          <span>{project.description}.</span>
          <div className="flex flex-row items-center gap-2 mb-3">
            {project.technologies.map((tech) => (
              <>
                <span className="bg-slate-600">{tech}</span>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
}
