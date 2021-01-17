import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './interfaces/task';
import { TASKS } from './mocks/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
  constructor() { }
}
