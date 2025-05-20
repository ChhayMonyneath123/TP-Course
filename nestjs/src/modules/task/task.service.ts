import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  getTask(id: number) {
    return this.tasksRepo.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  createTask(body: Partial<Task>) {
    const task = this.tasksRepo.create(body);
    return this.tasksRepo.save(task);
  }

  updateTask(id: number, body: Partial<Task>) {
    return this.tasksRepo.update(id, body);
  }

  deleteTask(id: number) {
    return this.tasksRepo.delete(id);
  }

  findAll() {
    return this.tasksRepo.find({ relations: ['user'] });
  }
}
