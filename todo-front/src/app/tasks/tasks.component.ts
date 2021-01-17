import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] | undefined;
  selectedTask: Task | undefined;

  constructor(private taskService: TaskService) {}

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
