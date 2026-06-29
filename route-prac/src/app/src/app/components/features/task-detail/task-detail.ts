import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { TASK_LIST } from '../../../../../../DataModule/tasks.data';
import { Router } from '@angular/router';
import { Task } from '../../../../../../DataModule/Task';
import { TaskCard } from '../../../../../components/reusable/task-card/task-card';


@Component({
  selector: 'app-task-detail',
  imports: [TaskCard],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
})
export class TaskDetail implements OnDestroy, OnInit {
  @Input('id') taskId!: string;
  task: Task | undefined;
  isLoading = true;
  startTime!: number;

  ngOnInit(): void {
    this.startTime = Date.now();
    this.task = TASK_LIST.find(t => t.id.toString() === this.taskId.toString());
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  ngOnDestroy(): void {

    const durationSeconds = (Date.now() - this.startTime) / 1000;
    console.log(`Session for Task ${this.taskId} ended. You spent ${durationSeconds.toFixed(2)} seconds`);
  }
  router = inject(Router);
  goBack() {
    this.router.navigate(['/tasks']);
  }
}
