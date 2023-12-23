import { PiDotFill } from "react-icons/pi";
import { getData } from "../sanity/sanity-utils.ts";

export default async function Languages() {
  const { languages } = await getData();
  return (
    <>
      <h2 className="my-1 text-lg font-bold">Languages</h2>
      {languages?.map((lang) => (
        <>
          <div className="mb-1 flex flex-row items-center gap-2">
            <span>
              <PiDotFill />
            </span>
            {lang.title}
            <span>"{lang.proficiency}"</span>
          </div>
        </>
      ))}
    </>
  );
}
