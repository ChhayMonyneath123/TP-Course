import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  // getTask(id: number) {
  //   return this.tasksRepo.findOne({
  //     where: { id },
  //     relations: ['user'],
  //   });
  // }

  async findOne(id: number) {
  const task = await this.tasksRepo.findOne({ where: { id } });

  if (!task) {
    throw new NotFoundException(`Task with id ${id} not found`);
  }

  return task;
}

  createTask(body: Partial<Task>) {
    const task = this.tasksRepo.create(body);
    return this.tasksRepo.save(task);
  }

  async updateTask(id: number, body: Partial<Task>) {
  await this.tasksRepo.update(id, body);
  return this.findOne(id);
}

  deleteTask(id: number) {
    return this.tasksRepo.delete(id);
  }

  findAll() {
    return this.tasksRepo.find({ relations: ['user'] });
  }

  



}
