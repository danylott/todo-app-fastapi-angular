import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
