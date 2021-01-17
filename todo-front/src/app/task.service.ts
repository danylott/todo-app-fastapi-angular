import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './interfaces/task';
import { TASKS } from './mocks/tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    this.messageService.add('TaskService: fetched tasks');
    return of(TASKS);
  }

  getTask(id: number): Observable<Task> {
    // TODO: send the message _after_ fetching the task
    this.messageService.add(`TaskService: fetched task id=${id}`);
    // @ts-ignore
    return of(TASKS.find(task => task.id === id));
  }

  constructor(private messageService: MessageService) { }
}
