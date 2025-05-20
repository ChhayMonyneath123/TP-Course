import { TaskService } from './task.service';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTask(id: string): Promise<import("./task.entity").Task | null>;
    createTask(body: any): Promise<import("./task.entity").Task>;
    markTaskAsDone(body: any, id: string): Promise<import("typeorm").UpdateResult>;
    markTaskAsPending(body: any, id: string): Promise<import("typeorm").UpdateResult>;
    deleteTask(id: string): Promise<import("typeorm").DeleteResult>;
}
