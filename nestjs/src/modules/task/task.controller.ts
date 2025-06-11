import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }
  @Patch('/:id/done')
  markTaskAsDone(@Param('id') id: string) {
    return this.taskService.updateTask(+id, { completedAt: new Date() });
  }

  @Patch('/:id/pending')
  markTaskAsPending(@Param('id') id: string) {
    return this.taskService.updateTask(+id, { completedAt: null });
  }


  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(+id);
  }


}