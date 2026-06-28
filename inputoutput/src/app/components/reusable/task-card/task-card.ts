import { Component, Input } from '@angular/core';
import { Task } from '../../../../DataModule/Task';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() task!: Task;
}
