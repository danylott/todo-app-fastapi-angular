import { Injectable } from '@angular/core';

import { Task } from './interfaces/task';
import { TASKS } from './mocks/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Task[] {
    return TASKS;
  }
  constructor() { }
}
