import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { Task } from './task.interface';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: 0,
      title: 'NesJS Playground',
      description: 'Challenge accepted from Gemini',
    },
  ];
  private lastId = 0;

  create(task: TaskDto) {
    const newTask = Object.assign({ id: ++this.lastId }, task);
    this.tasks.push(newTask);
  }

  getAll(): Task[] {
    return this.tasks;
  }

  getById(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  update(payload: Task): void {
    // also need error handling here,
    const task = this.tasks.find((task) => task.id === +payload.id);
    if (!task) {
      throw new NotFoundException(
        `Task with ID ${payload.id} not found for update`,
      );
    }
    Object.assign(task, payload);
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
