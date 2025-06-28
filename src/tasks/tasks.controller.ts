import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskDto } from './task.dto';
import { Task } from './task.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  create(@Body() payload: TaskDto) {
    this.taskService.create(payload);
  }

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    console.log('Get task by Id called with', id);
    return this.taskService.getById(+id);
  }

  @Patch(':id')
  update(@Body() payload: Task) {
    console.log('Task patch called with', payload);
    return this.taskService.update(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.taskService.delete(+id);
  }
}
