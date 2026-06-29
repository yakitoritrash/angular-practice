import { Component, inject } from '@angular/core';
import { Task } from "../../../../DataModule/Task"
import { StatsBar } from '../../reusable/stats-bar/stats-bar';
import { TaskCard } from '../../reusable/task-card/task-card';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { TASK_LIST } from '../../../../DataModule/tasks.data';

@Component({
  selector: 'app-dashboard',
  imports: [StatsBar, TaskCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit{
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  TaskArray = TASK_LIST;
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
  filteredTasks: Task[] = [...this.TaskArray];
  filterTasks(searchTerm: string) {
    this.filteredTasks = this.TaskArray.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  addTask() {
    let randomTask: Task = {id: Math.random(), title: "generic", priority: "Low", status: "Pending"};
    this.TaskArray.push(randomTask);
    this.filteredTasks = [...this.TaskArray];
  }

  updateFilter(filterType: string) {
    if (filterType === "all") {
      this.router.navigate([], { queryParams: {filter: null} });
    } else {
      this.router.navigate([], { queryParams: {filter: filterType} });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['filter'] === "high") {
        this.filteredTasks = this.TaskArray.filter((task) => task.priority === "High");
      } else if (params['filter'] === "all" || params["filter"] == null) {
        this.filteredTasks = [...this.TaskArray]
      }

    })
  }

}
