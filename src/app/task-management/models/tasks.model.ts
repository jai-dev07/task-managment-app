import { Priority, Status } from "./task.enum";

export interface ITasks   {
    id?:number;
    position?: number;
    title?: string;
    description?: string;
    status?: Status;
    priority?: Priority;
    dueDate: string;
}