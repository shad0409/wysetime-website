import { PortableTextBlock } from "next-sanity";

export type Solutions = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    content: PortableTextBlock[];
}