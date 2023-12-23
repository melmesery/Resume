import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { getData } from "../sanity/sanity-utils.ts";
import { BsCalendarDate } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export const revalidate = 10;

export default async function PersonalInfo() {
    const { name, job, contact, birthDate, portfolio } = await getData();
    return (
        <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <h3 className="text-lg mb-3">{job}</h3>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span><FaMobileAlt /></span>
                <p>{contact.mobile}</p>
            </div>
            <div className="flex flex-row items-center gap-2  mb-1 text-sm">
                <span><MdAlternateEmail /></span>
                <p>{contact.email}</p>
            </div>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span><FaLocationArrow /></span>
                <p>{contact.address}</p>
            </div>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span><FaLinkedinIn /></span>
                <Link href={contact.linkedin} target="_blank">Linkedin.com/melmesery</Link>
            </div>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span><FaGithub/></span>
                <Link href={contact.github} target="_blank">Github.com/melmesery</Link>
            </div>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span><BsCalendarDate /></span>
                <p>{birthDate}</p>
            </div>
            <div className="flex flex-row items-center gap-2 mb-1 text-sm">
                <span></span>
                <p>{portfolio}</p>
            </div>
        </div>
    )
}
