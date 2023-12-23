import { Data } from "@/types/data.ts";
import { createClient, groq } from "next-sanity";
import { Projects } from "@/types/projects.ts";
import clientConfig from './config/client-config';

export async function getData(): Promise<Data> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "data"][0] {
          _id,
          _createdAt,
          name,
          job,
          contact,
          birthDate,
          portfolio,
          technicalSkills,
          softSkills,
          languages,
          education,
          projects,
          career,
          sources
      }`
  );
}

export async function getProjects(): Promise<Projects> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projects"][0] {
          _id,
          _createdAt,
          projects
      }`
  );
}