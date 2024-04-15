import { Project } from "@/types/Product";
import { Home } from "@/types/Home";
import { createClient, groq } from "next-sanity";

export const revalidate = 10

const client = createClient({
    projectId: "xy2vpkl0",
    dataset: "production",
    apiVersion: "2024-04-17",
    useCdn: false,
});

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->.url,
            url,
            content
        }`
    )
}

export async function getHomeData(): Promise<Home[]> {
    return client.fetch(
        groq`*[_type == "home"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->.url,
            url,
            content
        }`
    );
}
