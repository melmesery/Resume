import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas";

const config = defineConfig({
  name: 'default',
  title: 'Mohamed Elmesery',
  projectId: 'y3q2le86',
  dataset: 'production',
  apiVersion: "2023-12-22",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})

export default config;