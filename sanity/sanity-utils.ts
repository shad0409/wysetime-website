import { PortableTextBlock, createClient, groq } from "next-sanity";

import { Project } from "@/types/Product";
import { Home } from "@/types/Home";
import { Quote, Quotes } from "@/types/Home_Quotes";
import { Solutions } from "@/types/Solutions";
import { SolutionsMore } from "@/types/SolutionsMore";
import { CoreTechs } from "@/types/CoreTech";

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

export async function getHomeQuoteData(): Promise<Quotes[]> {
    const results = await client.fetch(
        groq`*[_type == "home_quote"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`
    );

    return results.map((home_quote: Quote) => ({
        id: home_quote._id,
        text: home_quote.content[0]?.children[0]?.text, // Assuming 'text' is nested inside 'content'
        source: home_quote.name  
    }));
}

export async function getSolutionData(): Promise<Solutions[]> {
    return client.fetch(
        groq`*[_type == "solution"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`
    );
}

export async function getSolutionMoreData(): Promise<SolutionsMore[]> {
    return client.fetch(
        groq`*[_type == "solution_more"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`
    );
}

export async function getCoreTech(): Promise<CoreTechs[]> {
    return client.fetch(
        groq`*[_type == "coretech"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            content
        }`
    )
}