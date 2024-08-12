export interface INotes {
    id?: number;
    title: string;
    description: string;
    favorite?: boolean;
    color: string;
    createdAt?: Date;
    updatedAt?: Date;
}
