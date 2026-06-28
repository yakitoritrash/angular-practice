import { Component } from '@angular/core';
import { Task } from "../../../../DataModule/Task"
import { StatsBar } from '../../reusable/stats-bar/stats-bar';
import { TaskCard } from '../../reusable/task-card/task-card';

@Component({
  selector: 'app-dashboard',
  imports: [StatsBar, TaskCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  TaskArray: Task[] = [
    {id: 1, title: "Fix CSS", priority: "High", status: "Pending"},
    {id: 2, title: "Fix Something", priority: "Low", status: "Completed"},
  ]
  updateStatus(taskId: number) {
    for (let task of this.TaskArray) {
      if (task.id === taskId) {
        if (task.status === "Pending") {
          task.status = "Completed";
        } else {
          task.status = "Pending"
        }
      }
    }
  }
  togglePriority(taskId: number) {
    for (let task of this.TaskArray) {
      if (task.id === taskId) {
        if (task.priority === "High") {
          task.priority = "Low";
        } else {
          task.priority = "High"
        }
      }
    }
  }
}
