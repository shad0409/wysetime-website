import {defineConfig} from 'sanity';
import {structureTool} from "sanity/structure";

const config = defineConfig({
    projectId: "xy2vpkl0",
    dataset: "production",
    title: "WyseTime",
    apiVersion: "2024-03-17", // Use today's date or future release date
    basePath: "/admin",
    plugins: [structureTool()]
})

export default config;