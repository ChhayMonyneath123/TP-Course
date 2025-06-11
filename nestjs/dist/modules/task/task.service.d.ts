import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TaskService {
    private tasksRepo;
    constructor(tasksRepo: Repository<Task>);
    findOne(id: number): Promise<Task>;
    createTask(body: Partial<Task>): Promise<Task>;
    updateTask(id: number, body: Partial<Task>): Promise<Task>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
    findAll(): Promise<Task[]>;
}
