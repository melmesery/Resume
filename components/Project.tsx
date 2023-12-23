import Link from "next/link";
import { getProjects } from "../sanity/sanity-utils.ts";

export default async function Project() {
  const { projects } = await getProjects();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-1 mt-3">
      {projects?.map(
        ({
          title,
          description,
          technologies,
          live,
          github,
          client,
          server,
          video,
          studio,
        }, i) => (
          <div className="border border-slate-700 bg-slate-800 p-2 sm:p-5" key={i}>
            <div className="flex flex-row items-baseline gap-2 mb-2">
              <span className="text-2xl sm:text-3xl font-bold">{i + 1}.</span>
              <h2 className="text-gray-500 text-xl sm:text-2xl font-bold">{title}</h2>
            </div>
            {description && <p className="mb-2">{description}.</p>}
            <div className="flex flex-row flex-wrap items-center gap-1 sm:gap-2 mb-2">
              {technologies.map((tech, i) => (
                <span className="bg-slate-700 hover:bg-cyan-700" key={i}>{tech}</span>
              ))}
            </div>
            <div className="flex flex-row flex-wrap items-center gap-1 sm:gap-3">
              {live && <Link href={live} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 px-2 sm:px-4">Live</Link>}
              {github && <Link href={github} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 px-2 sm:px-4">Github</Link>}
              {client && <Link href={client} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 px-2 sm:px-4">Client</Link>}
              {server && <Link href={server} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 px-2 sm:px-4">Server</Link>}
              {video && <Link href={video} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 sm:px-4">Video</Link>}
              {studio && <Link href={studio} target="_blank" className="border border-slate-700 hover:rounded-xl hover:bg-slate-700 px-2 sm:px-4">Studio</Link>}
            </div>
          </div>
        )
      )}
    </div>
  );
}
