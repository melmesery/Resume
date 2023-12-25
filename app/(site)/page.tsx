import Link from "next/link";
import Project from "@/components/Project.tsx";
import {
  PiFacebookLogoThin,
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiWhatsappLogoThin,
} from "react-icons/pi";

export default function Home() {
  return (
    <div className="max-w-[90%] sm:max-w-[50%] mx-auto py-5">
      <h1 className="w-fit bg-slate-200 px-2 mb-3 sm:mb-5 font-bold">
        Portfolio Projects Sources
      </h1>
      <p className="mb-3">
        For any needed authentication, Please use these credentials to login:
      </p>
      <div className="border-l-2 border-slate-300 p-1">
        <p className="mb-1 text-sm sm:text-base">
          Email: mohamed1elmesery@gmail.com
        </p>
        <p className="mb-1 text-sm sm:text-base">Password: Mm_20130521</p>
      </div>

      <Project />

      <div className="flex flex-row items-center justify-between mt-3 pt-2 border-t">
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2">
          <Link
            href="https://www.linkedin.com/in/melmesery/"
            target="_blank"
            className="text-xl sm:text-3xl"
          >
            <PiLinkedinLogoThin />
          </Link>
          <Link
            href="https://github.com/melmesery"
            target="_blank"
            className="text-xl sm:text-3xl"
          >
            <PiGithubLogoThin />
          </Link>
          <Link
            href="https://www.facebook.com/e.mesery/"
            target="_blank"
            className="text-xl sm:text-3xl"
          >
            <PiFacebookLogoThin />
          </Link>
          <Link
            href="https://wa.me/201270278442"
            target="_blank"
            className="text-xl sm:text-3xl"
          >
            <PiWhatsappLogoThin />
          </Link>
        </div>
        <span className="text-xs sm:text-base">
          Mohamed Elmesery © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
