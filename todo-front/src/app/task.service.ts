import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './interfaces/task';
import { TASKS } from './mocks/tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://127.0.0.1:8000/tasks/';

  // tslint:disable-next-line:typedef
  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  getTasks(): Observable<Task[]> {
    this.log('fetched tasks');
    return this.http.get<Task[]>(this.taskUrl);
  }

  getTask(id: number): Observable<Task> {
    // TODO: send the message _after_ fetching the task
    this.log(`fetched task id=${id}`);
    // @ts-ignore
    return this.http.get<Task[]>(`${this.taskUrl}${id}/`);
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }
}
