import { Task } from 'src/tasks/task.interface';

export interface User {
  id: number;
  name: string;
  tasks: Task[];
}
