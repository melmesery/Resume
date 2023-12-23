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
    <div className="max-w-[90%] sm:max-w-[60%] mx-auto py-5 sm:py-10">
      <h1 className="w-fit mx-auto text-base sm:text-2xl bg-slate-700 mb-3 sm:mb-5 font-bold">Portfolio Projects Sources</h1>
      <p className="text-slate-400 font-bold mb-3">For any needed authentication, Please use these credentials to login:</p>
      <div className="border-l-8 border-slate-700 p-1 sm:p-3">
        <p className="mb-1 text-xs sm:text-base">Email: mohamed1elmesery@gmail.com</p>
        <p className="mb-1 text-xs sm:text-base">Password: Mm_20130521</p>
      </div>

      <Project />

      <div className="flex flex-col sm:flex-row-reverse items-center justify-between pt-3">
        <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 mb-3">
          <Link href="https://www.linkedin.com/in/melmesery/" target="_blank" className="text-xl sm:text-3xl hover:text-slate-700" >
            <PiLinkedinLogoThin />
          </Link>
          <Link href="https://github.com/melmesery" target="_blank" className="text-xl sm:text-3xl hover:text-slate-700">
            <PiGithubLogoThin />
          </Link>
          <Link href="https://www.facebook.com/e.mesery/" target="_blank" className="text-xl sm:text-3xl hover:text-slate-700">
            <PiFacebookLogoThin />
          </Link>
          <Link href="https://wa.me/201270278442" target="_blank" className="text-xl sm:text-3xl hover:text-slate-700">
            <PiWhatsappLogoThin />
          </Link>
        </div>
        <span className="text-xs sm:text-base">All Rights Reserved © Mohamed Elmesery</span>
      </div>
    </div>
  );
}
