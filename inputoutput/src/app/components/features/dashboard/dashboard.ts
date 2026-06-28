import { Component } from '@angular/core';
import { Task } from "../../../../DataModule/Task"

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  TaskArray: Task[] = [
    {id: 1, title: "Fix CSS", priority: "High", status: "Pending"},
    {id: 2, title: "Fix Something", priority: "Low", status: "Completed"},
  ]
}
