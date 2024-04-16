import { PortableTextBlock } from "next-sanity";

export type Quote = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    content: PortableTextBlock[];
}

export interface Quotes {
    id: string;
    text: string;
    source: string;
}