export type Data = {
    _id: string;
    createdAt: Date;
    name: string;
    job: string;
    contact: {
        mobile: string;
        email: string;
        address: string;
        linkedin: string;
        github: string;
    };
    birthDate: string;
    portfolio: string;
    technicalSkills: string[];
    softSkills: string[];
    languages: { title: string; proficiency: string }[];
    education: { degree: string; institution: string; graduationDate: string }[];
    projects: {
        title: string;
        description: string;
        technologies: string[];
    }[];
    career: string;
    sources: string;
};