import { BaseId } from "./base-id";

export interface ServiceDto extends BaseId {
    name: string;
    description: string;
    price: number;
    photo: string;
    isPopular: boolean;
}