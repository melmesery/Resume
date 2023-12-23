const data = {
  name: "data",
  title: "Data",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "job",
      title: "Job",
      type: "string",
    },
    {
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        { name: "mobile", title: "Mobile", type: "string" },
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule: any) => Rule.email(),
        },
        { name: "address", title: "Address", type: "string" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "github", title: "GitHub", type: "url" },
      ],
    },
    {
      name: "birthDate",
      title: "Birth Date",
      type: "date",
    },
    {
      name: "portfolio",
      title: "Portfolio",
      type: "string",
    },
    {
      name: "technicalSkills",
      title: "Technical Skills",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "softSkills",
      title: "Soft Skills",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Language",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "proficiency",
              title: "Proficiency",
              type: "string",
              options: { list: ["Good", "Intermediate", "Advanced", "Native"] },
            },
          ],
        },
      ],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "degree",
              title: "Degree",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "institution",
              title: "Institution",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "graduationDate",
              title: "Graduation Date",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "technologies",
              title: "Technologies",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "career",
      title: "Career",
      type: "text",
    },
    {
      name: "sources",
      title: "Sources",
      type: "string",
    },
  ],
};

export default data;
