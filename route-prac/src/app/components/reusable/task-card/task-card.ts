import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from '../../../../DataModule/Task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [NgClass],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() task!: Task;
  @Output() statusChanged = new EventEmitter<number>();
  @Output() priorityToggled = new EventEmitter<number>();
  onStatusChange() {
    this.statusChanged.emit(this.task.id);
  }
  onpriorityToggle() {
    this.priorityToggled.emit(this.task.id);
  }
}
