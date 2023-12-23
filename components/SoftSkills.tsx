import { getData } from "../sanity/sanity-utils.ts";
import { PiDotFill } from "react-icons/pi";

export default async function SoftSkills() {
  const { softSkills } = await getData();
  return (
    <>
      <h2 className="my-1 text-lg font-bold">Soft Skills</h2>
      {softSkills?.map((skill) => (
        <div className="mb-1 flex flex-row items-center gap-2">
          <span>
            <PiDotFill />
          </span>
          {skill}
        </div>
      ))}
    </>
  );
}
