import { BaseId } from "./base-id";

export interface StaffDto extends BaseId {
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    position: string;
    startWorkDate: string;
    photo: string;
}