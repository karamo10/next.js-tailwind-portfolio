
export type Client = {
    id: number;
    image_url: string;
    title: string;
    slug: string;
    client: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
};

export type Project = {
    id: number;
    title: string;
    description: string;
    image_url: string;
    button_label: string;
    button_url: string;
};

export type Skill = {
    id: number;
    title: string;
    description: string;
    icon_name: string
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}