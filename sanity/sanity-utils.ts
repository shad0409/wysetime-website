import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export const revalidate = 10
export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "xy2vpkl0",
        dataset: "production",
        apiVersion: "2024-04-17",
        useCdn: false,
    });

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
