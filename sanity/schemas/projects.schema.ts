const projects = {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
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
                        },
                        {
                            name: "technologies",
                            title: "Technologies",
                            type: "array",
                            of: [{ type: "string" }],
                        },
                        {
                            name: "live",
                            title: "Live",
                            type: "string",
                        },
                        {
                            name: "github",
                            title: "Github",
                            type: "string",
                        },
                        {
                            name: "client",
                            title: "Client",
                            type: "string",
                        },
                        {
                            name: "server",
                            title: "Server",
                            type: "string",
                        },
                        {
                            name: "video",
                            title: "Video",
                            type: "string",
                        },
                        {
                            name: "studio",
                            title: "Studio",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
};

export default projects;
