import { Access } from "./access.entity";
export declare class Role {
    id: number;
    name: string;
    createdAt?: Date;
    access: Access;
}
