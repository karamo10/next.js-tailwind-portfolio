
export type Client = {
    id: number;
    image_url: string;
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