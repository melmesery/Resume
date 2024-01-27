import Link from "next/link";
import { getProjects } from "../sanity/sanity-utils.ts";

export const revalidate = 10;

export default async function Project() {
  const { projects } = await getProjects();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-1 mt-3">
      {projects?.map(
        (
          {
            title,
            description,
            technologies,
            live,
            github,
            client,
            server,
            video,
            studio,
          },
          i
        ) => (
          <div key={i}>
            <div className="border border-slate-300 shadow-md p-2">
              <div className="flex flex-row items-baseline gap-1">
                <span className=" text-gray-500 font-bold">{i + 1}.</span>
                <h2 className="text-xl font-bold">
                  {title}
                </h2>
              </div>
              {description && <p className="my-2">{description}.</p>}
              <div className="flex flex-row flex-wrap items-center gap-1 my-1">
                {technologies.map((tech, i) => (
                  <span className="bg-slate-100 px-1" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-1 mt-2 mb-3">
              {live && (
                <Link
                  href={live}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-2 sm:px-4"
                >
                  Live
                </Link>
              )}
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-1 sm:px-2"
                >
                  Github
                </Link>
              )}
              {client && (
                <Link
                  href={client}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-1 sm:px-2"
                >
                  Client
                </Link>
              )}
              {server && (
                <Link
                  href={server}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-1 sm:px-2"
                >
                  Server
                </Link>
              )}
              {video && (
                <Link
                  href={video}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-1 sm:px-2"
                >
                  Video
                </Link>
              )}
              {studio && (
                <Link
                  href={studio}
                  target="_blank"
                  className="border border-slate-200 rounded-xl bg-slate-100 hover:bg-white px-1 sm:px-2"
                >
                  Studio
                </Link>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
