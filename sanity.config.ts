import {defineConfig} from 'sanity';
import {structureTool} from "sanity/structure";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "xy2vpkl0",
    dataset: "production",
    title: "WyseTime",
    apiVersion: "2024-03-17", // Use today's date or future release date
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas}
})

export default config;